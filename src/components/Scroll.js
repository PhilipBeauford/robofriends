import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '3px solid lightgray', height: '800px', padding: '18px' }}>
            {props.children}
        </div>
    );
};

export default Scroll;