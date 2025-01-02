import { Link } from "react-router-dom";

export function ElementsUnique({element, item}) {
  return(
    <div className="elementsUnique">
      <p className='elementsUniqueDropName'>{item.nombre}</p>
      <img src={element.imagen} alt={`Imagen de ${element.nombre}`} />
      <p className='elementsUniquePrice'>Precio: ${element.precio} COL</p>
      <p className='elementsUniqueSize'>Tallas: {element.tallas}</p>
      {element.cantidad > 0 ? 
        <h3 className='elementsUniqueName'>Ver producto</h3>
      : 
        <h3 className='elementsUniqueSold'>SOLDOUT</h3>
      }
    </div>
  )
}