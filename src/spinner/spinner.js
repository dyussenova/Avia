import React from 'react'
import { useSelector } from 'react-redux'
import { Flex, Spin } from 'antd'

import classes from './spiner.module.scss'

const Spinner = () => {
  const loading = useSelector((state) => state.reducerTicket.loading)

  return (
    <Flex align="center" gap="middle" className={classes.spin}>
      {loading && <Spin size="large" />}
    </Flex>
  )
}
export default Spinner
