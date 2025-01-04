import React from "react";

export const Collections = ({ item }) => {
  return (
    <div key={item.id} className="collectionsListBoxItem">
      <h2 className="collectionsListBoxItemH2">{item.nombre}</h2>
      <img
        className="collectionsListBoxItemImg"
        src={item.imagen}
        alt={`Imagen de ${item.nombre}`}
      />
    </div>
  );
};
