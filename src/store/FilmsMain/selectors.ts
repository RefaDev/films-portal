import { IStore } from './types'

export const selectFilmsMain = (state: { filmsMainReducer: IStore }): IStore['list'] =>
   state.filmsMainReducer.list
