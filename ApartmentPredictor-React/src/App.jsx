import { useState, useEffect } from "react";
import { apartments as initialApartments } from "./data/apartments.js";
import ApartmentList from "./apartment/ApartmentList";
import ApartmentForm from "./apartment/ApartmentForm";
import ApartmentDetail from "./apartment/ApartmentDetail.jsx";

function App() {
  // Recuperamos la lista del localStorage, si no existe usamos initialApartments
  const [apartmentsList, setApartmentsList] = useState(() => {
    const saved = localStorage.getItem("apartments");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : initialApartments;
      } catch {
        return initialApartments;
      }
    }
    return initialApartments;
  });

  const [apartmentToEdit, setApartmentToEdit] = useState(() => {
   const saved = localStorage.getItem("apartmentToEdit");
    return saved ? JSON.parse(saved) : null;
});

  const [selectedApartment, setSelectedApartment] = useState(null);

  const [viewMode, setViewMode] = useState(() => {
    const savedApartment = localStorage.getItem("apartmentToEdit");
    return savedApartment ? "form" : "list";
});

  // Guardamos automáticamente la lista cada vez que cambie

  useEffect(() => {
  if (apartmentToEdit) {
    localStorage.setItem("apartmentToEdit", JSON.stringify(apartmentToEdit));
  } else {
    localStorage.removeItem("apartmentToEdit");
  }
}, [apartmentToEdit]);


  // Estado de apartamento seleccionado y de edición







  // Guardar o actualizar apartamento
  const handleSaveApartments = (apartment) => {
    if (apartment.id) {
      // Editar existente
      setApartmentsList(
        apartmentsList.map((apt) => (apt.id === apartment.id ? apartment : apt))
      );
    } else {
      // Crear nuevo
      const id = apartmentsList.length
        ? Math.max(...apartmentsList.map((a) => a.id)) + 1
        : 1;
      setApartmentsList([...apartmentsList, { ...apartment, id }]);
    }

    setApartmentToEdit(null);
    setViewMode("list");
  };

  // Eliminar apartamento
  const handleDeleteApartment = (id) => {
    setApartmentsList(apartmentsList.filter((apt) => apt.id !== id));
    setSelectedApartment(null);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Apartment Predictor</h1>

      {viewMode === "list" && !selectedApartment && (
        <>
          <button onClick={() => setViewMode("form")}>Nuevo apartamento</button>
          <ApartmentList
            apartments={apartmentsList}
            onSelectApartment={setSelectedApartment}
          />
        </>
      )}

      {selectedApartment && viewMode === "list" && (
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

      {viewMode === "form" && (
        <ApartmentForm
          onSave={handleSaveApartments}
          apartmentToEdit={apartmentToEdit}
          onCancel={() => {
          setApartmentToEdit(null);
            localStorage.removeItem("apartmentToEdit");
             setViewMode("list");


          }}
        />
      )}
    </div>
  );
}

export default App;




