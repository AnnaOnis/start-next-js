import Link from "next/link";
import styles from './Header.module.css';

const pages = [
    {href:'/', name:'Home'},
    {href:'/calendar', name:'Calendar'},
    {href:'/todos', name:'My ToDoList'},
    {href:'/users', name:'Users'},
    {href:'/users_from_db', name:'UsersFromDB'},
];

export default function Header(){
    return <><header>
        <nav className={styles.nav}>
            <ul>
                {pages.map(({href, name})=>
                <li key={href}>
                    <Link href={href}>{name}</Link>
                </li>)}
                {/* <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li> */}
            </ul>
        </nav>
    </header>
    <hr/></>
}