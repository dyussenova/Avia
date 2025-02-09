import { TICKETS_ID, TICKETS_LOAD, ERROR_OFF, ERROR_ON, LOADER_ON, LOADER_OFF } from '../types/types'

const initialState = {
  tickets: [],
  searchId: null,
  error: null,
  loading: false,
  loadingMore: false,
  stopLoading: false,
  stop: false,
}

const reducerTicket = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_ON:
      return {
        ...state,
        loading: true,
        loadingMore: true,
      }
    case LOADER_OFF:
      return {
        ...state,
        loading: false,
        loadingMore: false,
      }
    case TICKETS_ID:
      return {
        ...state,
        searchId: action.searchId,
      }
    case TICKETS_LOAD:
      return {
        ...state,
        tickets: [...state.tickets, ...action.tickets],
        stop: action.stop,
      }

    case ERROR_ON:
      return {
        ...state,
        error: action.text,
        loading: false,
        loadingMore: false,
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
