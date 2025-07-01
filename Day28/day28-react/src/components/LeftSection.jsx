import React from 'react';

function LeftSection(props) {
    return (
        <>
            <p className="text-5xl mt-20 ml-10">Only Here,</p>
            <p className="text-5xl mt-4 ml-10">Only With Us</p>
            <p className="text-sm mt-4 ml-10 text-gray-500 leading-relaxed">
                Discover experiences you won't find anywhere else<br/>
                — thoughtfully designed to immerse you in the heart of the<br/>
                destination. These aren't just activities, but soulful stories<br/>
                waiting to be lived, told, and remembered.
            </p>

            <div className="relative">
                <div className="ml-8 mr-14 border-t border-b border-gray-300 mt-10 p-8">
                    <p className="text-xl">Dine by Design</p>
                    <p className="text-xs mt-2 text-gray-400 leading-relaxed">
                        From a candlelit dinner on a cliffside pavilion to a starlit beach<br/>
                        picnic surrounded by torches, our "Dine by Design" experience.
                    </p>
                </div>
                <button
                    className="absolute right-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-xl ">
                    →
                </button>
            </div>
            <div className="relative">
                <div className="ml-8 mr-14 border-b border-gray-300 p-8">
                    <p className="text-xl">Local Living Encounters</p>
                    <p className="text-xs mt-2 text-gray-400 leading-relaxed">
                        Step into the daily life of a local village, learn the art of traditional<br/> weaving, or
                        harvest spices alongside a farmer in the morning sun.
                    </p>
                </div>
                <button
                    className="absolute right-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-xl">
                    →
                </button>
            </div>
            <div className="relative">
                <div className="ml-8 mr-14 border-b border-gray-300 p-8">
                    <p className="text-xl">Sunrise Awakening Rituals</p>
                    <p className="text-xs mt-2 text-gray-400 leading-relaxed">
                        Begin your morning with guided yoga on a cliff overlooking the<br/> sea, followed by a
                        nourishing herbal elixir.
                    </p>
                </div>
                <button
                    className="absolute right-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-xl">
                    →
                </button>
            </div>
        </>
    );
}

export default LeftSection;
