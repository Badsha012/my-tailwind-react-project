import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const Pricing = ({pricingpromise}) => {

const pricingData=use(pricingpromise );
//console.log(pricingData);


    
    return (
        <div>
            <h2 className='text-5xl'>Get Our MemberShip</h2>

            <div className='grid gap-8 md:grid-cols-2 grid-cols-1'>
                {
                   pricingData.map(pricing=><PricingCard key={pricing.id}
                     pricing ={pricing}></PricingCard>) 
                }
            </div>
            
        </div>
    );
};

export default Pricing;