import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TopBar } from "../components/TopBar";
import { SocialNetworks } from "../components/SocialNetworks";
import { Footer } from "../components/Footer";

const ElementDetailPage = () => {
  const { productId } = useParams();
  const [element, setElement] = useState(null);
  const [collectionData, setCollectionData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  window.scrollTo(0, 0);

  useEffect(() => {
    
    const fetchElement = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/elementos/${productId}/`);
        if (response.ok) {
          const elementData = await response.json();
          setElement(elementData);

          const collectionResponse = await fetch(`http://localhost:8000/api/colecciones/${elementData.coleccion}/`);
          await new Promise(resolve => setTimeout(resolve, 1000));
          if (collectionResponse.ok) {
            const collectionData = await collectionResponse.json();
            setCollectionData(collectionData);
          } else {
            setError('Error al obtener detalles de la colección');
          }
        } else {
          setError('Error al obtener los detalles del elemento');
        }
      } catch (error) {
        setError('Error en la solicitud: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchElement();
  }, [productId]);

  if (loading) {
    return(
      <div className="bodyWrapper">
        <div className="charg"></div>
      </div>
    )
    ;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  const generoTexto = {
    F: 'Femenino',
    M: 'Masculino',
    U: 'Unisex'
  }[element.genero] || 'Desconocido';

  return (
    <>
      <TopBar></TopBar>
      <div className="elementDetail">
        <h2 className="elementDetailTitle">{element.nombre}</h2>
        <div className="elementDetailBox">
          <div className="elementDetailBoxImage">
            <img src={element.imagen} alt={`Imagen de ${element.nombre}`} />
            <img src={element.imagen_dos} alt={`Imagen de ${element.nombre}`} />
            <img src={element.imagen_tres} alt={`Imagen de ${element.nombre}`} />
          </div>
          <div className="elementDetailBoxInfo">
            <div className="elementDetailBoxInfoData">
              <img src={collectionData.imagen} alt="" />
              <p className="name">{collectionData.nombre}</p>
              <p className="gender">Género: {generoTexto}</p>
              <p className="price">Precio: ${element.precio} COL</p>
              <p className="size">Tallas disponibles: {element.tallas}</p>
              <hr className='Hr' />
              {element.cantidad > 0 ? 
                <div className="elementDetailBoxInfoDataButtons">
                  <Link className="buyByWhatsapp" to={"https://www.whatsapp.com"}>Compra rapida por whatsapp</Link>
                </div>
              : 
                <div className="elementDetailBoxInfoDataSoldOut">
                  <h2>SOLDOUT</h2>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
			<SocialNetworks/>
      <Footer/>
    </>
  );
};
  
  export default ElementDetailPage;