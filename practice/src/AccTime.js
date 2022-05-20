import React, { useEffect, useState } from "react";
import './App.css'

const AccTime = () => {
    let handle;
    const [ctime, setCtime] = useState(new Date().toLocaleTimeString());

    useEffect( ()=>{
        handle = setInterval(() => setCtime(new Date().toLocaleTimeString()) ,1000)
        return() => {
            clearInterval(handle);
        }
    })

    const stopTime = () => {
        clearInterval(handle);
    }

    return(
        <div className="time-page">
            <h1>{ctime}</h1>
            <button onClick={stopTime} > STOP </button>
        </div>
    )
}

export default AccTime;