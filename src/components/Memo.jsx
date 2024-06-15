import React, {useMemo, useState} from 'react';
import {changeMemo} from "../hooks/useTasks";

export const MemoComponent = ({task}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleInputChange = (e) => {
        const newMemo = e.target.value;
        return changeMemo(task.id, newMemo);
    };

    const textareaRows = useMemo(() => isExpanded ? 3 : 1, [isExpanded]);

    return (
        <textarea
            value={task.memo}
            onChange={handleInputChange}
            onFocus={() => setIsExpanded(true)}
            onBlur={() => setIsExpanded(false)}
            className="border rounded break-words"
            rows={textareaRows}
        />
    );
};

