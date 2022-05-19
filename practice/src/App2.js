import { useState, useEffect } from "react";

const App2 = () => {

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
    
            fetch('https://jsonplaceholder.typicode.com/users', {
                signal: signal
            })
            .then((response) => response.json())
            .then((data) => {
                // handle success
                console.log(data);
            });
        return () => {
            // cancel the request before component unmounts
            controller.abort();
        };
    }, []);

    return(
        <h1>This is me</h1>
    )
}

export default App2;