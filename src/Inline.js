import React from 'react';

function Inline(props) {
    const heading={
        fontSize: '72px'
        ,color:'blue'
    }
    return (
        <div style={heading}>
            Inline
        </div>
    );
}

export default Inline;