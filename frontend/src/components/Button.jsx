import React from 'react';
// import Button from '@mui/material/Button'
import Button from '@mui/material/Button';



function Btn({type, text, polish = ""}) {
  return (
    <div>
      <Button variant='contained' type={type} className={`absolute p-1 mt-2 ${polish}`}>{text}</Button>
    </div>
  )
}

export default Btn
