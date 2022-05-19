import React from "react";
import styles from "./counter.module.css"

const Counter=()=>{
const [count,setCount]=React.useState(0)

    return (
        <>
        <h1>count:-<span className={count%2==0 ? styles.green:styles.red}>{count}</span></h1>
        <button onClick={()=>setCount(count+1)}>Increament</button>

        <button onClick={()=>
        {
            if(count>0)
            {
                setCount(count-1)
            }
        }}>Decreament</button>
        <button onClick={()=>setCount(count*2)}>Double</button>
        </>
    )
}

export default Counter;