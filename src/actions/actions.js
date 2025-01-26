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
import { BASE_URL } from '../constants/constants'

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
  fetch(`${BASE_URL}/search`)
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

export const ticketsLoad = (searchId) => (dispatch, getState) => {
  const { loadingMore } = getState().reducerTicket

  if (loadingMore) return

  dispatch(loaderON())
  dispatch({ type: LOADER_ON, loadingMore: true })

  const loadTickets = () => {
    fetch(`${BASE_URL}/tickets?searchId=${searchId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка сервера с кодом: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        if (data && Array.isArray(data.tickets) && data.tickets.length > 0) {
          dispatch({
            type: TICKETS_LOAD,
            tickets: data.tickets,
          })
          if (data.tickets.length === 0 || data.tickets.length < 5) {
            dispatch(loaderOFF())
          }
        } else {
          dispatch(loaderOFF())
        }
      })
      .catch((err) => {
        if (err.message.includes('500')) {
          loadTickets()
        } else {
          dispatch(errorOn(`Ошибка: ${err.message}`))
          dispatch(loaderOFF())
        }
      })
  }
  loadTickets()
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
