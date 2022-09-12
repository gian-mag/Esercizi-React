export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'
export const GET_MAIN_JOBS = "GET_MAIN_JOBS"

export const addToFavouriteAction = (data) => ({
    type: ADD_TO_FAVOURITE,
    payload: data,
})

export const removeFromFavouriteAction = (data) => ({
    type: REMOVE_FROM_FAVOURITE,
    payload: data,
})

export const mainFetch = (baseEndpoint, query) => {

    return async (dispatch) => {

        try {
            const response = await fetch(baseEndpoint + query + '&limit=20')
            if (response.ok) {
                const { data } = await response.json()
                /* setJobs(data) */
                dispatch({
                    type: GET_MAIN_JOBS,
                    payload: data
                })
            } else {
                alert('Error fetching results')
            }
        } catch (error) {
            console.log(error)
        }

    }

}