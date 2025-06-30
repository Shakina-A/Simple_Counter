import React, { useState } from 'react';
function Counter() {

    //const count=0;this is done by
    //useState is a hook-where we use this ios when a variable changes over time
    const[count,setCount]=useState(0);
    //const [theme, setTheme] = useState("light"); // light or dark

    //function increment(){
      //  setCount(count+1);
   // }
    const[hide,setHide]=useState(false);
    return (
        <div>
            <h2>Count:{count}</h2>  
            <button className='btn' onClick={()=>setCount(count+1)}>Increment</button>
            <button className='btn' onClick={()=>setCount(count-1)}>Decrement</button>
            <button className='reset btn'onClick={()=>setCount(0)}>Reset</button>
             <br />
                <button className='btn' onClick={() => setHide(!hide)}>
                {hide ? "About" : "About"}
            </button>

            {hide && (
                <p style={{ marginTop: '15px' }}>
                   <h3> About the Simple Counter App:</h3>
This simple counter application demonstrates the core concept of state management in React using the useState hook. 
Users can interact with three main buttons: Increment to increase the count, Decrement to reduce it, and Reset to bring the count back to zero. 
The current count is displayed dynamically and updates instantly as users interact with the app. 
To enhance the user interface, a theme toggle button is placed at the top-right corner, allowing users to seamlessly switch between Light Mode and Dark Mode, improving readability and aesthetics based on preference.
 This app serves as a great starting point for beginners exploring React and interactive UI development.
                </p>
            )}           
           
        </div>
        

    
    );
}

export default Counter;
