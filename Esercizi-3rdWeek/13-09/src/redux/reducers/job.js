import { GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADER } from '../actions'

const initialState = {
  results: [],
  loading: false,
  error: false
}


const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        results: action.payload,
      }

    case GET_JOBS_LOADER:
      return {
        ...state,
        loading: !state.loading,
      }
    case GET_JOBS_ERROR:
      return {
        ...state,
        loading: !state.error,
      }

    default:
      return state
  }
}

export default jobReducer
