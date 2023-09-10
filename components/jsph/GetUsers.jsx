import { useState } from "react";
import FetchUser from "./FetchUser";

export default function GetUsers(){
    const [id, setId] = useState([]);

    return <>
        {id.map(id=><FetchUser id={id} key={id}/>)}
        <button onClick={()=>setId(id.concat(id.length+1))}>add user</button>
    </>
};