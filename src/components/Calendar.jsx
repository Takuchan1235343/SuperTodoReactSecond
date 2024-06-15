import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {changeDate} from "../hooks/useTasks";


export const Calendar = ({task}) => {

    const handleChangeDate = (newDate) => {

        return changeDate(task.id, newDate)

    }

    return (
        <div className='border-2 rounded-lg px-4'>
            <DatePicker selected={task.date.toDate()} onChange={handleChangeDate}/>
        </div>
    );

}