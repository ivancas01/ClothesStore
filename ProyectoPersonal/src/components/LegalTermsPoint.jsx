import React from 'react'

export const LegalTermsPoint = ({item}) => {
  return (
    <div className='legalTerms'>
        <h2 className='legalTermsTitle'>{item.titulo}</h2>
        <p className='legalTermsDesc'>{item.descripcion}</p>
    </div>
  )
}
