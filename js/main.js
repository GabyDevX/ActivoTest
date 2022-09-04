const carousel = document.getElementById('carousel')
let currencies
let dinamicData = []

//Template that returns a html element containing the dinamic data of each currency
const currencyTemplate = (description, iso, rate) => {
  const container = document.createElement('div')
  container.className = 'carousel-item'
  container.innerHTML = `
    <img src="assets/bitcoinBG.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption">
              <h5 class="bitcoin__description" id="bitcoin__description">
                ${description}
              </h5>
              <div>
                <span>ISO Code:</span>
                <span class="bitcoin__iso" id="bitcoin__iso">${iso}</span>
              </div>
              <div>
                <span>Rate:</span>
                <span class="bitcoin__rate" id="bitcoin__rate">${rate}</span>
              </div>
            </div>`
  return container
}

// This function fetch the data from the json file, then it saves every currency object in the dinamicData (currencies) array, then loops into the array to append one html element for each currency using the currency template
const getData = () => {
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => response.json())
    .then((data) => {
      currencies = data.bpi
      for (const property in currencies) {
        currency = currencies[property]
        dinamicData.push(
          currencyTemplate(currency.description, currency.code, currency.rate),
        )
      }
      dinamicData[0].classList.add('active')
      dinamicData.forEach((currency) => carousel.appendChild(currency))
    })
    .catch(() => {
      let errorItem = currencyTemplate('No data', 'No data', 'No data')
      errorItem.classList.add('active')
      carousel.appendChild(errorItem)
    })
}

getData()
