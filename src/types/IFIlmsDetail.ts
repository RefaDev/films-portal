import { IImage } from './itemsTypes/IImage'
import { INetwork } from './itemsTypes/INetwork'
import { IRating } from './itemsTypes/IRating'
export interface IFilmsDetail {
   id?: number
   image?: IImage
   name?: string
   rating?: IRating
   network?: INetwork
   premiered?: string
   genres?: string[]
   summary?: string
}
