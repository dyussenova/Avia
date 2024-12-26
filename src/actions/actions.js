import {
  ALL_TRANS,
  NO_TRANS,
  ONE_TRANS,
  TWO_TRANS,
  THREE_TRANS,
  TICKETS_ID,
  TICKETS_LOAD,
  LOADER_OFF,
  LOADER_ON,
  ERROR_OFF,
  ERROR_ON,
  CHEAP,
  FAST,
  OPTIMAL,
} from '../types/types'

export const allTrans = () => {
  return { type: ALL_TRANS }
}

export const noTrans = () => {
  return { type: NO_TRANS }
}
export const oneTrans = () => {
  return { type: ONE_TRANS }
}
export const twoTrans = () => {
  return { type: TWO_TRANS }
}
export const threeTrans = () => {
  return { type: THREE_TRANS }
}

export const ticketsId = () => (dispatch) => {
  fetch('https://aviasales-test-api.kata.academy/search')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then((data) => {
      dispatch({
        type: TICKETS_ID,
        searchId: data.searchId,
      })
      dispatch(ticketsLoad(data.searchId))
    })
    .catch((err) => {
      dispatch(errorOn(err.message))
    })
}

export const ticketsLoad = (searchId) => (dispatch) => {
  let attempts = 0
  const maxAttempts = 3

  const loadData = () => {
    if (attempts >= maxAttempts) {
      dispatch(errorOn('Превышено количество попыток загрузки данных.'))
      dispatch(loaderOFF())
      return
    }

    attempts += 1
    dispatch(loaderON())

    const delay = Math.pow(2, attempts) * 1000

    fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
      .then((response) => {
        if (!response.ok) {
          console.error(`Ошибка от сервера: ${response.status}`)
          throw new Error(`Ошибка сервера с кодом: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        if (data && data.tickets) {
          dispatch({
            type: TICKETS_LOAD,
            tickets: data.tickets,
            stop: data.stop,
          })

          if (!data.stop) {
            loadData()
          } else {
            dispatch(loaderOFF())
          }
        } else {
          console.error('Данные не получены или пустые:', data)
          dispatch(loaderOFF())
        }
      })
      .catch((err) => {
        console.error('Ошибка при загрузке данных:', err.message)

        if (err.message.includes('500')) {
          if (attempts < maxAttempts) {
            setTimeout(loadData, delay)
          } else {
            dispatch(errorOn('Превышено количество попыток загрузки данных. Пожалуйста, попробуйте позже.'))
            dispatch(loaderOFF())
          }
        } else {
          dispatch(errorOn(`Ошибка: ${err.message}`))
          dispatch(loaderOFF())
        }
      })
  }

  loadData()
}

export const loaderON = () => {
  return {
    type: LOADER_ON,
  }
}

export const loaderOFF = () => {
  return {
    type: LOADER_OFF,
  }
}

export const errorOn = (text) => (dispatch) => {
  dispatch({
    type: ERROR_ON,
    text,
  })

  setTimeout(() => {
    dispatch(errorOff())
  }, 2000)
}

export const errorOff = () => {
  return {
    type: ERROR_OFF,
  }
}
export const selectCheap = () => ({
  type: CHEAP,
})

export const selectFast = () => ({
  type: FAST,
})

export const selectOptimal = () => ({
  type: OPTIMAL,
})
