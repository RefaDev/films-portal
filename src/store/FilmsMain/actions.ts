import { Dispatch } from 'redux'

import getFilmsMain from 'services/getFilmsMain'
import { IStore } from './types'

export const setFilmsMain = (list: IStore['list']) => {
   return {
      type: 'mainFilms/setMainFilms',
      payload: list,
   }
}

export const loadFilmsMain = (value: string) => async (dispatch: Dispatch) => {
   try {
      const respose = await getFilmsMain(value)

      dispatch(setFilmsMain(respose.data))
   } catch (e) {
      console.log('ошибка', e)
   }
}
