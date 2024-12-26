import { ALL_TRANS, NO_TRANS, ONE_TRANS, TWO_TRANS, THREE_TRANS } from '../types/types'

const initialState = [ALL_TRANS, NO_TRANS, ONE_TRANS, TWO_TRANS, THREE_TRANS]

const reducerFilter = (state = initialState, action) => {
  switch (action.type) {
    case ALL_TRANS: {
      if (!state.includes(ALL_TRANS)) {
        return [ALL_TRANS, NO_TRANS, ONE_TRANS, TWO_TRANS, THREE_TRANS]
      }

      return []
    }
    case NO_TRANS:
    case ONE_TRANS:
    case TWO_TRANS:
    case THREE_TRANS: {
      const filter = action.type

      if (state.includes(ALL_TRANS)) {
        return state.filter((f) => f !== ALL_TRANS && f !== filter)
      }

      const newState = state.includes(filter) ? state.filter((f) => f !== filter) : [...state, filter]

      if ([NO_TRANS, ONE_TRANS, TWO_TRANS, THREE_TRANS].every((f) => newState.includes(f))) {
        return [ALL_TRANS, ...newState]
      }

      return newState
    }
    default:
      return state
  }
}

export default reducerFilter
