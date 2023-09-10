import { useEffect, useState } from "react"

export default function Users(){
    const
    [users, setUsers] = useState([]),
    [error, setError] = useState(null);

    useEffect(() => {
        async function f(){
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
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
        return <>
              <tbody>
                {users.map(user=> 
                <tr key={user.id}>
                    <td>{user.name}</td><td>{user.email}</td><td>{user.address.city}</td><td>{user.phone}</td><td>{user.website}</td><td>{user.company.name}</td>
                </tr>)}
              </tbody>  
            </>

    return <>loading...</>;
}