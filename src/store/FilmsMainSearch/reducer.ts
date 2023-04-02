import { AnyAction } from 'redux'

import { IStore } from './types'

const initialState = {
  list: [],
}

const filmsSerchReducer = (state: IStore = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'searchFilms/setSearchFilms':
      return { ...state, list: [...action.payload] }
    default:
      return state
  }
}

export default filmsSerchReducer
