import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className='border-2 rounded-lg px-4'>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
        </div>
    );

}