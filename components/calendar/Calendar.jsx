import styles from './Calendar.module.css'


export default function Calendar({ month, year }) {

    const
        collumns = [
            { key: 1, value: 'ПН' },
            { key: 2, value: 'ВТ' },
            { key: 3, value: 'СР' },
            { key: 4, value: 'ЧТ' },
            { key: 5, value: 'ПТ' },
            { key: 6, value: 'СБ' },
            { key: 7, value: 'ВС' },
        ],
        getFirstWeekDayOfMonth = (y, m) => {
            let day = (new Date(y, m, 1)).getDay();
            if (day == 0) day = 7;
            return day;
        },
        getLastWeekDayOfMonth = (y, m, d) => {
            let day = (new Date(y, m, d)).getDay();
            if (day == 0) day = 7;
            return day;
        }

    
    let daysInMonth = (new Date(year, month + 1, 0)).getDate();
    let firstWeekDay = getFirstWeekDayOfMonth(year, month);
    let lastWeekDay = getLastWeekDayOfMonth(year, month, daysInMonth);
    let lastDayInCalendar = daysInMonth + (7 - lastWeekDay)
    console.log('daysInMonth: ' + daysInMonth);
    console.log('firstWeekDay: ' + firstWeekDay);
    console.log('lastWeekDay: ' + lastWeekDay);
    const result = [];
    for(let i = 2-firstWeekDay; i <= lastDayInCalendar; i++)
    {
        if(i<=0 || i>daysInMonth){ 
            result.push('');
        }
        else{
            result.push(String(i));
        }
    }
    console.log(result);

    function chunks(arr, n) {
        let month = [];
        let week = [];
        for (let i = 0; i < arr.length; i += n) {
            month.push(week = arr.slice(i, i + n));  
        }
        return  month;
      }

    let array = chunks(result, 7);
    console.log(array);
      
    return <>
        <table className={styles.calendar}>
            <thead>
                <tr>
                    {collumns.map(col => <th className={styles.calendar_th} key={col.key}>{col.value}</th>)}
                </tr>
            </thead>
            <tbody>
                {array.map(row => <tr key={Math.random().toString(5)}>
                                    {row.map(cel => <td className={styles.calendar_td} key={Math.random().toString(5)}>{cel}</td>)}
                                  </tr>)}
            </tbody>
        </table>
    </>
}