import React, {useState} from 'react'
import TextField from "@mui/material/TextField";


function Input() {
    const [value, setValue] = useState("")
  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" value={value} onChange={(e)=> setValue(e.target.value)} className='w-10'/>
      
    </div>
  )
}

export default Input
