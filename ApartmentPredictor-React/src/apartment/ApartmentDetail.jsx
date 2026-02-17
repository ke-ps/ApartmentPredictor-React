const ApartmentDetail = ({apartment, onBack, onDelete, onEdit}) => {
    return (
        <div>
            <h2>{apartment.title}</h2>
            <p><strong>Ciudad:</strong> {apartment.city}</p>
            <p><strong>Precio:</strong> {apartment.price} €</p>
            <p><strong>Habitaciones:</strong> {apartment.rooms}</p>
            <p><strong>Baños:</strong> {apartment.bathrooms}</p>
            <p><strong>Tamaño:</strong> {apartment.size}</p>
            <p><strong>Parking:</strong> {apartment.parking ? "Sí" : "No"}</p>
            <p><strong>Terraza:</strong> {apartment.terrace ? "Sí" : "No"}</p>
            <p><strong>Piscina:</strong> {apartment.pool ? "Sí" : "No"}</p>
            <p><strong>Disponible:</strong> {apartment.available ? "Sí" : "No"}</p>


            <button onClick={onBack}>
                Volver a la lista
            </button>

            <button 
                onClick={() => onDelete(apartment.id)}
                style={{marginLeft: "1rem", color:"red"}}
            >
                Eliminar apartamento
            </button>

            <button onClick={() => onEdit(apartment)}>
                Editar
            </button>

        </div>
    );
}

export default ApartmentDetail;