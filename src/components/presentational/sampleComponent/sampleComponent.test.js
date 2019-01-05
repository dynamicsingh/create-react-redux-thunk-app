import React from 'react';

const SampleComponent = ({componentLabel = 'default prop label', counterVal, updateCounter}) => {
    return (
        <div style={{paddingTop: 30}}>
            <div>{componentLabel} {counterVal}</div>
            <button style={{marginTop: 30}} onClick={updateCounter}>Update Counter</button>
        </div>
    );
};

export default SampleComponent;