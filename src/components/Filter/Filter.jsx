import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { allTrans, noTrans, oneTrans, twoTrans, threeTrans } from '../../actions/actions'
import { ALL_TRANS, NO_TRANS, ONE_TRANS, TWO_TRANS, THREE_TRANS } from '../../types/types'

import classes from './Filter.module.scss'

const Filter = () => {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.reducerFilter)

  const handleCheckboxChange = (actionCreator) => {
    dispatch(actionCreator())
  }
  return (
    <div className={classes.filter}>
      <div className={classes.filter__title}>Количество пересадок</div>
      <div className={classes.filter__checkbox}>
        <input
          type="checkbox"
          id="all"
          checked={filters.includes(ALL_TRANS)}
          onChange={() => handleCheckboxChange(allTrans)}
        />
        <label htmlFor="all">
          <span className={classes.filter__span}>Все</span>
        </label>
      </div>
      <div className={classes.filter__checkbox}>
        <input
          type="checkbox"
          id="no"
          checked={filters.includes(NO_TRANS)}
          onChange={() => handleCheckboxChange(noTrans)}
        />
        <label htmlFor="no">
          <span>Без пересадок</span>
        </label>
      </div>
      <div className={classes.filter__checkbox}>
        <input
          type="checkbox"
          id="check1"
          checked={filters.includes(ONE_TRANS)}
          onChange={() => handleCheckboxChange(oneTrans)}
        />
        <label htmlFor="check1">
          <span>1 пересадка</span>
        </label>
      </div>
      <div className={classes.filter__checkbox}>
        <input
          type="checkbox"
          id="check2"
          checked={filters.includes(TWO_TRANS)}
          onChange={() => handleCheckboxChange(twoTrans)}
        />
        <label htmlFor="check2">
          <span>2 пересадки</span>
        </label>
      </div>
      <div className={classes.filter__checkbox}>
        <input
          type="checkbox"
          id="check3"
          checked={filters.includes(THREE_TRANS)}
          onChange={() => handleCheckboxChange(threeTrans)}
        />
        <label htmlFor="check3">
          <span>3 пересадки</span>
        </label>
      </div>
    </div>
  )
}

export default Filter
