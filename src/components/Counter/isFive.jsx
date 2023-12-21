import React from 'react';

const IsFive = ({ count }) => {
    return (
        <div>
            {count === 5 ? 'Is Five': 'Is NOT Five'}
        </div>
    );
}

export default React.memo(IsFive, (prevProps, nextProps) => { 
    if (nextProps.count === 5 || prevProps.count === 5)
        return false;
    return true;
});
