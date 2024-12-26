export const filterTickets = (tickets, filters) => {
  return tickets.filter((ticket) => {
    const isNoTrans = ticket.segments.every((segment) => segment.stops.length === 0)
    const isOneTrans = ticket.segments.every((segment) => segment.stops.length === 1)
    const isTwoTrans = ticket.segments.every((segment) => segment.stops.length === 2)
    const isThreeTrans = ticket.segments.every((segment) => segment.stops.length === 3)

    if (filters.includes('ALL_TRANS')) {
      return true
    }

    if (filters.includes('NO_TRANS') && isNoTrans) return true
    if (filters.includes('ONE_TRANS') && isOneTrans) return true
    if (filters.includes('TWO_TRANS') && isTwoTrans) return true
    if (filters.includes('THREE_TRANS') && isThreeTrans) return true

    return false
  })
}
