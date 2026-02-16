import { useState } from "react";
import { apartments } from "./data/apartments.js";
import ApartmentList from "./apartment/ApartmentList";
import ApartmentForm from "./apartment/ApartmentForm";
import ApartmentDetail from "./apartment/ApartmentDetail.jsx";

function App() {
  const [apartmentsList, setApartmentsList] = useState(apartments);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [viewMode, setViewMode] = useState("list");
  const [apartmentToEdit, setApartmentToEdit] = useState(null);
  const handleDeleteApartment = (id) => {
    setApartmentsList(
      apartmentsList.filter((apt) => apt.id !== id)
    );
    setSelectedApartment(null);
  };

const handleSaveApartments = (apartment) => {
  if (apartment.id) {
    // EDITAR
    setApartmentsList(
      apartmentsList.map((apt) =>
        apt.id === apartment.id ? apartment : apt
      )
    );
  } else {
    // CREAR
    const id = apartmentsList.length + 1;
    setApartmentsList([...apartmentsList, { ...apartment, id }]);
  }

  setApartmentToEdit(null);
  setViewMode("list");
};


  return (
    <div>
      <h1>Apartment Predictor</h1>

      <button onClick={() => setViewMode("form")}>
        Nuevo apartamento
      </button>

        {viewMode === "form" && (
        <ApartmentForm 
          onSave={handleSaveApartments} 
          apartmentToEdit={apartmentToEdit}
          onCancel={() => setViewMode("list")}
        />
      )}

      {viewMode === "list" && !selectedApartment && (
        <ApartmentList
          apartments={apartmentsList}
          onSelectApartment={setSelectedApartment}
        />
      )}

      {viewMode === "list" && selectedApartment && (
        <ApartmentDetail
          apartment={selectedApartment}
          onBack={() => setSelectedApartment(null)}
          onDelete={handleDeleteApartment}
          onEdit={(apt) => {
            setApartmentToEdit(apt);
            setViewMode("form");
          }} 
          />
      )}

    
    </div>
  );
}

export default App;

