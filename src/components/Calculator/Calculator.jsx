import React, { memo, useCallback, useReducer, useRef } from 'react'
import './calculator.css'
import { calculate } from '../../utils/calculate'
// Defino el valor inicial del estado
const INIT_CALC_STATE = {
  number1: 0,
  operation: '',
  result: 0,
  historicResult: []
}

// Funcion reductora del estado con todos los componentes
const calculatorReducer = (state, action) => {
  // console.log(state)
  // console.log(action)
  switch (action.type) {
    case 'SET_OPERATION':
      return {
        ...state,
        number1: parseInt(action.payload.inputValue),
        operation: action.payload.operation
      }
      break
    case 'CALCULATE':
      return {
        result: action.payload,
        number1: 0,
        operation: '',
        historicResult: [...state.historicResult, action.payload]
      }
      break
    default:
      return state
  }
}

// Memoizo el Elemento para no lanzarlo por gusto
export const Calculator = memo(() => {
  const [state, dispatch] = useReducer(calculatorReducer, INIT_CALC_STATE)
  // Referencia al input del numero
  const input = useRef()

  // Desgloso el state
  const { result, operation, number1, historicResult } = state

  const setOperation = useCallback((operation) => {
    dispatch(
      {
        type: 'SET_OPERATION',
        payload: { inputValue: input.current.value, operation: operation }
      },
      [operation]
    ),
      (input.current.value = '')
  })

  return (
    <div className='calculator'>
      <input type='number' ref={input}></input>
      <div>
        <button onClick={() => setOperation('+')}>+</button>
        <button onClick={() => setOperation('-')}>-</button>
        <button onClick={() => setOperation('x')}>x</button>
        <button onClick={() => setOperation('/')}>/</button>
        <button onClick={() => setOperation('%')}>%</button>
        <button onClick={() => calculate(dispatch, operation, number1, input)}>
          =
        </button>
      </div>
      <h2>Resultado</h2>
      <p id='result'>{result}</p>
      <h3 id='OrderedResults'>Restultados Ordenados Mayor a menor : </h3>
      {historicResult
        .toSorted((a, b) => a - b)
        .map((res, index) => (
          <p key={index}>{res}</p>
        ))}
    </div>
  )
})
