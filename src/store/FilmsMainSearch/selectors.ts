import { IStore } from './types'

export const selectFilmsSearch = (state: {
  filmsSerchReducer: IStore
}): IStore['list'] => state.filmsSerchReducer.list
