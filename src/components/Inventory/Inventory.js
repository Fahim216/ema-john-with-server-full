import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    const handleAddProduct=()=>{
        fetch('https://vast-sierra-54883.herokuapp.com/addProduct',{
            method: 'POST',
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(fakeData)
        })

    }
    return (
        <div>
            <button onClick={handleAddProduct}>AddProduct</button>
        </div>
    );
};

export default Inventory;