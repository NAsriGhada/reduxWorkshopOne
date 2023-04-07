import React from 'react'
import { decrement, increment } from '../redux/actions/Action'
import {useSelector, useDispatch} from 'react-redux'

const Counter = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()
  return (
      <div>
          <button onClick={() => dispatch(increment(4))}>+</button>
          <span>{count}</span>
          <button onClick={() => dispatch(decrement(4))}>-</button>
    </div>
  )
}

export default Counter