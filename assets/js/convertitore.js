/*
Lezione 27/28

Scrivere un convertitore di unità di misura (g/Kg) utilizzando alcuni dei concetti
visti nelle basi di JS
 */

function convertitore(value, unita, unitaDaCambiare) {
    const validValue = ["g", "Kg"];
    if (!validValue.includes(unita) || !validValue.includes(unitaDaCambiare)){
        throw new Error("accetta solo g o Kg");
    }



    if (typeof value !== "number" ) {
        throw new Error("non va bene");
    }

    let x = 0;
    if (unita === validValue[0] && unitaDaCambiare === validValue[1]) {
        x = value / 1000;
    } else if (unita === validValue[1] && unitaDaCambiare === validValue[0]){
        x = value * 1000;
    } /* else {
        throw new Error("accetta solo g o Kg");
    }*/
    return x;
}
/*
var v1 = convertitore(1000, "g", "Kg");
console.log(v1);
 */
/*
function convertitorex(valueOb, unitaDaCambiare1) {
    const v = valueOb.value;
    const u = unitaDaCambiare1.unita;

    return {
        value: 22,
        unita: unitaDaCambiare1,
    }
}


 */

var assert = require ("assert") //serve per importare un pacchetto per far funzionare il test
                                // "mocha" in particolare equal (con require)

describe ("convertitoreTest", function (){
    it ("converto 1000g in 1 Kg", function () {
     const result = convertitore(1000, "g", "Kg"); // servono a passare dei valori a cui la finzione lavora
     assert.equal(result, 1); //uso metodo assert
    })
    it ("converto 100g in 0,1 Kg", function () {
        const result = convertitore(100, "g", "Kg"); // servono a passare dei valori a cui la finzione lavora
        assert.equal(result, 0.1); //uso metodo assert
    })
    it ("converto 1g in 0,001 Kg", function () {
        const result = convertitore(1, "g", "Kg"); // servono a passare dei valori a cui la finzione lavora
        assert.equal(result, 0.001); //uso metodo assert
    })
    it ("converto 0g in 0 Kg", function () {
        const result = convertitore(0, "g", "Kg"); // servono a passare dei valori a cui la finzione lavora
        assert.equal(result, 0); //uso metodo assert
    })
    it ("converto un eccezione", function () {
        assert.throws(() => convertitore("is not a number", "g", "Kg"), Error, "non va bene"); //uso metodo assert
    })
    it ("converto 1Kg in 1000g", function () {
        assert.equal(convertitore(1, "Kg", "g"), 1000); //uso metodo assert
    })
    it ("converto somefing in blablabla ", function () {
        assert.throws(() => convertitore(1, "somefing", "blablabla"), Error, "accetta solo g o Kg"); //uso metodo assert
    })
})

