import React from 'react';
import PurpleBtn from '../../../generalComponents/purpleBtn';
import PricingCard from './PricingCard/PricingCard';
import { gradientToL } from '../../../global-variables';

const pricingPlans = [
    {
        plan: 'Starter',
        price: '$0',
        badgeColor: 'bg-red-100 text-red-500',
        badgeText: '→ Starter',
        features: [
            'Lorem ipsum dolor sit amet.',
            'Pellentesque habitant morbi tristique senectus.',
            'Ut enim ad minim veniam.',
            'Curabitur blandit tempus porttitor',
            'Donec ullamcorper nulla non metus auctor fringilla.',
            'Ut enim ad minim veniam.',
            'Excepteur sint occaecat cupidatat non proident.'
        ],
    },
    {
        plan: 'Basic',
        price: '$0',
        badgeColor: 'bg-purple-100 text-purple-500',
        badgeText: '→ Basic',
        features: [
            'Lorem ipsum dolor sit amet.',
            'Pellentesque habitant morbi tristique senectus.',
            'Ut enim ad minim veniam.',
            'Curabitur blandit tempus porttitor',
            'Donec ullamcorper nulla non metus auctor fringilla.',
            'Ut enim ad minim veniam.',
            'Excepteur sint occaecat cupidatat non proident.'
        ],
        highlight: true,
    },
    {
        plan: 'Pro',
        price: '$0',
        badgeColor: 'bg-green-100 text-green-500',
        badgeText: '→ Pro',
        features: [
            'Lorem ipsum dolor sit amet.',
            'Pellentesque habitant morbi tristique senectus.',
            'Ut enim ad minim veniam.',
            'Curabitur blandit tempus porttitor',
            'Donec ullamcorper nulla non metus auctor fringilla.',
            'Ut enim ad minim veniam.',
            'Excepteur sint occaecat cupidatat non proident.'
        ],
    },
];

const PricingSection: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center">
            {/* PRICING Title */}
            <section className={ gradientToL + " w-full flex-center h-screen max-h-[800px] items-center "}>
                <div className="flex-center w-full flex-col gap-[20%] h-full py-16">
                    <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-extrabold text-purple-bg tracking-tight mb-8">PRICING</h1>
                    <PurpleBtn text="Get Started For Free" classes="px-8 py-3 " />
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="w-full flex justify-center gap-4 p-8">
                <div className="flex justify-center items-start flex-row flex-wrap gap-4 w-full max-w-5xl">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PricingSection;
