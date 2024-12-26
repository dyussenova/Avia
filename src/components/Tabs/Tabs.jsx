import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectCheap, selectFast, selectOptimal } from '../../actions/actions'

import classes from './Tabs.module.scss'

const Tabs = () => {
  const dispatch = useDispatch()
  const selectedTab = useSelector((state) => state.reducerTabs.selectedTab)
  return (
    <div className={classes.tabs}>
      <button
        type="button"
        className={`${classes.tabs__btn} ${selectedTab === 'CHEAP' ? classes.active : ''}`}
        onClick={() => dispatch(selectCheap())}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={`${classes.tabs__btn} ${selectedTab === 'FAST' ? classes.active : ''}`}
        onClick={() => dispatch(selectFast())}
      >
        Самый быстрый
      </button>
      <button
        type="button"
        className={`${classes.tabs__btn} ${selectedTab === 'OPTIMAL' ? classes.active : ''}`}
        onClick={() => dispatch(selectOptimal())}
      >
        Оптимальный
      </button>
    </div>
  )
}

export default Tabs
