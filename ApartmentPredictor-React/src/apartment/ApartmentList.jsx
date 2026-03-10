// src/apartment/ApartmentList.jsx
import { useState } from "react";
import { useApartments } from "../data/useApartments";
import { useApartmentService } from "../middleware/apartmentServiceHooks";
import ApartmentUpdate from "./ApartmentUpdate";
import ApartmentListContainer from "./ApartmentListContainer";
import ApartmentDetail from "./ApartmentDetail";

const ApartmentList = ({ refreshTrigger, onUpdateSubmit }) => {
  // Use the custom hook to get apartments data and states
  const { apartments, isLoading, isAxiosError, refetch } = useApartments(refreshTrigger);
  
  // Use the apartment service for API calls
  const apartmentService = useApartmentService();
  
  // View state management
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Render loading state
  if (isLoading) {
    return (
      <>
        <h1>Apartments</h1>
        <p>This is an exercise to test react render</p>
        <p>Loading...</p>
      </>
    );
  }

  // Render error state
  if (isAxiosError) {
    return (
      <>
        <h1>Apartments</h1>
        <p>This is an exercise to test react render</p>
        <p>Error loading apartments. Please try again later.</p>
      </>
    );
  }

  const handleDelete = async (apartmentId) => {
    if (!window.confirm("Are you sure you want to delete this apartment?")) {
      return;
    }

    setIsDeleting(true);
    try {
      await apartmentService.deleteApartment(apartmentId);
      refetch();
    } catch (error) {
      console.error("Error deleting apartment:", error);
      if (error.response?.status === 500) {
        alert("Failed to delete apartment: Database constraint violation. Please contact administrator.");
      } else if (error.response?.status === 404) {
        alert("Apartment not found or already deleted.");
      } else {
        alert("Failed to delete apartment. Please try again later.");
      }
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDetail = (apartment) => {
    setSelectedApartment(apartment);
    setShowDetail(true);
    setShowUpdateForm(false);
  };

  const handleUpdate = (apartment) => {
    setSelectedApartment(apartment);
    setShowUpdateForm(true);
    setShowDetail(false);
  };

  const handleFormSuccess = () => {
    setShowUpdateForm(false);
    setSelectedApartment(null);
    refetch();
  };

  const handleCancel = () => {
    setShowUpdateForm(false);
    setShowDetail(false);
    setSelectedApartment(null);
  };

  // Render apartments list
  return (
    <>
      <h1>Apartments</h1>
      <p>This is an exercise to test react render</p>
      
      {showUpdateForm && selectedApartment && (
        <div className="card update-form-container">
          <h2>Update Apartment</h2>
          <ApartmentUpdate
            apartment={selectedApartment}
            onSubmit={onUpdateSubmit}
            onSuccess={handleFormSuccess}
            onCancel={handleCancel}
          />
        </div>
      )}

      {showDetail && selectedApartment && (
        <ApartmentDetail 
          apartment={selectedApartment} 
          onClose={handleCancel}
          onUpdateSubmit={onUpdateSubmit}
        />
      )}

      <ApartmentListContainer 
        apartments={apartments}
        onDetail={handleDetail}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default ApartmentList;
