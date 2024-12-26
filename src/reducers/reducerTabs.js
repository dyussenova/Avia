import { CHEAP, FAST, OPTIMAL } from '../types/types'

const initialState = {
  selectedTab: CHEAP,
}

const reducerTabs = (state = initialState, action) => {
  switch (action.type) {
    case CHEAP:
      return {
        ...state,
        selectedTab: CHEAP,
      }
    case FAST:
      return {
        ...state,
        selectedTab: FAST,
      }
    case OPTIMAL:
      return {
        ...state,
        selectedTab: OPTIMAL,
      }
    default:
      return state
  }
}
export default reducerTabs
