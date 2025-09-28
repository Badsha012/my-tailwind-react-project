import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const Pricing = ({pricingpromise}) => {

const pricingData=use(pricingpromise);
console.log(pricingData);


    
    return (
        <div>
            <h2 className='text-5xl'>Get Our MemberShip</h2>

            <div>
                {
                   pricingpromise.map(pricing=><PricingCard key={pricing.id} pricing ={pricing}></PricingCard>) 
                }
            </div>
            
        </div>
    );
};

export default Pricing;