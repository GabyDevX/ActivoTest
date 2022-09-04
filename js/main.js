// const carousel = document.getElementById('carousel')
// let currencies
// let property

// const currencyTemplate = (description, iso, rate) => {
//   const container = document.createElement('div')
//   container.className = 'carousel-item active w-100'
//   container.innerHTML = `
//     <p class="bitcoin__description" >${description}</p>
//               <p class="bitcoin__iso" >${iso}</p>
//               <p class="bitcoin__rate" >${rate}</p>`
//   return container
// }

// const getData = () => {
//   fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//     .then((response) => response.json())
//     .then((data) => {
//       currencies = data.bpi
//       for (const property in currencies) {
//         currency = currencies[property]
//         carousel.appendChild(
//           currencyTemplate(currency.description, currency.code, currency.rate),
//         )
//       }
//     })
// }
// carousel.innerHTML = ''
// getData()
