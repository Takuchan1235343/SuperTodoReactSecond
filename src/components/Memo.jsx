import React, {useState} from 'react';

export const MemoComponent = () => {
    const [memo, setMemo] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const handleInputChange = (event) => {
        setMemo(event.target.value);
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
      <textarea
          value={memo}
          onChange={handleInputChange}
          className={`${isExpanded ? 'block' : 'hidden'}  h-8  border rounded break-words`}
      />
            <div
                onClick={toggleExpand}
                className='border-2 rounded-lg px-4 font-mono min-w-24 mx-auto'
            >
                {isExpanded ? memo : `${memo.substring(0, 5)}　　　`}
            </div>
        </div>
    );
};

