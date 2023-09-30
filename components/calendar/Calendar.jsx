


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
        getFirstWeekdayOfMonth = (y, m) => {
            let day = new Date(y, m, 1).getDay();
            if (day == 0) day = 7;
            return day;
        }

    let date = new Date(year, month);
    let daysInMonth = (new Date(year, month + 1, 0)).getDate();
    let FirstWeekday = getFirstWeekdayOfMonth(year, month);
    const result = [];
    for(let i = 2-FirstWeekday; i <= 42; i++)
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
        for (let i = 0; i < arr.length; i += n) {
           arr.slice(i, i + n);
        }
      }

    chunks(result, 7);
    console.log(result);
    return <>
        <table>
            <thead>
                <tr>
                    {collumns.map(col => <th key={col.key}>{col.value}</th>)}
                </tr>
            </thead>
            <tbody>
                {result.map(r=>
                    <tr>
                        <td>{r}</td>
                    </tr>)}
            </tbody>
        </table>
    </>
}