import React from 'react';
import Header from '../pages/Header';
import HeadLine from '../components/HeadLine';

const Root = () => {
    return (
        <div className='w-10/12 mx-auto'>
            {/* Header */}
            <Header/>
            
            {/* HeadLine */}
            <HeadLine />
            
        </div>
    );
};

export default Root;