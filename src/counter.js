import React, { useState } from 'react';
function Counter() {

    //const count=0;this is done by
    //useState is a hook-where we use this ios when a variable changes over time
    const[count,setCount]=useState(0);
    const [theme, setTheme] = useState("light"); // light or dark

    //function increment(){
      //  setCount(count+1);
   // }
    return (
        <div>
            <h2>Count:{count}</h2>  
            <button className='btn' onClick={()=>setCount(count+1)}>Increment</button>
            <button className='btn' onClick={()=>setCount(count-1)}>Decrement</button>
            <button className='reset btn'onClick={()=>setCount(0)}>Reset</button>

        </div>
    );
}

export default Counter;
