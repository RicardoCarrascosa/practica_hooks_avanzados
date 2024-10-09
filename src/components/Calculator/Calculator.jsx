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
  switch (action.type) {
    case 'SET_OPERATION':
      return {
        ...state,
        number1: parseInt(action.payload.inputValue),
        operation: action.payload.operation
      }
      break
    case 'CALCULATE':
      const time = new Date()
      return {
        result: action.payload,
        number1: 0,
        operation: '',
        historicResult: [
          ...state.historicResult,
          {
            value: String(action.payload),
            text: action.text,
            time: time.toLocaleTimeString()
          }
        ]
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
    input.current.focus()
  })

  return (
    <div className='calculator'>
      <h2>React calculator:</h2>
      <h3>Input a number</h3>
      <input type='number' ref={input}></input>
      <div className='operators'>
        <button onClick={() => setOperation('+')}>+</button>
        <button onClick={() => setOperation('-')}>-</button>
        <button onClick={() => setOperation('x')}>x</button>
        <button onClick={() => setOperation('/')}>/</button>
        <button onClick={() => setOperation('%')}>%</button>
      </div>
      <button
        className='equalButton'
        onClick={() => calculate(dispatch, operation, number1, input)}
      >
        =
      </button>

      <p id='result'>{result}</p>
      <h3 id='OrderedResults'>Previous Calculations: : </h3>
      <div id='oldResults'>
        {historicResult
          .slice(0)
          .reverse()
          .map((result, key) => {
            return (
              <div className='resultLine' key={key}>
                <p className='resultTime'>{result.time}</p>
                <p className='resultText'>{result.text}</p>
                <p className='resultVal'>{result.value}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
})
