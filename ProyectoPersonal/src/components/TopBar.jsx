import PrincipalLogo from "../assets/MODEFLARE2-removebg-preview.png";
import { Link, useNavigate } from 'react-router-dom';

export const TopBar = () => {
    const navigate  = useNavigate();

    const goHome = () => {
        const home = '/';
        navigate(home);
    };
    return (
        <div className="topBar">
            <div className="topBarImg">
                <img src={PrincipalLogo} alt="Logo principal" onClick={goHome}/>
                {/* <hr className="hrLogo"/> */}
            </div>
            <ul className="topBarUl">
                <li className="topBarUlLi">
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li className="topBarUlLi">
                    <Link to={"/collections"}>Colecciones</Link>
                </li>
                <li className="topBarUlLi">
                    <Link to={"/Products"}>Productos</Link>
                </li>
            </ul>
        </div>
    )
}
