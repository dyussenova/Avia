import React from 'react'

import TicketCard from '../TicketCard'

import classes from './Ticket.module.scss'

const Ticket = ({ price, carrier, segments }) => {
  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__header}>
        <span className={classes.ticket__price}>{price} P</span>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt=" "></img>
      </div>
      <div className={classes.ticket__card}>
        {segments.map((segment) => (
          <TicketCard
            key={`${segment.origin}-${segment.destination}-${segment.date}`}
            origin={segment.origin}
            destination={segment.destination}
            date={segment.date}
            duration={segment.duration}
            stops={segment.stops}
          />
        ))}
      </div>
    </div>
  )
}
export default Ticket
