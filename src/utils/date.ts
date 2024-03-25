export const formatDate = (date: Date) => {
  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  } as Intl.DateTimeFormatOptions
  return new Intl.DateTimeFormat('en-US', dateOptions).format(date).replace(/,/g, '')
}
