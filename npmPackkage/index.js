import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_VszKi9Qd6cyVatsmg6CdO1fvWJNnP07epv5nmNKU');

export async function convertCurrency(fromCurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data[toCurrency];
    return multiplier*units;
}


//for testing
//npm i npmpackkage
// import {convertCurrency} from "npmpackkage"

// convertCurrency("INR","USD",10).then(data=>console.log(data))