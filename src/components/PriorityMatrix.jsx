import {useToggle} from "../hooks/useToggle";
import {Button} from './base/Button'
import {changePriority} from "../hooks/useTasks";

export const PriorityMatrix = ({task}) => {
    const {isShown: isShownPriority, handleToggle: handleTogglePriority, targetRef: matrixRef} = useToggle()

    const handlePrioritySelect = (newPriority) => {
        return changePriority(task.id, newPriority)

    }

    return (
        <div>
            <li>
                <Button onClick={handleTogglePriority}>
                    {PriorityText({priority: task.priority})}
                </Button>

            </li>
            {isShownPriority &&
                <PriorityMatrixChart onSelectPriority={handlePrioritySelect} matrixRef={matrixRef}/>
            }
        </div>
    )
}

const PriorityText = ({priority}) => {
    switch (priority) {
        case 1:
            return <p className="text-gray-400">D</p>
        case 2:
            return <p className="text-yellow-400">C</p>
        case 3:
            return <p className="text-blue-400">B</p>
        case 4:
            return <p className="text-red-400">A</p>
        default:
            return <p>優先度</p>
    }
}


const PriorityMatrixChart = ({onSelectPriority, matrixRef}) => {

    return (
        <div ref={matrixRef} className="relative grid grid-cols-2 gap-4 w-64 h-64 m-9">
            {/*縦横の線*/}
            <div className='absolute top-1/2 left-0 right-0 border-t-2 border-gray-500'></div>
            <div className='absolute top-0 bottom-0 left-1/2 border-l-2 border-gray-500'></div>
            {/*各項目*/}
            <div
                className='absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full ml-2 text-gray-500 vertical-rl p-4'>重要でない
            </div>
            <div
                className='absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full ml-2 text-gray-500 vertical-rl p-4'>重要
            </div>
            <div
                className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 text-gray-500 p-4'>緊急
            </div>
            <div
                className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-2 text-gray-500 p-4'>緊急でない
            </div>
            {/*各マトリックス*/}
            <div className="bg-yellow-400 text-black flex items-center justify-center cursor-pointer rounded-lg p-1"
                 onClick={() => onSelectPriority(2)}>
                C<br/>重要ではないが緊急
            </div>
            <div className="bg-red-400 text-white flex items-center justify-center cursor-pointer rounded-lg p-1"
                 onClick={() => onSelectPriority(4)}>
                A<br/>重要かつ緊急
            </div>
            <div className="bg-gray-400 text-black flex items-center justify-center cursor-pointer rounded-lg p-1"
                 onClick={() => onSelectPriority(1)}>
                D<br/>重要でも緊急でもない
            </div>
            <div className="bg-blue-400 text-white flex items-center justify-center cursor-pointer rounded-lg p-1"
                 onClick={() => onSelectPriority(3)}>
                B<br/>緊急ではないが重要
            </div>
        </div>

    );
};
