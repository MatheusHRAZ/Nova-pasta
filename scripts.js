const convertButton = document.querySelector (".convert-button")
const currencySelect = document.querySelector (".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector (".input-currency").value
    const currencyValueToConvert = document.querySelector (".currency-value-to-convert") //valor em Real
    const currencyValueToConverted = document.querySelector (".currency-value") // Outras Moedas


    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.18
    const Bitcoin = 97.320

    if (currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat ("en-US", {
            style: "currency",
            currency: "USD"
        }).format (inputCurrencyValue / dolarToday) 
    }
    

    if (currencySelect.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat ("de-ED", {
            style: "currency",
            currency: "EUR"
        }).format (inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat ("ru-UK",{
            style: "currency",
            currency: "GBR"
        }).format (inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "Bitcoin") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat ("XBT",{
            style: "currency",
            currency: "BTC"
        }).format (inputCurrencyValue / Bitcoin)
    }


    if (currencySelect.value == "")
    currencyValueToConvert.innerHTML = new Intl.NumberFormat ("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format (inputCurrencyValue)      //o valor em real aparecerá aqui 
}


function changeCurrency() {
   const currencyName = document.getElementById ("currency-name")
    const currencyImage = document.querySelector (".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "dólar"
        currencyImage.src = "./assetes/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assetes/euro.png"
    }

    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "libra"
        currencyImage.src = "./assetes/libra 1.png"
    }


    if (currencySelect.value == "Bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assetes/bitcoin 1.png"
    }
    convertValues()

    }




  


currencySelect.addEventListener ("change", changeCurrency)
convertButton.addEventListener("click", convertValues)