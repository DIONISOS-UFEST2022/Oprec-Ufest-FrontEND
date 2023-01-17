import React from 'react'
// from react reducer
import { useSelector, useDispatch } from 'react-redux'
// this is our action creator
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from './counterSlice'
import { Button, Heading } from '@chakra-ui/react'
import { useState } from 'react'


const Counter = () => {
  // useSelector is a hook that allows us to access the state
  // we can pass in a function that will be called with the state
  // and we can return a value from that function
  // in this case we are returning the value of the counter property
  // from the state object
  const count = useSelector((state) => state.counter.count);
  // useDispatch is a hook that allows us to access the dispatch function
  // from the Redux store
  const dispatch = useDispatch();
  const [increment, Setincrement] = useState(0);
  const addvalue = Number(increment) || 0;
  const resetAll = () => {
    Setincrement(0);
    dispatch(reset());
  }
  return (
    <section>
      <Heading>{count}</Heading>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Button onClick={() => dispatch(decrement())}>-</Button>
      <Button onClick={resetAll}>Reset</Button>
      <input
        type="text"
        value={increment}
        onChange={(e) => Setincrement(e.target.value)} />
      <div>
        <Button onClick={() => dispatch(incrementByAmount(addvalue))}>Add Amount</Button>
      </div>
    </section>
  )
}

export default Counter