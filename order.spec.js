import{expect} from 'chai'
import {order} from './order'

describe('order',()=>{
    it('it should return the array elements in the ascending order',()=>{
        var result = order(['tomato', 'apple', 'squash'] )
        var expected =['apple', 'squash', 'tomato']
        expect(result).to.eql(expected)
    })
})