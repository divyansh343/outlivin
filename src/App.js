import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header-component/Header.component';
import Footer from './components/Footer-component/Footer.component';
import Homepage from './pages/Homepage/Homepage';
import Error from './components/error-page/Error';
// import StockList from './pages/stocks/stock-list';
import CountryList from './pages/countries/country-list';
import CountryDetail from './pages/country-detail/countryDetail';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='main'>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/countries" element={<CountryList />} />
              <Route exact path="/countries/:id" element={<CountryDetail />}/>
            <Route exact path="/*" element={<Error />} />
          </Routes>
        </div>
      
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

