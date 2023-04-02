import { Dispatch } from 'redux'

import getFilms from 'services/getFilms'
import { IStore } from './types'

export const setFilmsItem = (list: IStore['list']) => {
   return {
      type: 'itemFilms/setItemFilms',
      payload: list,
   }
}

export const loadFilmsItem = (value: string | undefined) => async (dispatch: Dispatch) => {
   try {
      const respose = await getFilms(value)

      dispatch(setFilmsItem(respose.data))
   } catch (e) {
      console.log('ошибка', e)
   }
}
