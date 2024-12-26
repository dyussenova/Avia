import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Filter from '../Filter'
import Header from '../Header'
import TicketList from '../TicketList'
import Tabs from '../Tabs'
import { ticketsId } from '../../actions/actions'
import Error from '../../error/error'

import classes from './App.module.scss'

const App = () => {
  const dispatch = useDispatch()
  const error = useSelector((state) => state.reducerTicket.error)
  useEffect(() => {
    dispatch(ticketsId())
  }, [dispatch])
  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.conteiner}>
        <Filter />
        <div className={classes.conteiner__content}>
          <Tabs />
          {error && <Error />}
          <TicketList />
        </div>
      </div>
    </div>
  )
}
export default App
