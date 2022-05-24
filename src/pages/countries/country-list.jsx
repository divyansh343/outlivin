import React from 'react'
import { Link } from 'react-router-dom'
import { countrys } from '../../data/countries'
import './country-list.css'
const CountryList = () => {
  return (
    <>
      <div className="container layout mt-3">
        {countrys.map(cunt => (
          <>
            <div className="card px-3 py-2">
              <Link className="text-decoration-none" to={`/countries/${cunt.id}`}>
                <img className="card-img-top" src={cunt.image} height={250} width={600} alt={cunt.desc} />
              </Link>
              <div className="card-block">
                <h4 className="card-title">{cunt.countryName}, <span><h6>{cunt.capital}</h6></span> </h4>
                <p className='mt-2'>{cunt.desc}</p>
                <Link class="btn btn-dark mx-0" to={`/countries/${cunt.id}`}>explore about {cunt.countryName}</Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default CountryList