import React, { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'

import Ticket from '../Ticket/Ticket'
import { filterTickets } from '../../utils/flTickets'
import { sortTickets } from '../../utils/flSort'
import Spinner from '../../spinner/spinner'

import classes from './TicketList.module.scss'

const TicketList = () => {
  const tickets = useSelector((state) => state.reducerTicket.tickets)
  const loading = useSelector((state) => state.reducerTicket.loading)
  const loadingMore = useSelector((state) => state.reducerTicket.loadingMore)
  const filters = useSelector((state) => state.reducerFilter)
  const selectedTab = useSelector((state) => state.reducerTabs.selectedTab)

  const [visibleCount, setVisibleCount] = useState(5)
  const filteredTickets = useMemo(() => filterTickets(tickets, filters), [tickets, filters])
  const sortedTickets = useMemo(() => sortTickets(filteredTickets, selectedTab), [filteredTickets, selectedTab])

  const loadMoreTickets = () => {
    setVisibleCount((prev) => prev + 5)
  }

  if (loading && tickets.length === 0) {
    return <Spinner />
  }

  if (sortedTickets.length === 0) {
    return <div className={classes.notFound}>Билеты не найдены!</div>
  }

  return (
    <div className={classes.ticketList}>
      {sortedTickets.slice(0, visibleCount).map((ticket) => (
        <Ticket key={`${ticket.price}-${ticket.carrier}`} {...ticket} />
      ))}
      {loadingMore && tickets.length > 0 && <Spinner />}
      {visibleCount < sortedTickets.length && !loadingMore && (
        <button type="button" className={classes.ticketList__btn} onClick={loadMoreTickets}>
          Показать еще 5 билетов!
        </button>
      )}
    </div>
  )
}

export default TicketList
