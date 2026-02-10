import {useState} from "react";
import {apartments} from "../data/apartments";


const ApartmentList = ({onSelectApartment}) => {
  const [apartmentList] = useState(apartments);

return (
<div>
  {apartmentList.map((apt) => (
    <div
    key={apt.id}
    style={{cursor: "pointer", marginBottom: "1rem"}}
    onClick={() => onSelectApartment (apt)}
    >
      <h2>{apt.title}</h2>
      <p> {apt.city} </p>
    </div>
  ))}
  </div>
  );
      
};
  
export default ApartmentList;
