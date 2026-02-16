

const ApartmentList = ({ apartments, onSelectApartment }) => {
  return (
    <div>
      {apartments.map((apt) => (
        <div
          key={apt.id}
          style={{ cursor: "pointer", marginBottom: "1rem" }}
          onClick={() => onSelectApartment(apt)}
        >
          <h2>{apt.title}</h2>
          <p>{apt.city}</p>
          <p>Precio: {apt.price} €</p>
          <p>Habitaciones: {apt.rooms}</p>
          <p>Baños: {apt.bathrooms}</p>
          <p>Tamaño: {apt.size}</p>

        </div>
      ))}
    </div>
  );
};

export default ApartmentList;

