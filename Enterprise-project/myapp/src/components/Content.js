import React from 'react';

const Content = (props) => {
    return (
        <div style={{minHeight: '50vh', width: '100%'}}>
            {props.children}
        </div>
    )
}

export default Content;