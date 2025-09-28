import React from 'react';

const PricingCard = ({pricing}) => {
    console.log(pricing)
    return (
        <div>

            {/* crd header */}
            <h1 className='text-7xl'>{pricing.planName}</h1>
            <h4 className='text-3xl'>{pricing.averagePrice}</h4>
            
        </div>
    );
};

export default PricingCard;