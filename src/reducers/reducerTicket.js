import { TICKETS_ID, TICKETS_LOAD, ERROR_OFF, ERROR_ON, LOADER_ON, LOADER_OFF } from '../types/types'

const initialState = {
  tickets: [],
  searchId: null,
  error: null,
  loading: false,
}

const reducerTicket = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_ON:
      return {
        ...state,
        loading: true,
      }
    case LOADER_OFF:
      return {
        ...state,
        loading: false,
      }
    case TICKETS_ID:
      return {
        ...state,
        searchId: action.searchId,
      }
    case TICKETS_LOAD:
      return {
        ...state,
        tickets: state.tickets.concat(action.tickets),
        loading: false,
      }
    case ERROR_ON:
      return {
        ...state,
        error: action.text,
        loading: false,
      }
    case ERROR_OFF:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export default reducerTicket
