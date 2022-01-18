import React from 'react';
// import { Link } from "react-router-dom";
import Card from '../../../Card/card';

export default function NewProducts({products}) {
    let newProducts = products.filter(p=> p.approved === false);
    console.log("np", newProducts);
    return (
        <div>
        <h1> Productos a revisar:</h1>
            {
                newProducts.map(p => {
                    return (
                        <div className='inline-block'>
                        <Card
                        name= {p.name} image={p.image} id={p.id} price={p.price}
                        />
                     </div>
                        
                )
                })
            }
        </div>
    )
}
