import React from 'react';

const PricingCard = ({pricing}) => {
    console.log(pricing)
    return (
        <div className='border bg-amber-600 rounded-2xl p-4'>

      <div>
                {/* crd header */}
            <h1 className='text-7xl'>{pricing.planName}</h1>
            <h4 className='text-3xl'>{pricing.averagePrice}</h4>
      </div>

      {/* card body */}
      <div className='bg-amber-400 rounded-2xl p-4 mt-10'>
        <p>{pricing.description}</p>
      </div>
            
        </div>
        
    );
};

export default PricingCard;