import { useEffect } from "react";

const Wild = (props) => {


    useEffect(()=>{
        console.log('I run after every props value change');
    },[props.name, props.type])
  
    return(
        <div>
            <button onClick={props.type = 'carnivorous'}>{props.type}</button>
            <h3>{props.name}</h3>
        </div>
    )

}

export default Wild;
