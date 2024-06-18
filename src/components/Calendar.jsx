import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {changeDate} from "../hooks/useTasks";


export const Calendar = ({task}) => {

    const handleChangeDate = (newDate) => {

        return changeDate(task.id, newDate)

    }

    return (
        <div>
            <DatePicker className='border-2 rounded-lg w-32 ' selected={task.date.toDate()}
                        onChange={handleChangeDate}/>
        </div>
    );

}