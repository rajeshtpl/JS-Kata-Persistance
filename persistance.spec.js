import {expect} from 'chai'
import {persistance,_split}from './persistance'

describe('persistance',()=>{
    it('should return 2 if the input is 35',()=>{
        let result = persistance(35)
        let expectedResult = 2
        expect(result).to.eql(expectedResult)
    })

    it('should retun 0 if the input is 4',()=>{
        let result = persistance(4)
        let expectedResult = 0
        expect(result).to.eql(expectedResult)
    })

    it('should return 1 if the input is 12',()=>{
        let result = persistance(12)
        let expectedResult = 1
        expect(result).to.eql(expectedResult)
    })
})

describe('_split',()=>{
    it('should return [ 3, 5 ] if the input is 35',()=>{
        let result = _split(35)
        let expectedResult = [ 3, 5 ]
        expect(result).to.eql(expectedResult)
    })
})
