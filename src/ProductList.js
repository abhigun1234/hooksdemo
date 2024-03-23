import React, { useState } from 'react';

function ProductList(props) {
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
                     return(
                        <div className='product-list'>

                                <div class="card" >
                                <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{product.product_name}</h5>
                                    <p class="card-text">{product.price}</p>
                                    <p class="card-text">{product.description}</p>
                                    <a href="#" class="btn btn-primary">Add To Cart</a>
                                </div>
                                </div>
                        </div>
                        
                     )
                })
            }
            
        </div>
    );
}

export default ProductList;