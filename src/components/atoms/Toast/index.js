import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

export const Toast = ({ errors }) => {
  const [visible, setVisible] = useState(false) 
  
  const [message, setMessage] = useState()
  
  useEffect(() => {
    let formatter= new Intl.ListFormat('es', { type: 'conjunction' });
    if (errors.length > 0) {
      setMessage(formatter.format(errors))
      setVisible(true)
      
      const timeout =setTimeout(() => {
        setMessage('')
        setVisible(false)
      }, 3000);
      return () => (clearTimeout(timeout))
    }
  }, [errors])
  return (
    visible && <p className="bg-red-300 absolute z-100 md:w-1/5 w-1/2 text-center right-0 top-12 p-5 text-white">{message}</p> 
  )
}

export default function ToastPortal({ children, errors}) {
  return ReactDOM.createPortal(<Toast  errors={errors}>{children}</Toast>, document.getElementById('toast'))
}