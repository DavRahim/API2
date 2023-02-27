const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => displayCOuntries(data))
}

const displayCOuntries = countries =>{
    const countriesContainer = document.getElementById('all-countries')

    countries.forEach(country =>{
        console.log(country.continents)

        const countryDiv =document.createElement('div')
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
          <h3>Name: ${country.name.common}</h3>
          <p>Capital: ${country.capital ? country.capital[0] : 'No capital'}</p>
          <p>MOhaDesh: ${country.continents}</p>
           <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        
        `

        countriesContainer.appendChild(countryDiv)
    })

}

const loadCountryDetails = code =>{
  const url = `https://restcountries.com/v3.1/alpha/${code}`
  fetch(url)
  .then(res => res.json())
  .then(data => showCountryDetail(data[0]))
  console.log('add')

}
const showCountryDetail = country =>{
     const detailContainer = document.getElementById('country-details');
     detailContainer.innerHTML = `
          <h2>Country Details</h2>
          <h3>Name:${country.name.common} </h3>
          <p>Capital: </p>
          <img src="${country.flags.png}" alt="">
     `

}

loadCountries()