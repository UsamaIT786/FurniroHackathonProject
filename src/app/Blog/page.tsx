    import Image from "next/image";
    import living from "@/Images/living.png";
    import bedroom from "@/Images/bedroom.png";
    import dining from "@/Images/dining.png"; // Assuming Dining image path is correctd
    export default function SubHero() {
    return (
        <>
        <div className="subText text-center sm:text-left px-4 sm:px-16 mb-8">
            <h3 id="btn" className="text-2xl sm:text-3xl md:text-4xl text-center font-extrabold mb-2">
            Browse The Range
            </h3>
            <p id="btn" className="text-sm sm:text-base md:text-lg text-gray-600 text-center">Welcome to our furniture store, where we bring comfort, style, and functionality to every corner of your home. Our curated collection features a wide range of high-quality furniture pieces, from elegant living room sets to cozy bedroom essentials. Whether you’re looking to refresh your space with modern designs or seeking timeless classics, we offer something for every taste and budget. Crafted with the finest materials, our furniture is designed to provide both aesthetic appeal and lasting durability. Browse through our exclusive collections, and let us help you create a home that reflects your unique personality and lifestyle. At our store, comfort meets design, making your home feel like the perfect haven.

            </p>
        </div>

        <div className="imgArea flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:space-x-8 px-4 sm:px-16">
            {/* Dining Image */}
            <div className="imgOne mb-8 sm:mb-0 text-center sm:text-left">
            <Image id="img"
                src={'/Images/dining.png'}
                width={282}
                height={282}
                alt="Dining"
                className="object-cover rounded-lg"
            />
            <h6 className="mt-4 text-lg font-semibold">Dining</h6>
            </div>

            {/* Living Image */}
            <div className="imgTwo mb-8 sm:mb-0 text-center sm:text-left">
            <Image id="img"
                src={'/Images/living.png'}
                width={282}
                height={282}
                alt="Living"
                className="object-cover rounded-lg"
            />
            <h6 className="mt-4 text-lg font-semibold">Living</h6>
            </div>

            {/* Bedroom Image */}
            <div className="imgThree mb-8 sm:mb-0 text-center sm:text-left">
            <Image id="img"
                src={'/Images/bedroom.png'}
                width={282}
                height={282}
                alt="Bedroom"
                className="object-cover rounded-lg"
            />
            <h6 className="mt-4 text-lg font-semibold">Bedroom</h6>
            </div>
        </div>
        </>
    );
    }
