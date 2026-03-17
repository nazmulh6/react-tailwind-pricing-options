import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
    const { name, price, description, features } = pricing;
    // console.log(pricing)
    return (
        <div className='border bg-blue-200 rounded-2xl p-4 flex flex-col'>
            {/* card header  */}
            <div >
                <h2 className='text-2xl'>{name}</h2>
                <h4>${price}</h4>
            </div>
            {/* card body  */}
            <div className='border flex-1 bg-blue-400 rounded-2xl p-4 mt-6'>
                <p className='mb-4'>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature
                        key={index}
                        feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-2">Subscribe</button>
        </div>
    );
};

export default PricingCard;