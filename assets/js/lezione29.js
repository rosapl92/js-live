const chai = require ("chai");
    const assert = chai.assert;
    chai.config.truncateThreshold=0;

    /*
    Calcolare una data all'interno di un intervalla
     */

function IsInRange(now, minDate, maxDate) {

    if(now instanceof Date && minDate instanceof Date && maxDate instanceof Date) {
        if (now > maxDate || now < minDate) {
            return false;
        }
        return true;
    }
        throw Error("Dati invalidi");
}

describe ("Date in range", () => {
    it('Date in range',  () => {
        const now = new Date();
        const minDate = new Date(new Date().setDate(new Date().getDate() - 1));
        const maxDate = new Date(new Date().setDate(new Date().getDate() + 1));
        assert.equal(IsInRange(now, minDate, maxDate),true);
    });
    it('Date in not in range',  () => {
        const minDate = new Date();
        const now = new Date(new Date().setDate(new Date().getDate() - 1));
        const maxDate = new Date(new Date().setDate(new Date().getDate() + 1));
        assert.equal(IsInRange(now, minDate, maxDate),false);
    });
    it('Date in not in range (out range)',  () => {
        const maxDate = new Date();
        const minDate = new Date(new Date().setDate(new Date().getDate() - 1));
        const now = new Date(new Date().setDate(new Date().getDate() + 1));
        assert.equal(IsInRange(now, minDate, maxDate),false);
    });
    it('Not valid velues',  () => {
        assert.throw(() => IsInRange("", 0, 10),"Dati invalidi");
    });
})