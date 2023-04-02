import image from '../assets/images/mainInfoBlockItem.png'

const preparePicture = (date: string | undefined) => (date ? date : image)

export default preparePicture
