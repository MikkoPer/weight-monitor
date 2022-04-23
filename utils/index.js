export const formatISO = (iso) => {
  const [date, time] = iso.split('T')
  const timeStr = time.split('.')[0]
  const dateStr = date.split('-').reverse().join('.')
  return `${dateStr} ${timeStr}`
}
