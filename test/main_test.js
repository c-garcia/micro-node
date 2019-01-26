const expect = require('chai').expect

describe('First test', () => {
    it('should pass', () => {
        expect(1 + 1).to.equal(2)
    })
    it('might fail until corrected', () => {
        expect(false).to.be.true
    })
})
