import { IStore } from './types'

export const selectFilmsItem = (state: { filmsItemReducer: IStore }): IStore['list'] =>
   state.filmsItemReducer.list
