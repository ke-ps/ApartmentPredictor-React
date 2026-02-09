import {useState} from "react";
import {apartments} from "../data/apartments";
import ApartmentListView from "../view/ApartmentListView";

const ApartmentList = () => {
const [apartmentList, setApartmentList] = useState(apartments);
const [selectedApartment, setSelectedApartment] =useState(null);
const handleSelectApartment = (apt) => {
  console.log("Seleccionando", apt);
  setSelectedApartment (apt);
};

  return ( 
  <ApartmentListView 
  apartments={apartmentList}
  selectedApartment={selectedApartment}
  onSelect={handleSelectApartment} 
  />
  );
      
};
  

export default ApartmentList;
