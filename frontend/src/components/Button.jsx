import React from 'react';
// import Button from '@mui/material/Button'
import Button from '@mui/material/Button';



function Btn({type, text}) {
  return (
    <div>
      <Button variant='contained' type={type} className='absolute p-1 w-[10vw] mt-2 left-52'>{text}</Button>
    </div>
  )
}

export default Btn
