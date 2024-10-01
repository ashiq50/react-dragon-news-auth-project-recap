import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategory] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res =>res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div>
            <h2 className='mb-10 text-3xl font-bold'>All Category</h2>
           <div className='space-y-8 px-5'>
           {
                categories.map(category => <Link className='block'
                    key={category.id}
                    to={`/category/${category.id}`}
                    >
                        {category.name}
                </Link>)
            }
           </div>
        </div>
    );
};

export default LeftSideNav;