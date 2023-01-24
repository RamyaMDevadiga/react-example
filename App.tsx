import * as React from 'react';
import{useState} from 'react';

import './style.css';

export default function App() {
  const[inputValue,setInputValue]=useState('');
  const[isError,setIsError]=useState(false)
  
  const handleInput =(e)=>{
    console.log(e.target.value)
    if(e.target.value==''){
      setIsError(false)
    }
    setIsError(false)
      setInputValue(e.target.value);
      if(e.target.value<18){
        setIsError(true)
      }
  }
 
  return (
    <div style={{display:"flex",justifyContent:'center'}}>
     <input type="number" value={inputValue} onChange={handleInput}/>
     {isError?'Error':''}
    </div>
  );
}
