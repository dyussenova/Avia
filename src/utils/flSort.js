export const sortTickets = (tickets, selectedTab) => {
  switch (selectedTab) {
    case 'CHEAP':
      return tickets.sort((a, b) => a.price - b.price)
    case 'FAST':
      return tickets.sort((a, b) => {
        const durationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
        const durationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0)
        return durationA - durationB
      })
    case 'OPTIMAL':
      return tickets.sort((a, b) => {
        const durationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
        const durationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0)
        return a.price / durationA - b.price / durationB
      })
    default:
      return tickets
  }
}
