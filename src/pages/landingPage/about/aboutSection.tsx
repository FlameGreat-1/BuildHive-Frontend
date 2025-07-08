import React from 'react';
import PurpleBtn from '../../../generalComponents/purpleBtn';
import './about.css';
import { gradientToL } from '../../../global-variables';

const AboutSection: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center font-inter">
            {/* ABOUT Title */}
            <section className={ gradientToL + " w-full flex-center h-screen max-h-[800px] items-center "}>
                <div className="flex-center flex-col gap-[20%] h-full py-16">
                    <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-extrabold text-purple-bg tracking-tight mb-8">ABOUT</h1>
                    <PurpleBtn text="Get Started For Free" classes="px-8 py-3 text-lg rounded-full " />
                </div>
            </section>

            {/* Mission Section */}
            <section className="w-full bg-[#9d94a6] py-12 px-4 flex flex-col md:flex-row gap-8 items-center sm:items-start justify-center">
                <div className="md:w-fit font-bold text-white text-lg   mb-2 md:mb-0">OUR MISSION</div>
                <div className="md:w-2/3 text-white text-center sm:text-left">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At Hive, we believe in simplifying the way construction professionals work. Our mission is to empower tradies, clients, and enterprises with tools that streamline job management, improve collaboration, and drive growth.<br />Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus.</p>
                </div>
            </section>

            {/* Vision Section */}
            <section className="w-full relative py-12 px-4 flex flex-col md:flex-row gap-8 sm:items-start justify-center bg-cover bg-center bg-[url('/src/assets/images/abtImage.webp')]  items-center" >
                <div className="absolute inset-0 bg-gray-600/80 z-0" />
                <div className="md:w-fit font-bold text-white text-lg mb-2 md:mb-0 z-10">OUR VISION</div>
                <div className="md:w-2/3 text-white z-10 text-center sm:text-left">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At Hive, we believe in simplifying the way construction professionals work. Our mission is to empower tradies, clients, and enterprises with tools that streamline job management, improve collaboration, and drive growth.<br />Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus.</p>
                </div>
            </section>

            {/* Values Section */}
            <section className="w-full py-12 px-4 flex flex-col md:flex-row gap-8 items-center  sm:items-start justify-center">
                <div className="md:w-fit font-bold text-purple-bg text-lg mb-2 md:mb-0">OUR VALUES</div>
                <div className="md:w-2/3 text-purple-bg text-center sm:text-left">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At Hive, we believe in simplifying the way construction professionals work. Our mission is to empower tradies, clients, and enterprises with tools that streamline job management, improve collaboration, and drive growth.<br />Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus.</p>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;
