import { useEffect, useState } from "react"
import TableButtons from "../TableButtons";
import toast from 'react-hot-toast';

export default function UsersFromDB(){
    const
    API_URL = 'http://localhost:3333/users/',
    [users, setUsers] = useState([]),
    [error, setError] = useState(null);

    useEffect(() => {
        async function f(){
            try{
                const promise = fetch(API_URL);
                toast.promise(promise, {
                    loading: 'jsph fetcher',
                    success: 'ok',
                    error: (err) => `This just happened: ${err.toString()}`
                }, {position: 'top-left'});
                const response = await promise; 
                if(!response.ok) throw new Error('fetch '+ response.status);
                setUsers(await response.json());
            }catch(err)
            {
                setError(err);
            }
        }
        f();
    }, []);

    if(error)
    return <>Error={error.message}</>;

    if(users)
    {    

        return <>
                <tbody>
                    {users.map(user=> 
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>{user.company.name}</td>
                        <td><TableButtons del={()=>{setUsers(users.filter(us=>us.id != user.id))
                                                    fetch(API_URL + user.id, { method: 'DELETE' })
                                                    }}/></td>
                    </tr>)}
                </tbody>  
                </>
    }

    return <>loading...</>;
}
