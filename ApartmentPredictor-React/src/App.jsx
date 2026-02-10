import {useState} from "react";
import ApartmentList from "./apartment/ApartmentList";



 function App() {
   const [apartmentSelected, setApartmentSelected] = useState (null);


  return (
    <div className="App">
      <h1>Bienvenido al Predictor de Apartamentos</h1>
    

     <ApartmentList onSelectApartment={setApartmentSelected} />

     {apartmentSelected && (
      <div>
          <h2>{apartmentSelected.title}</h2>
          <p>{apartmentSelected.city}</p>
          <p>Precio: {apartmentSelected.price} €</p>
          <p>Habitaciones: {apartmentSelected.rooms}</p>
          <p>Baños: {apartmentSelected.bathrooms}</p>
          <p>Tamaño: {apartmentSelected.size} m²</p>
          <p>Parking: {apartmentSelected.parking ? "Sí" : "No"}</p>
          <p>Terraza: {apartmentSelected.terrace ? "Sí" : "No"}</p>
          <p>Piscina: {apartmentSelected.pool ? "Sí" : "No"}</p>
          <p>Disponible: {apartmentSelected.available ? "Sí" : "No"}</p>
        </div>
      
      )}
    </div>
  );
}

export default App;
