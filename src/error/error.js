import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'antd'

const Error = () => {
  const errorMessage = useSelector((state) => state.reducerTicket.error)
  return (
    <div className="error-message">
      <Alert message="Ошибка" description={errorMessage} type="error" />
    </div>
  )
}

export default Error
