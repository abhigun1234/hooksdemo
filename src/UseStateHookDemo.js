import React from 'react';
import { useState } from 'react';
import './MyStyles.css'
import styles from './appStyles.module.css'
function UseStateHookDemo(props) {
    // const [name,setName]=useState("ravi")
    let className=props.primary ? 'header':''
  
    //const [address,setAddress]=useState({firstName:'ravi',lastName:'singh'})
    const [userInfo,setUser]=useState(  [{"first_name":"Antonio","last_name":"Nazareth","email":"anazareth0@elpais.com"},
    {"first_name":"Ame","last_name":"Vossgen","email":"avossgen1@edublogs.org"},
    {"first_name":"Nicolis","last_name":"Zink","email":"nzink2@xinhuanet.com"},
    {"first_name":"Cele","last_name":"Rosedale","email":"crosedale3@stumbleupon.com"},
    {"first_name":"Eveline","last_name":"Hinkins","email":"ehinkins4@tamu.edu"}])
    return (
        <div>
            {/* {address.firstName}
            {address.lastName} */}
            <h1 className={className}>user</h1>
            <h2 className={styles.success}>new</h2>
            <table>
                <thread>
                    <tr>first_name</tr>
                    <th>last_name</th>
                    <th>email</th>
                </thread>
            </table>
            {
                userInfo.map(user=>{
                    return (<tr>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                    </tr>)
                })
            }
        </div>
    );
}

export default UseStateHookDemo;