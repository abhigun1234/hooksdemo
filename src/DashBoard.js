import React from 'react';
import './DashBoard.css'
import styles from './Dashboard.module.css'
function DashBoard(props) {
    return (
        <div>
            <h1 className='test'>DashBoard</h1>
            <h1 className={styles.changeColor}>Data</h1>
        </div>
    );
}

export default DashBoard;