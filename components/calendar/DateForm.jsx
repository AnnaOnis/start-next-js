import React, { useState } from 'react'
import Calendar from "./Calendar";
import styles from './Calendar.module.css'

export default function DateForm() {

    const
        [month, setMonth] = useState('0'),
        [year, setYear] = useState(2023);

    return <fieldset className={styles.form}>
        <fieldset className={styles.input_form}>
            <label className={styles.label}>Месяц:
                <input className={styles.input} value={month} onChange={e => setMonth(e.target.value)} type="number" max={11} min={0} />
            </label>
            <label className={styles.label}>Год:
                <input className={styles.input} value={year} onChange={e => setYear(e.target.value)} type="number" />
            </label>
        </fieldset>
        <p><b>{getNameOfMonth(month)} {year}</b></p>
        <Calendar month={month} year={year} />
    </fieldset>
}

function getNameOfMonth(m){
    switch (m){
        case '0' : return 'Январь';
        case '1' : return 'Февраль';
        case '2' : return 'Март';
        case '3' : return 'Апрель';
        case '4' : return 'Май';
        case '5' : return 'Июнь';
        case '6' : return 'Июль';
        case '7' : return 'Август';
        case '8' : return 'Сентябрь';
        case '9' : return 'Октябрь';
        case '10' : return 'Ноябрь';
        case '11' : return 'Декабрь';
        default : return 'Такого месяца не существует!'
    }
        
    
        


    
}