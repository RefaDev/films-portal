import { AnyAction } from 'redux'

import { IStore } from './types'

const initialState = {
   list: {
      id: undefined,
      image: undefined,
      name: undefined,
      rating: undefined,
      network: undefined,
      premiered: undefined,
      genres: [''],
      summary: undefined,
   },
}

const filmsItemReducer = (state: IStore = initialState, action: AnyAction) => {
   switch (action.type) {
      case 'itemFilms/setItemFilms':
         return { ...state, list: { ...action.payload } }
      default:
         return state
   }
}

export default filmsItemReducer
