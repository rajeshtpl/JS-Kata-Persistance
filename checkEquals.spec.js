import {assert , expect} from 'chai'
import {checkEquals} from './checkEquals'


describe('checkEquals',()=>{
    it('should return a boolean',()=>{
        const result = checkEquals('abc')
        expect(result).to.be.a('boolean')
    })

    it('should return false',()=>{
        const result = checkEquals('abc')
        const expectedResult = false
        expect(result).to.eql(expectedResult)
    })
    it('should return true',()=>{
        const result = checkEquals('desmoines')
        const expectedResult = true
        expect(result).to.eql(expectedResult)
    })
})