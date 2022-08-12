var assert = require ("assert")

const foo = {
    a: 2,

 normalFunction: function () { return this.a }, // il this ha il valore di dove viene fatta la funzione

 arrowFunction: () => this.a, // il this non ha in valore di dove viene fatta funzionare
 executor: (fn) => fn(),
    arrowFunctionInUnaFunzione: function () {
        return this.executor(() => this.a)
    },
    pro1: null

}

describe ("fooTest", function (){
    it ("deve ritornare 2", function (){
        assert.equal(foo.normalFunction(),2)
    })
    it ("deve ritornare undhefind", function (){
        assert.equal(foo.arrowFunction(),undefined)
    })
    it ("deve ritornare 2", function (){
        assert.equal(foo.arrowFunctionInUnaFunzione(),2)
    })
    it ("deve ritornare 2", function (){
        foo.pro1 = function () { return this.a }
        assert.equal(foo.pro1(),2)
    })
})