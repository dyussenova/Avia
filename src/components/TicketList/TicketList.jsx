import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Ticket from '../Ticket/Ticket'
import { filterTickets } from '../../utils/flTickets'
import { sortTickets } from '../../utils/flSort'
import Spinner from '../../spinner/spinner'

import classes from './TicketList.module.scss'

const TicketList = () => {
  const tickets = useSelector((state) => state.reducerTicket.tickets)
  const loading = useSelector((state) => state.reducerTicket.loading)
  const filters = useSelector((state) => state.reducerFilter)
  const selectedTab = useSelector((state) => state.reducerTabs.selectedTab)

  const [visibleCount, setVisibleCount] = useState(5)
  const filteredTickets = filterTickets(tickets, filters)
  const sortedTickets = sortTickets(filteredTickets, selectedTab)

  if (loading) {
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

      {visibleCount < sortedTickets.length && (
        <button type="button" className={classes.ticketList__btn} onClick={() => setVisibleCount(visibleCount + 5)}>
          Показать еще 5 билетов!
        </button>
      )}
    </div>
  )
}

export default TicketList
