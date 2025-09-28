import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
      const {planName,averagePrice,description,features}=pricing


    return (
        <div className='border bg-amber-600 rounded-2xl p-4'>

      <div>
                {/* crd header */}
            <h1 className='text-7xl'>{planName}</h1>
            <h4 className='text-3xl'>{averagePrice}</h4>
      </div>

      {/* card body */}
      <div className='bg-amber-400 rounded-2xl p-4 mt-10'>
        <p>{description}</p>

        {
        features.map((feature ,index)=><PricingFeature key={index} feature={feature}></PricingFeature> )
      }
      </div>

          <button className="btn btn-wide">Wide</button>   
        </div>
        
    );
};

export default PricingCard;