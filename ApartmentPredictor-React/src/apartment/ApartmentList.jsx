// src/apartment/ApartmentList.jsx
import { useApartments } from "../data/useApartments";
import ApartmentListView from "../view/ApartmentListView";

const ApartmentList = () => {
  // Use the custom hook to get apartments data and states
  // we use destructuring assignment to extract the values
  const { apartments, isLoading, isAxiosError } = useApartments();

  // Render the ApartmentListView with the fetched data and states
  return (
    <ApartmentListView
      apartments={apartments}
      isLoading={isLoading}
      isAxiosError={isAxiosError}
    />
  );
};

export default ApartmentList;
