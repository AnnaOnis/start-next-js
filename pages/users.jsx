// import GetUsers from "../components/jsph/GetUsers";

// export default function UsersPage(){
//     return <GetUsers/>
// }


import Users from "../components/jsph/Users";

export default function UsersPage(){
    return <>
        <table>
            <thead>
                <tr>
                    <th>Имя</th><th>Email</th><th>Адрес</th><th>Телефон</th><th>Website</th><th>Компания</th>
                </tr>
            </thead>            
            <Users/>
        </table>
    </>
}
