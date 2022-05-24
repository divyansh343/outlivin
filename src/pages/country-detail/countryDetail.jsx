import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { countrys } from '../../data/countries';
const CountryDetail = () => {
  const { id } = useParams();
  const cast = Number(id);
  const obj = countrys[cast - 1];
  console.log(obj);

  return (
    <>
      {/* <div className="container mt-3"> */}
      <div className=" layout g-5 mt-3">
        <div className="container">
          <div className='row'>

            <h2 className="pb-4 mb-4 country-name col-md-6">
              {obj.countryName} ,
              <span>
                <h5 className=" border-bottom capital">
                  {obj.capital}
                </h5>

              </span>
            </h2>
            <div className="pb-4 mb-4 col-md-6 ">
              {obj.languages && <p>
                official languages - {obj.languages}
              </p>}
              <p className='border-bottom'>
                {obj.officialCurrency && <>Currency - {obj.officialCurrency.currency} <span>{obj.officialCurrency.symbol}</span></>}
              </p>
            </div>
          </div>

          <article className="blog-post">
            <div className="img">
              <img src={obj.image} alt={obj.desc} />
            </div>
          </article>
        </div>

      </div>
      <div className="container mt-3">
        <div className="">

          {/* about section */}
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

          {/* forign policies */}
          <div>
            <h4 className="mb-3 mt-3">Favourable Policies for immigration in {obj.countryName}</h4>

            {obj.favPolicies.map(policy => (
              <>
                <div className="p-4 mb-3 bg-light rounded forign-policy container">
                  <p>{policy}</p>
                </div>
              </>
            ))}

          </div>
          {/* forign policies end */}

          <div className="container row">
            <div className="col-md-4">
              <h4 className="mb-3 mt-3">This jobs are waiting</h4>
              <div className="p-4 mb-3 bg-light rounded">
                <p className="">{obj.keyJobs.map(jdi => (
                  <>
                    <div class="mb-3">
                      {jdi}
                    </div>
                  </>
                ))}</p>
              </div>
            </div>
            <div className="col-md-4">
              <h4 className="mb-3 mt-3">high deamand sectors</h4>
              <div className="p-4 mb-3 bg-light rounded">
                <p className="">{obj.jobDemandIndustries.map(jdi => (
                  <>
                    <div class="mb-3">
                      {jdi}
                    </div>
                  </>
                ))}</p>
              </div>
            </div>
            <div className="col-md-4">
              <h4 className="mb-3 mt-3">Recommended for</h4>
              <div className="p-4 mb-3 bg-light rounded">
                <p className="">{obj.recommendedFor.map(jdi => (
                  <>
                    <div class="mb-3">
                      {jdi}
                    </div>
                  </>
                ))}</p>
              </div>
            </div>
          </div>

          <div className="container row">
            {/* common factors */}
            <div className="col-md-6 ">
              <h4 className="mb-3 mt-3 sub-title text-center">Essential factors</h4>
              <div className="p-4 mb-3 bg-light rounded ess-factors">
                <p className="hospitality">hospitality rate - {obj.hospitality} %</p>
                <p className="isSafe">safe - {obj.isSafe} %</p>
                <p className="avg-Speed">Average Salary - {obj.avergeIncome.income}  {obj.avergeIncome.currency}</p>
                <p className="internet">internet facility- {obj.internetAvail.avgSpeed && <>Available</>}</p>
                <p className="avg-Speed">Average Speed - {obj.internetAvail.avgSpeed}Mbps</p>
              </div>
            </div>

            {/* Weather conditions */}
            <div className="col-md-6 ">
              <h4 className="mb-3 mt-3 sub-title text-center">Weather conditions</h4>
              <div className="p-4 mb-3 bg-white rounded weather-con">
                <p className="hospitality">{obj.avgWeather}</p>
              </div>
              <h4 className="mb-3 sub-title text-center">Average temperature</h4>
              <div className="p-4 mb-3 bg-light rounded weather-con">
                <p className="internet">{obj.avgTemperature.temp} degree {obj.avgTemperature.unit}</p>
              </div>
            </div>
          </div>

          {/* cities */}
          <div className="mb-3 container">
            <h4 className="mb-3 mt-3 sub-title text-center">Top cities for employment</h4>
            <div className='p-2 mb-3 bg-light rounded ess-factors row'>
              {obj.hotCitys.map(city => (
                <div className="col-md-1 mx-3">
                  <p className="city">{city}</p>
                </div>
              ))}
            </div>
          </div>
          {/* cities end */}

          {/* visa free countries */}
          {obj.visaNotRequired && <div className="mt-3 container">
            <h4 className="mb-3 mt-3 sub-title text-center">Citizens of these countries do not require visa to enter</h4>
            <div className='p-2 mb-3 bg-light rounded ess-factors row'>
              {obj.visaNotRequired.map(city => (
                <div className="col-md-1 mx-3">
                  <p className="city">{city}</p>
                </div>
              ))}
            </div>
          </div>}
          {/*  visa free countries */}

          {/* Faq Section */}
          {obj.whyHere &&
            <div className="container">
              <h4 className="mb-3 mt-3 sub-title text-center">More about {obj.countryName}</h4>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                {obj.whyHere.map(faq => (
                  <>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id={`flush-headingOne${faq.id}`}>
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne${faq.id}`} aria-expanded="false" aria-controls={`flush-collapseOne${faq.id}`}>
                          {faq.query}
                        </button>
                      </h2>
                      <div id={`flush-collapseOne${faq.id}`} class="accordion-collapse collapse" aria-labelledby={`flush-headingOne${faq.id}`} data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">{faq.reason}</div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          }

          <div className="p-4">
            <h4 className="fst-italic">explore more</h4>
            <ol className="list-unstyled mb-0">
              {countrys.map(c => (
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