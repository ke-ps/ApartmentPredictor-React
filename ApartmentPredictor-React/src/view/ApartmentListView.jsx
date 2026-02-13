const ApartmentListView = ({ apartments, selectedApartment, onSelect }) => {
  if (selectedApartment) {
  return (
<div>
  <h2>{selectedApartment.title}</h2>
  <p>{selectedApartment.city}</p>
  <p>Precio: {selectedApartment.price} €</p>
  <p>Habitaciones: {selectedApartment.rooms}</p>
  <p>Baños: {selectedApartment.bathrooms}</p>
  <p>Tamaño: {selectedApartment.size} m²</p>
  <p>Parking: {selectedApartment.parking ? "Sí" : "No"}</p>
  <p>Terraza: {selectedApartment.terrace ? "Sí" : "No"} </p>
  <p>Piscina: {selectedApartment.pool ? "Sí" : "No"} </p>
  <p>Disponible: {selectedApartment.available ? "Sí" : "No"} </p>
  <button onClick={() => onSelect(null)}>Volver a la lista</button>
</div>

    );
}

return (
  <div>
    <h1>Apartments</h1>
    <ul>
      {apartments.map((apt) => (
        <li
          key={apt.id}
          onClick={()=> onSelect(apt)}
          style={{ cursor: "pointer", marginBottom: "1rem" }}
        >
            <strong>{apt.title} </strong> - {apt.city} | Precio: {apt.price} €
        </li>

      ))}
    </ul>
  </div>
  );
};

export default ApartmentListView;
