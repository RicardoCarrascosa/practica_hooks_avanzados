export const calculate = (dispatch, operation, number1, input) => {
  switch (operation) {
    case '+':
      dispatch({
        type: 'CALCULATE',
        payload: number1 + parseInt(input.current.value)
      })
      break
    case '-':
      dispatch({
        type: 'CALCULATE',
        payload: number1 - parseInt(input.current.value)
      })
      break
    case 'x':
      dispatch({
        type: 'CALCULATE',
        payload: number1 * parseInt(input.current.value)
      })
      break
    case '/':
      dispatch({
        type: 'CALCULATE',
        payload: number1 / parseInt(input.current.value)
      })
      break
    case '%':
      dispatch({
        type: 'CALCULATE',
        payload: number1 % parseInt(input.current.value)
      })
      break
    default:
      break
  }
  input.current.value = ''
}
