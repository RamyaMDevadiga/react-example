import * as React from 'react';
import {useState} from 'react';

export default function Example(){
  const data="<h1 style='color:blue;'>SomeUseful info<h1>"
  return(
    <div>
      <h1 dangerouslySetInnerHTML={{__html:data}}/>
     </div>
  )
}