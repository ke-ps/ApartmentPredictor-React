import { useState, useEffect } from "react";

const ApartmentForm = ({ onSave, apartmentToEdit, onCancel }) => {
  // Estados de cada campo
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [rooms, setRooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [size, setSize] = useState("");
  const [parking, setParking] = useState(false);
  const [terrace, setTerrace] = useState(false);
  const [pool, setPool] = useState(false);
  const [available, setAvailable] = useState(true);

  
  useEffect(() => {
    if (apartmentToEdit) {
      setTitle(apartmentToEdit.title);
      setCity(apartmentToEdit.city);
      setPrice(apartmentToEdit.price);
      setRooms(apartmentToEdit.rooms);
      setBathrooms(apartmentToEdit.bathrooms);
      setSize(apartmentToEdit.size);
      setParking(apartmentToEdit.parking);
      setTerrace(apartmentToEdit.terrace);
      setPool(apartmentToEdit.pool);
      setAvailable(apartmentToEdit.available);
    }
  }, [apartmentToEdit]);


  const handleSave = () => {
    onSave({
      id: apartmentToEdit?.id, 
      title,
      city,
      price: Number(price),
      rooms: Number(rooms),
      bathrooms: Number(bathrooms),
      size: Number(size),
      parking,
      terrace,
      pool,
      available,
    });
  };

  return (
    <div>
      <h2>{apartmentToEdit ? "Editar Apartamento" : "Nuevo Apartamento"}</h2>

      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Habitaciones"
        value={rooms}
        onChange={(e) => setRooms(e.target.value)}
      />

      <input
        type="number"
        placeholder="Baños"
        value={bathrooms}
        onChange={(e) => setBathrooms(e.target.value)}
      />

      <input
        type="number"
        placeholder="Tamaño (m²)"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={parking}
          onChange={(e) => setParking(e.target.checked)}
        />
        Parking
      </label>

      <label>
        <input
          type="checkbox"
          checked={terrace}
          onChange={(e) => setTerrace(e.target.checked)}
        />
        Terraza
      </label>

      <label>
        <input
          type="checkbox"
          checked={pool}
          onChange={(e) => setPool(e.target.checked)}
        />
        Piscina
      </label>

      <label>
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
        Disponible
      </label>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={handleSave}>Guardar</button>
        {onCancel && (
          <button onClick={onCancel} style={{ marginLeft: "1rem" }}>
            Cancelar
          </button>
        )}
      </div>
    </div>
  );
};

export default ApartmentForm;

