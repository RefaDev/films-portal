import { Dispatch } from 'redux'

import getFilms from 'services/getFilms'
import { IStore } from './types'

export const setFilmsCategries = (list: IStore['list']) => {
   return {
      type: 'categriesFilms/setCategriesFilms',
      payload: list,
   }
}

export const loadFilmsCategries = (value: string) => async (dispatch: Dispatch) => {
   try {
      const respose = await getFilms(value)

      dispatch(setFilmsCategries(respose.data))
   } catch (e) {
      console.log('ошибка', e)
   }
}
