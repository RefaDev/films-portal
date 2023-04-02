import { Dispatch } from 'redux'

import getFilmsMain from 'services/getFilmsMain'
import { IStore } from './types'

export const setFilmsSearch = (list: IStore['list']) => {
  return {
    type: 'searchFilms/setSearchFilms',
    payload: list,
  }
}

export const loadFilmsSearch =
  (value: string) => async (dispatch: Dispatch) => {
    try {
      const respose = await getFilmsMain(value)

      dispatch(setFilmsSearch(respose.data))
    } catch (e) {
      console.log('ошибка', e)
    }
  }
