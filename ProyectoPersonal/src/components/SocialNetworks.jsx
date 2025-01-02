import { Link } from 'react-router-dom'

export const SocialNetworks = () => {
  return (
    <>
    <h2 className="indexPageSocial">Redes Sociales y comunicación</h2>
    <div className='socialNetworks'>
        <Link className='socialNetworksWhatsapp' to={"https://www.whatsapp.com"}>
            <p className='aSocialNetwork' >Whatsapp</p>
        </Link>
        <Link className='socialNetworksInstagram' to={"https://www.instagram.com"}>
            <p className='aSocialNetwork' >Instagram</p>
        </Link>
        <Link className='socialNetworksTiktok' to={"https://www.tiktok.com"}>
                <p className='aSocialNetwork'>TikTok</p>
        </Link>
        {/* <div className='socialNetworksFacebook'>
            <Link className='aSocialNetwork' to={"https://www.facebook.com"}>Facebook</Link>
        </div> */}
        {/* <div className='socialNetworksX'>
            <Link className='aSocialNetwork' to={"https://www.x.com"}>Twitter</Link>
        </div> */}
    </div>
    </>
  )
}
