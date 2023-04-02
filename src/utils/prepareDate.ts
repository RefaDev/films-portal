const prepareDate = (date: string | undefined) => (date ? date.slice(0, 4) : '1700')

export default prepareDate
