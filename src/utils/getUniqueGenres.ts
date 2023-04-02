export const getUniqueGenres = (arr: any) => {
   return arr.filter((el: string, index: string) => (el !== '' ? index === arr.indexOf(el) : ''))
}
