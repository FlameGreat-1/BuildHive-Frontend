import React from 'react';

interface PricingCardProps {
    plan: string;
    price: string;
    period?: string;
    features: string[];
    badgeColor: string;
    badgeText: string;
    highlight?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, price, period = '/Month', features, badgeColor, badgeText, highlight }) => {
    return (
        <div className={`flex flex-col border border-gray-200 rounded-lg p-6 bg-white shadow-sm h-[400px] w-[260px] max-w-[300px] 
        //${highlight ? 'scale-105 z-10' : ''}
        `}>
            <span className={`self-start px-3 py-1 rounded-full text-xs font-semibold mb-2 ${badgeColor}`}>{badgeText}</span>
            <h3 className="text-lg font-bold mb-2">{plan}</h3>
            <div className="flex items-end mb-2">
                <span className="text-3xl font-bold text-dark-black">{price}</span>
                <span className="text-base text-gray-500 ml-1">{period}</span>
            </div>
            <div className="font-bold text-sm mb-2 text-dark-black">Lorem ipsum dolor sit amet, consectetur a.</div>
            <ul className="text-xs text-gray-700 mb-4 list-disc list-inside space-y-1">
                {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                ))}
            </ul>
        </div>
    );
};

export default PricingCard;
