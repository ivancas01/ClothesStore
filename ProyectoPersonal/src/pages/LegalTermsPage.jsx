import { useEffect, useState } from 'react'
import { TopBar } from '../components/TopBar';
import { LegalTermsPoint } from '../components/LegalTermsPoint';
import { SocialNetworks } from '../components/SocialNetworks';
import { Footer } from '../components/Footer';

export const LegalTermsPage = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/terminos/');
          await new Promise(resolve => setTimeout(resolve, 1000));
          if (response.ok) {
            const data = await response.json();
            setData(data);
          } else {
            console.error('Error al obtener los Terminos y condiciones');
          }
        } catch (error) {
          console.error('Error en la solicitud:', error.message);
        }finally {
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

  return (
    <div className='bodyLegalTerms'>
      <TopBar/>
      <h2 className='titleLegalTerms'>Terminos legales y Condiciones</h2>
      <div className="indexPageText">
        {data.map((item, index) => (
          <LegalTermsPoint
              item = {item}
              key={index}
          />
        ))}
      </div>
      <SocialNetworks/>
      <Footer/>
    </div>
  )
}
