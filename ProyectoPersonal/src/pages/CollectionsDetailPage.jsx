import React, { useEffect, useState } from "react";
import { SocialNetworks } from "../components/SocialNetworks";
import { Footer } from "../components/Footer";
import { TopBar } from "../components/TopBar";
import { Collections } from "../components/Collections";

export const CollectionsDetailPage = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/colecciones/");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (response.ok) {
          const data = await response.json();
          setCollections(data);
        } else {
          setError("Error al cargar las colecciones");
        }
      } catch (err) {
        setError("Error en la solicitud: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  if (loading) {
    return (
      <div className="bodyWrapper">
        <div className="charg"></div>
      </div>
    );
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <>
      <TopBar />
      <div className="collectionsList">
        <h1 className="collectionsListH1">Colecciones</h1>
        {collections.length === 0 ? (
          <p>No hay colecciones disponibles.</p>
        ) : (
          <div className="collectionsListBox">
            {collections.map((item) => (
              <Collections key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
      <SocialNetworks />
      <Footer />
    </>
  );
};
