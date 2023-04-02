function cutTegs(str: string | undefined) {
   var regex = /( |<([^>]+)>)/gi,
      result = str?.replace(regex, ' ')

   return result
}

export default cutTegs
