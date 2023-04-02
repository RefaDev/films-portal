import { AnyAction } from 'redux'

import { IStore } from './types'

const initialState = {
   list: [],
}

const filmsCategoriesReducer = (state: IStore = initialState, action: AnyAction) => {
   switch (action.type) {
      case 'categriesFilms/setCategriesFilms':
         return { ...state, list: [...action.payload] }
      default:
         return state
   }
}

export default filmsCategoriesReducer
