import { useState } from 'react'
import './App.css'
import { TextField,Stack,Button, unstable_composeClasses } from '@mui/material'

function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)

  const [rate, setRate] = useState(0)

  const [year, setYear] = useState(0)
  const[invalidprinciple,setinvalidprinciple]=useState(false)
  const [invalidrate,setinvalidrate]=useState(false)
  const[invalidyear,setinvalidyear]=useState(false)
  const submiting = (e)=>
  {
    e.preventDefault();
    if(principle && rate && year){
        console.log("button clicked")
        setInterest(principle*rate*year/100);
    }
    else{
      alert("Please complete the form and try again")
    }
  }
const reset = ()=>{
  setInterest(0);
  setPrinciple(0);
  setRate(0);
  setYear(0);
  setinvalidprinciple(false);
  setinvalidyear(false);
  setinvalidrate(false);
}
  const validateInput =(inputTag)=>{
    console.log(inputTag,typeof inputTag);
    const {name,value}=inputTag
    console.log(name,value);
    console.log(value.match(/^[0-9]*.?[0-9]+$/));
    console.log(value.match(/^\d*.?\d+$/));
    if (name=='principle')
    {
        console.log("match check for principle");
        setPrinciple(value);
        if(!!value.match(/^\d+(\.\d+)?$/))
        {
          setinvalidprinciple(false);
        }
        else
        {
          setinvalidprinciple(true); 
        }
      }

  if (name=='rate'){
    setRate(value);
    if(!!value.match(/^\d+(\.\d+)?$/))
      setinvalidrate(false);
    else
      setinvalidrate(true);
  }
  if(name=='year'){
    setYear(value);
    if(!!value.match(/^\d+$/))
      setinvalidyear(false);
    else
      setinvalidyear(true);
  }
}
  return (
    <>
      <div style={{width:"100%",minHeight:"100vh"}} className='d-flex justify-content-center align-items-center bg-dark'>
        <div style={{width:'40%'}}className='bg-light p-5 rounded'>
          <h3>Simple Interest</h3>
          <p>Calculate Your Simple Interest Easily!</p>
          <div className='bg-warning p-5 rounded text-center'>
          <h1>$ {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
          </div>
          <form className='mt-5'>
          {/* principal amount */}
            <div className='mb-3'>
            <TextField value={principle||""} name='principle' onChange={(e)=>validateInput(e.target)} id="outlined-principle" label="$ Principle Amount" variant="outlined" />
            </div>
            {/* Invalid principle */}
            {invalidprinciple && <div className='text-danger fw-bolder mb-3'>Invalid Principle Amount</div>}
            {/* rate */}
            <div className='mb-3'>
            <TextField name='rate' value = {rate||""} onChange={(e)=>validateInput(e.target)} id="outlined-rate" label="% Rate" variant="outlined" />
            {/* Invalid Rate */}
            {invalidrate && <div className='text-danger fw-bolder mb-3'>Invalud Rate %</div>}
            </div>
            <div className='mb-3'>
            <TextField value = {year||""} name='year' onChange={(e)=>validateInput(e.target)} id="outlined-year" label="year" variant="outlined" />
            {/* Invalid Year */}
            {invalidyear && <div className='text-danger fw-bolder mb-3'></div>}
            </div>
            <div className='mb-3'>
              <Stack direction="row" spacing={2}>
                <Button type= "submit" onClick={submiting} disabled ={invalidrate|| invalidprinciple|| invalidyear} style={{width:'50%',height:'70px'}} className="bg-dark" variant="contained">Calculate</Button>
                <Button onClick={reset} style={{width:'50%',height:'70px'}} className="border border-dark text-dark" variant="outlined">Reset</Button>
              </Stack>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
