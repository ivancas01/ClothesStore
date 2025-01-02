
import { useEffect, useState } from 'react';
import  Drops  from '../components/Drops';
import { TopBar } from '../components/TopBar';
import { SocialNetworks } from '../components/SocialNetworks';
import { Footer } from '../components/Footer';

export const IndexPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/colecciones/');
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          setError('Error al obtener las colecciones');
        }
      } catch (error) {
        setError('Error en la solicitud: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
      <div className="indexPageText">
        {data.map((item, index) => (
          <Drops item={item} key={index} />
        ))}
      </div>
      <SocialNetworks />
      <Footer />
    </>
  );
};
