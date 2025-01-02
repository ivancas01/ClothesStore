import { ElementsUnique } from './LastElements'
import { Link } from 'react-router-dom';
const Drops = ({ item }) => {
    return (
    <div className='drops'>
        <h2 className='dropsTitle'>{item.nombre}</h2>
        <p className='dropsDescription'>{item.descripcion}</p>
        <Link className='dropsImg' to={item.imagen}>
            <img src={item.imagen} alt={`Imagen de ${item.nombre}`} />
        </Link>
        <hr className='dropsHr'/>   
        <div className='elements'>
            {item.elementos && item.elementos.map((element) => (
                <Link to={`/product/${element.id_elemento}`} key={element.id_elemento}>
                    <ElementsUnique 
                        item={item}
                        element={element}
                    />
                </Link>
            ))}
        </div>
        <hr className='dropsHrTwo'/>  
    </div>
  )
}

export default Drops;