import React, { useState } from 'react'
// const axios = require("axios");

const StockList = () => {
    const [stocks, setstocks] = useState({})

    const options = {
        method: 'GET',
        // headers: {
        //     'X-RapidAPI-Host': 'nse-data1.p.rapidapi.com',
        //     'X-RapidAPI-Key': 'fd33859c6emshc60f8e93f0b0f55p12d062jsn86c59197148d'
        // }
    };
    fetch(`https://ticker.finology.in/GetShares.ashx?v=4.0&fincode=100875`, options)
        .then(response => response.json())
        .then(response => setstocks(response))
        .catch(err => console.error(err));

    return (
        <>
            {stocks.map(st => (
                <>
                    <p>{st.symbol}</p>
                    <p>{st.comapnyName}</p>
                    <p>{st.prevClose}</p>
                </>
            ))}
        </>
    )
}

export default StockList