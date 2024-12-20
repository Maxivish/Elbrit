// app/components/Ingredients.tsx
const Ingredients = () => {
    return (
        <section className="px-[160px] py-[80px]">

            <div className="mx-20 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex-cloumn justify-start relative w-[300px] h-[180px] mx-auto">
                    <h1 className="text-xs font-bold text-cyan-950 uppercase">Ingredients</h1>
                    <h2 className="text-3xl font-bold text-cyan-950 my-5">Better Ingredients</h2>
                    <p className="text-xs font-light text-gray-600 mt-10">Only the best when you choose products offered on our platform - high-quality ingredients for high quality products! </p></div>
                <div className="relative w-[300px] h-[190px] mx-auto">
                    {/* Banner Image */}
                    <div className="w-full h-full bg-cover rounded-lg" style={{ backgroundImage: "url('/images/h1.png')" }} />

                    {/* Banner Info */}
                    <div className="absolute top-0 left-0 p-8 flex flex-col gap-4 w-full h-full rounded-lg">
                        {/* Title Text */}
                        <span className="text-3xl font-semibold text-blue-900">Vitamin C</span>

                        {/* Description Text */}
                        <span className="text-s font-medium text-gray-500">Vitamin C as ascorbic acid</span>

                        {/* Button */}
                        <div className="mt-4 flex items-center justify-between w-32 h-14 bg-transparent ">
                            <span className="text-blue-800 text-sm font-semibold underline underline-offset-4 uppercase">See More</span>
                        </div>
                    </div>
                </div>
                <div className="relative w-[300px] h-[190px] mx-auto">
                    {/* Banner Image */}
                    <div className="w-full h-full bg-cover rounded-lg" style={{ backgroundImage: "url('/images/h2.png')" }} />

                    {/* Banner Info */}
                    <div className="absolute top-0 left-0 p-8 flex flex-col gap-4 w-full h-full rounded-lg">
                        {/* Title Text */}
                        <span className="text-3xl font-semibold text-blue-900">Vitamin B3</span>

                        {/* Description Text */}
                        <span className="text-s font-medium text-gray-500">Niacin for healthy gut and skin</span>

                        {/* Button */}
                        <div className="mt-4 flex items-center justify-between w-32 h-14 bg-transparent ">
                            <span className="text-blue-800 text-sm font-semibold underline underline-offset-4 uppercase">See More</span>
                        </div>
                    </div>
                </div>
                <div className="relative w-[300px] h-[190px] mx-auto">
                    {/* Banner Image */}
                    <div className="w-full h-full bg-cover rounded-lg" style={{ backgroundImage: "url('/images/h3.png')" }} />

                    {/* Banner Info */}
                    <div className="absolute top-0 left-0 p-8 flex flex-col gap-4 w-full h-full rounded-lg">
                        {/* Title Text */}
                        <span className="text-3xl font-semibold text-blue-900">Magnesium</span>

                        {/* Description Text */}
                        <span className="text-s font-medium text-gray-500">Boost energy and support <br />muscle function</span>

                        {/* Button */}
                        <div className="mt-4 flex items-center justify-between w-32 h-14 bg-transparent ">
                            <span className="text-blue-800 text-sm font-semibold underline underline-offset-4 uppercase">See More</span>
                        </div>
                    </div>
                </div>
                <div className="relative w-[300px] h-[190px] mx-auto">
                    {/* Banner Image */}
                    <div className="w-full h-full bg-cover rounded-lg" style={{ backgroundImage: "url('/images/h4.png')" }} />

                    {/* Banner Info */}
                    <div className="absolute top-0 left-0 p-8 flex flex-col gap-4 w-full h-full rounded-lg">
                        {/* Title Text */}
                        <span className="text-3xl font-semibold text-blue-900">Hyaluronic Acid</span>

                        {/* Description Text */}
                        <span className="text-s font-medium text-gray-500">For smooth, <br />supple and soft skin!</span>

                        {/* Button */}
                        <div className="mt-4 flex items-center justify-between w-32 h-14 bg-transparent ">
                            <span className="text-blue-800 text-sm font-semibold underline underline-offset-4 uppercase">See More</span>
                        </div>
                    </div>
                </div>
                <div className="relative w-[300px] h-[190px] mx-auto">
                    {/* Banner Image */}
                    <div className="w-full h-full bg-cover rounded-lg" style={{ backgroundImage: "url('/images/h5.png')" }} />

                    {/* Banner Info */}
                    <div className="absolute top-0 left-0 p-8 flex flex-col gap-4 w-full h-full rounded-lg">
                        {/* Title Text */}
                        <span className="text-3xl font-semibold text-blue-900">Lactobacillus</span>

                        {/* Description Text */}
                        <span className="text-s font-medium text-gray-500">Invigorate your gut <br />microbiome</span>

                        {/* Button */}
                        <div className="mt-4 flex items-center justify-between w-32 h-14 bg-transparent ">
                            <span className="text-blue-800 text-sm font-semibold underline underline-offset-4 uppercase">See More</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ingredients;
