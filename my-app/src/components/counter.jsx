import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addAction } from '../Redux/Actions/actionsType'
import { decAction } from '../Redux/Actions/actionsType'
import { add2Action } from '../Redux/Actions/actionsType'
import { addNumber } from '../Redux/Actions/actionsType'


export default function Counter() {
    
const x = useSelector( state => state.x )
const dispatch = useDispatch()

const Add = () => {
   dispatch( addAction() )
}

const Dec = () => {
    dispatch( decAction() )
}
const addTwo = () => {
    dispatch( add2Action() )
}

const AddNumber = (number) => {
    dispatch(addNumber(200))
}

  return (
    <div>
       
<h2> counteris : {x} </h2>
<button onClick={Add}>inc</button> &nbsp;
<button onClick={Dec}>DEC</button> &nbsp;
<button onClick={addTwo}>inc2 </button> &nbsp;
<button onClick={ () => AddNumber(200)}> add num </button>
    </div>
  )
}
