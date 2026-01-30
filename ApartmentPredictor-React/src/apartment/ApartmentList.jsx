// src/apartment/ApartmentList.jsx
import { useApartments } from "../data/useApartments";
import ApartmentListView from "../view/ApartmentListView";

const ApartmentList = () => {
  const { apartments, isLoading, isAxiosError, reload, setReload } =
    useApartments();

  return (
    <ApartmentListView
      apartments={apartments}
      isLoading={isLoading}
      isAxiosError={isAxiosError}
      reload={reload}
      setReload={setReload}
    />
  );
};

export default ApartmentList;
