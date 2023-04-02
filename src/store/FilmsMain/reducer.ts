import { AnyAction } from 'redux'

import { IStore } from './types'

const initialState = {
   list: [],
}

const filmsMainReducer = (state: IStore = initialState, action: AnyAction) => {
   switch (action.type) {
      case 'mainFilms/setMainFilms':
         return { ...state, list: [...action.payload] }
      default:
         return state
   }
}

export default filmsMainReducer
