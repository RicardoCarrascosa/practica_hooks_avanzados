export const calculate = (dispatch, operation, number1, input) => {
  input.current.focus()
  switch (operation) {
    case '+':
      dispatch({
        type: 'CALCULATE',
        payload: number1 + parseInt(input.current.value),
        text: `${number1} + ${input.current.value} =`
      })
      break
    case '-':
      dispatch({
        type: 'CALCULATE',
        payload: number1 - parseInt(input.current.value),
        text: `${number1} - ${input.current.value} =`
      })
      break
    case 'x':
      dispatch({
        type: 'CALCULATE',
        payload: number1 * parseInt(input.current.value),
        text: `${number1} x ${input.current.value} =`
      })
      break
    case '/':
      dispatch({
        type: 'CALCULATE',
        payload: number1 / parseInt(input.current.value),
        text: `${number1} / ${input.current.value} =`
      })
      break
    case '%':
      dispatch({
        type: 'CALCULATE',
        payload: number1 % parseInt(input.current.value),
        text: `${number1} % ${input.current.value} =`
      })
      break
    default:
      break
  }
  input.current.value = ''
}
