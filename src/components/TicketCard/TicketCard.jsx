import React from 'react'

import classes from './TicketCard.module.scss'

const TicketCard = ({ origin, destination, date, duration, stops }) => {
  const formatTime = (dateString) => {
    const dateObj = new Date(dateString)
    return dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const durationHours = Math.floor(duration / 60)
  const durationMinutes = duration % 60

  return (
    <div className={classes.card}>
      <div className={classes.card__time}>
        <p className={classes.city}>
          {origin} - {destination}
        </p>
        <p className={classes.time}>
          {formatTime(date)} - {formatTime(new Date(new Date(date).getTime() + duration * 60000))}
        </p>
      </div>
      <div className={classes.card__road}>
        <p className={classes.road}>В пути</p>
        <p className={classes.way}>
          {durationHours}ч {durationMinutes}м
        </p>
      </div>
      <div className={classes.card__stop}>
        <p className={classes.trans}>{stops.length} пересадки</p>
        <p className={classes.town}>{stops.join(', ')}</p>
      </div>
    </div>
  )
}
export default TicketCard
