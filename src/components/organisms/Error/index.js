import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

export const Modal = ({ errors }) => {
  const [visible, setVisible] = useState(false) 
  
  const [message, setMessage] = useState()
  
  useEffect(() => {
    let formatter= new Intl.ListFormat('es', { type: 'conjunction' });
    if (errors.length > 0) {
      setMessage(formatter.format(errors))
      setVisible(true)
      
      setTimeout(() => {
        setMessage('')
        setVisible(false)
      }, 4000);
      return () => (clearTimeout())
    }
  }, [errors])
  return (
    visible && <p className="bg-red-300 absolute z-100 w-1/5 right-0 top-12 p-5 text-white">{message}</p> 
  )
}

export default function ModalPortal({ children, errors}) {
  return ReactDOM.createPortal(<Modal  errors={errors}>{children}</Modal>, document.getElementById('toast'))
}