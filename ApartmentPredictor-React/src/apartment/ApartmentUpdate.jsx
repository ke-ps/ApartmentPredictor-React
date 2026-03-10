import { useState } from "react";
import ApartmentForm from "../components/ApartmentForm";

const ApartmentUpdate = ({ apartment, onSubmit, isLoading, error, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    price: apartment?.price || "",
    area: apartment?.area || "",
    bedrooms: apartment?.bedrooms || "",
    bathrooms: apartment?.bathrooms || "",
    stories: apartment?.stories || "",
    mainroad: apartment?.mainroad === "yes" || false,
    parking: apartment?.parking === 1 || false,
    guestroom: apartment?.guestroom === "yes" || false,
    basement: apartment?.basement === "yes" || false,
    hotwaterheating: apartment?.hotwaterheating === "yes" || false,
    airconditioning: apartment?.airconditioning === "yes" || false,
    prefarea: apartment?.prefarea === "yes" || false,
    furnishingstatus: apartment?.furnishingstatus || "unfurnished"
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await onSubmit(formData, apartment.id);
    if (success) {
      onSuccess();
    }
  };

  return (
    <ApartmentForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
      onCancel={onCancel}
      submitText="Update Apartment"
    />
  );
};

export default ApartmentUpdate;