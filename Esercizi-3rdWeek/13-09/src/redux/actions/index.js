export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'
export const GET_JOBS = 'GET_JOBS'
export const GET_JOBS_LOADER = 'GET_JOBS_LOADER'
export const GET_JOBS_ERROR = 'GET_JOBS_ERROR'
export const SET_USERNAME = 'SET_USERNAME'

const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='

export const addToFavouriteAction = (company) => ({
  type: ADD_TO_FAVOURITE,
  payload: company,
})

export const removeFromFavouriteAction = (company) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: company,
})

export const getJobsAction = (query) => {
  return async (dispatch) => {

      dispatch({
        type: GET_JOBS_LOADER,
      })

    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        setTimeout(() => {
          dispatch({
            type: GET_JOBS,
            payload: data,
          })
        }, 1000)
        setTimeout(() => {
          dispatch({
            type: GET_JOBS_LOADER,
          })
        }, 1000)
      } else {
        alert('Error fetching results')
        dispatch({
          type: GET_JOBS_ERROR,
        })
        dispatch({
          type: GET_JOBS_LOADER,
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: GET_JOBS_ERROR,
      })
      dispatch({
        type: GET_JOBS_LOADER,
      })
    }
  }
}

export const setUsernameAction = (username) => ({
  type: SET_USERNAME,
  payload: username,
})

