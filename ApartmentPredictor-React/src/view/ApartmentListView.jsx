const ApartmentListView = ({ apartments, selectedApartment, onSelect }) => {
  if (selectedApartment) {
  return (
    <div>
          <h2>{selectedApartment.title}</h2>
          <p>{apt.city}</p>
          <p>Precio: {apt.price} €</p>
          <p>Habitaciones: {apt.rooms}</p>
          <p>Baños: {apt.bathrooms}</p>
          <p>Tamaño: {apt.size} m²</p>
          <p>Parking: {apt.parking ? "Sí" : "No"}</p>
          <p>Terraza: {apt.terrace ? "Sí" : "No"} </p>
          <p>Piscina: {apt.pool ? "Sí" : "No"} </p>
          <p>Disponible: {apt.available ? "Sí" : "No"} </p>
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
