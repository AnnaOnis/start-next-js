import React, {useState} from 'react'
import Calendar from "./Calendar";

export default function DateForm(){

    const 
        [month, setMonth] = useState(1),
        [year, setYear] = useState(2020);

    return<fieldset>
        <label>Месяц:
            <input value={month} onChange={e=>setMonth(e.target.value)} type="number" max={12} min={1}/>
        </label>
        <label>Год:
            <input value={year} onChange={e=>setYear(e.target.value)} type="number"/>
        </label>
        <Calendar month={month} year={year}/>
        {/*<button onClick={()=><Calendar month={month} year={year}/>}>Показать календарь</button>*/}
    </fieldset>
}