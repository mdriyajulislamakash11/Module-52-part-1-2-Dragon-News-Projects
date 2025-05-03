import React, { useEffect, useState } from 'react';

const LeftNavber = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("/categories.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    console.log(categories)


    return (
        <div>
            
        </div>
    );
};

export default LeftNavber;