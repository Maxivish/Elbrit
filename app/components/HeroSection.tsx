// app/components/HeroSection.tsx
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="bg-sky-100 py-12 mx-5 relative border-10 border-white">
            <div className="w-full h-auto max-w-6xl mx-auto  py-10">
                {/* Heading */}
                <h1 className="text-5xl md:text-9xl font-bold text-blue-900 mb-12 text-center md:text-left">Essential Vitamins</h1>

                {/* Content Section */}
                <div className="relative flex flex-col items-center lg:flex-row lg:items-start justify-evenly gap-10">
                    {/* Left Text Content */}
                    <div className="w-full md:w-1/3 text-center md:text-left">
                        <p className="text-sm md:text-base text-gray-800 mb-2">
                            Online Medical Supplies
                        </p>
                        <p className="text-lg md:text-xl font-bold text-cyan-950 mb-3">
                            Get Your Vitamins <br />& Minerals
                        </p>
                        <button className="mt-6 bg-cyan-950 text-white px-6 py-3 rounded-3xl shadow-md hover:bg-cyan-700">
                            Explore
                        </button>
                    </div>
                    
                    {/* Center Image */}
                    <div className="w-full lg:w-1/3 -mt-12 lg:-mt-24 flex justify-center relative">
                    {/* Rectangle Background */}
                    <div
                        className="absolute bg-yellow-200"
                        style={{
                            width: "220px",
                            height: "200px",
                            top: "90px",
                            borderTopLeftRadius: "75px",
                            borderBottomRightRadius: "75px",
                            zIndex: 5, // Ensures it appears behind the image
                        }}
                    ></div>
                        <Image
                            src="/images/hero.png"
                            alt="Vitamins Bottle"
                            width={250}
                            height={250}
                            className="mx-5 z-10"
                            
                        />
                    </div>

                    {/* Right Features Section */}
                    <div className="w-full px-4 mb-8 md:w-1/3 flex flex-col space-y-6">
                        {/* Vitamins Section */}
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/images/i1.png"
                                alt="Vitamins Bottle"
                                width={30}
                                height={30}
                            />
                            <div className="flex flex-col">
                                <p className="text-lg font-bold text-cyan-950">Vitamins</p>
                                <p className="text-sm text-cyan-950">
                                    Increased vitamins and minerals in your diet.
                                </p>
                            </div>
                        </div>

                        {/* Weight Loss Section */}
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/images/i2.png"
                                alt="Vitamins Bottle"
                                width={30}
                                height={30}
                            />
                            <div className="flex flex-col">
                                <p className="text-lg font-bold text-cyan-950">Weight Loss</p>
                                <p className="text-sm text-cyan-950">
                                    Find scientifically proven solutions.
                                </p>
                            </div>
                        </div>

                        {/* Functional Foods Section */}
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/images/i3.png"
                                alt="Vitamins Bottle"
                                width={30}
                                height={30}
                            />
                            <div className="flex flex-col">
                                <p className="text-lg font-bold text-cyan-950">Functional Foods</p>
                                <p className="text-sm text-cyan-950">
                                    From protein powders to baby formula.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
