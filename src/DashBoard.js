import React, { useState } from 'react';
import './DashBoard.css'
import styles from './Dashboard.module.css'
function DashBoard(props) {
    // const [page,setPage]=useState({name:'firstPage'})
    const [productArray,setProduct]=useState([{"id":1,"product_name":"Sibylla","price":"Castilla","description":"scastilla0@bigcartel.com"},
    {"id":2,"product_name":"Anya","price":"Yule","description":"ayule1@theglobeandmail.com"},
    {"id":3,"product_name":"Huntington","price":"Claye","description":"hclaye2@examiner.com"},
    {"id":4,"product_name":"Ricard","price":"Simnor","description":"rsimnor3@cnbc.com"},
    {"id":5,"product_name":"Benedikt","price":"MacKessock","description":"bmackessock4@edublogs.org"},
    {"id":6,"product_name":"Lotti","price":"Vint","description":"lvint5@blogspot.com"},
    {"id":7,"product_name":"Jeth","price":"Feasley","description":"jfeasley6@independent.co.uk"},
    {"id":8,"product_name":"Christy","price":"Marquese","description":"cmarquese7@auda.org.au"},
    {"id":9,"product_name":"Dollie","price":"Dallmann","description":"ddallmann8@baidu.com"},
    {"id":10,"product_name":"Basile","price":"Ianetti","description":"bianetti9@irs.gov"}])
    return (
        <div>
          {
           productArray.map(product=>{
            return (<div>

                <ul>
                    <li>
                        {product.product_name}
                    </li>
                    <li>
                        {product.price}
                    </li>
                    <li>
                        {product.description}
                    </li>
                </ul>
            </div>)
           })

          }
        </div>
    );
}

export default DashBoard;