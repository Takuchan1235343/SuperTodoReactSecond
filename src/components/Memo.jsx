import React, {useMemo, useState} from 'react';
import {changeMemo} from "../hooks/useTasks";

export const MemoComponent = ({task}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [text, setText] = useState(task.memo);
    const handleBlur = () => {
        setIsExpanded(false);
        return changeMemo(task.id, text);
    };

    const textareaRows = useMemo(() => isExpanded ? 3 : 1, [isExpanded]);

    return (
        <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            onBlur={handleBlur}
            className="border rounded break-words"
            rows={textareaRows}
        />
    );
};

