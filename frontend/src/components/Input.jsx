import React, { useState } from 'react'
import TextField from "@mui/material/TextField";


function Input({id, label, type, value, onChange}) {
  
  return (
    <div>
      <TextField
        id={id}
        label={label}
        variant="outlined"
        value={value}
       onChange= {onChange}
        type={type}
       
         InputProps={{
          className: "w-[35vw] m-2 p-1"
         }}
        />
      </div>

    
  )
}

export default Input
