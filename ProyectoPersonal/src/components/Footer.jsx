import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className='footer'>
      <p>Modeflare.</p>
      <p>Todos los derechos reservados.</p>
      <p>2023</p>
      <OtherLinks></OtherLinks>
    </div>
  )
}

export const OtherLinks = () => {
  return (
    <div className='ContactAndTerms'>
        <p><Link to={"/legalterms"}>Terminos y condiciones</Link></p>
    </div>
  )
}
