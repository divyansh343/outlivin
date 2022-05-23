import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { countrys } from '../../data/countries';
const CountryDetail = () => {
  const { id } = useParams();
  const cast = Number(id);
  const obj = countrys[cast];
  console.log(obj);

  return (
    <>
      {/* <div className="container mt-3"> */}
      <div className=" layout g-5 mt-3">
        <div className="container">
          <div>

            <h3 className="pb-4 mb-4">
              {obj.countryName} ,
              <span>
                <h5 className=" border-bottom capital">
                  {obj.capital}
                </h5>

              </span>
            </h3>
          </div>

          <article className="blog-post">
            <div className="img">
              <img src={obj.image} alt={obj.about} />
            </div>
          </article>
        </div>

      </div>
      <div className="container mt-3">
        <div className="">
          <h4 className="mb-3 mt-3">About {obj.countryName}</h4>
          <div className="p-4 mb-3 bg-light rounded">
            <p className="">{obj.about.map(o => (
              <>
                <div class="mb-3">
                  {o}
                  <br />
                </div>
              </>
            ))}</p>
          </div>

          <div className="p-4">
            <h4 className="fst-italic">explore more</h4>
            <ol className="list-unstyled mb-0">
              {countrys.map(c=>(
                <>
                    <li><Link to={`countries/${c.id}`}>{c.countryName}</Link></li>
                </>
              ))}
            </ol>
          </div>

          <div className="p-4">
            <h4 className="fst-italic">Elsewhere</h4>
            <ol className="list-unstyled">
              <li><a href="/">GitHub</a></li>
              <li><a href="/">Twitter</a></li>
              <li><a href="/">Facebook</a></li>
            </ol>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default CountryDetail