import { GET_MAIN_JOBS } from "../actions"

const initialState = {
    job : [], 
  }

const isFavReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_MAIN_JOBS: {
            return {
                ...state,
                job: action.payload
            }
        }

        default:
            return state
    }

}

export default isFavReducer