
import UsersFromDB from "../components/jsph/UsersFromDB";

export default function UsersFromDBPage(){
    return <>
        <table>
            <thead>
                <tr>
                    <th>Имя</th><th>Email</th><th>Адрес</th><th>Телефон</th><th>Website</th><th>Компания</th><th>Действия</th>
                </tr>
            </thead>            
            <UsersFromDB/>
        </table>
    </>
}
