import React from "react";
import useFetchData from "../hooks/useFetchData.jsx";

const DogPage = () => {
  const {
    data,
    loading,
    error,
    refetch,
  } = useFetchData("https://dog.ceo/api/breeds/image/random");

  if (loading) return <h2>Cargando...</h2>;

  if (error) return <h2>Error: {error}</h2>;

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>Imagen aleatoria de perro</h1>

      <img
        src={data.message}
        alt="Dog"
        style={{
          width: "400px",
          maxWidth: "100%",
          borderRadius: "10px",
        }}
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={refetch}>
          Obtener otra imagen
        </button>
      </div>
    </div>
  );
};

export default DogPage;