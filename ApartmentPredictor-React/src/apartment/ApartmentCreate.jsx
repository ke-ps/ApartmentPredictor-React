import { useState } from "react";
import ApartmentForm from "../components/ApartmentForm";

const ApartmentCreate = ({ onSubmit, isLoading, error, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    price: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    stories: "",
    mainroad: false,
    parking: false,
    guestroom: false,
    basement: false,
    hotwaterheating: false,
    airconditioning: false,
    prefarea: false,
    furnishingstatus: "unfurnished"
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await onSubmit(formData);
    if (success !== false) {
      onSuccess();
    }
  };

  return (
    <ApartmentForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
      onCancel={onCancel}
      submitText="Create Apartment"
    />
  );
};

export default ApartmentCreate;
