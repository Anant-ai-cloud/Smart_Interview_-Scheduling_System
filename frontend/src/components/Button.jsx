import React from 'react';
import Button from '@mui/material/Button';



function Btn({type, text, polish = "", onClick}) {
  
  return (
    <div>
      <Button variant='contained' type={type} className={`p-1 mt-2 ${polish}`} onClick={onClick}>{text}</Button>
    </div>
  )
}

export default Btn
