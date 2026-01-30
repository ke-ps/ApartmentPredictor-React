const ApartmentListView = ({
  apartments,
  isLoading,
  isAxiosError,
  reload,
  setReload,
}) => {
  const handlereload = () => {
    setReload((prev) => prev + 1);
    console.log("Reloading apartments...", reload + 1);
  };

  if (isLoading) {
    return (
      <>
        <h1>Apartments</h1>
        <p>This is an exercise to test react render</p>
        <p>Loading...</p>
      </>
    );
  }

  if (isAxiosError) {
    return (
      <>
        <h1>Apartments</h1>
        <p>This is an exercise to test react render</p>
        <p>Error loading apartments. Please try again later.</p>
      </>
    );
  }

  return (
    <>
      <h1>Apartments</h1>
      <p>This is an exercise to test react render</p>
      <button onClick={handlereload}>Reload </button>
      <p></p>
      <ul className="apartment-list">
        {apartments.map((apartment) => (
          <li key={apartment.id} className="apartment-item">
            <div className="apartment-header">
              ID: {apartment.id} | ${apartment.price}
            </div>

            <div className="apartment-grid">
              <div>
                <strong>Area:</strong> {apartment.area} sq ft
              </div>
              <div>
                <strong>Bedrooms:</strong> {apartment.bedrooms}
              </div>
              <div>
                <strong>Bathrooms:</strong> {apartment.bathrooms}
              </div>
              <div>
                <strong>Stories:</strong> {apartment.stories}
              </div>
            </div>

            <div className="apartment-features">
              <span>Main Road: {apartment.mainroad}</span>
              <span>Parking: {apartment.parking}</span>
              <span>Guestroom: {apartment.guestroom}</span>
              <span>Basement: {apartment.basement}</span>
            </div>

            <div className="apartment-meta">
              Hot Water: {apartment.hotwaterheating} | AC:{" "}
              {apartment.airconditioning} | Pref Area: {apartment.prefarea} |
              Furnishing: {apartment.furnishingstatus}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ApartmentListView;
