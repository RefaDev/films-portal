import { IStore } from './types'

export const selectFilmsCategories = (state: { filmsCategoriesReducer: IStore }): IStore['list'] =>
   state.filmsCategoriesReducer.list
