import { useState } from "react";
import { apartments } from "./data/apartments.js";
import ApartmentList from "./apartment/ApartmentList";
import ApartmentForm from "./apartment/ApartmentForm";

function App() {
  const [apartmentsList, setApartmentsList] = useState(apartments);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [viewMode, setViewMode] = useState("list");

  const handleSaveApartments = (newApartment) => {
    const id = apartmentsList.length + 1;
    const apartmentToAdd = { id, ...newApartment };
    setApartmentsList([...apartmentsList, apartmentToAdd]);
    setViewMode("list");
  };

  return (
    <div>
      <h1>Apartment Predictor</h1>

      <button onClick={() => setViewMode("form")}>
        Nuevo apartamento
      </button>

      {viewMode === "list" && (
        <ApartmentList
          apartments={apartmentsList}
          onSelectApartment={setSelectedApartment}
        />
      )}

      {viewMode === "form" && (
        <ApartmentForm onSave={handleSaveApartments} />
      )}
    </div>
  );
}

export default App;

