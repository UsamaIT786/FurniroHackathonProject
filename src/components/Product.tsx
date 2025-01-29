import Image from "next/image";

export default function Products() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: 'Syltherine',
      price: "Rp 2.500.000",
      age: 30,
      image: "/Images/Hero.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Jane Smith',
      price: "Rp 2.500.000",
      age: 25,
      image: "/Images/Images (1).png",
      description: 'A creative designer who loves creating stunning visuals.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: "/Images/Images (2).png",
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: "/Images/Images (3).png",
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: "/Images/image 8.png",
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: "/Images/Images (5).png",
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: "/Images/Images (6).png",
      description: 'A software engineer specializing in backend systems.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: "/Images/Images.png",
      description: 'A software engineer specializing in backend systems.',
    },
  ];

  return (
    <>
      <div className="text-center p-6">
        <h2 id="img" className="font-bold text-3xl sm:text-4xl lg:text-5xl">Our Products</h2>
      </div>

      {/* Product Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {data.map((card, index) => (
          <div key={index} className="card bg-white shadow-md rounded-lg overflow-hidden">
            <Image id="img" 
              src={card.image} 
              alt={card.name} 
              width={300} 
              height={300} 
              className="w-full h-64 object-cover"
            />
            <div className="card-body p-4">
              <h5 className="text-lg font-bold">{card.name}</h5>
              <p className="text-sm text-gray-500 mb-4">{card.description}</p>
              <h5 className="text-xl font-semibold">{card.price}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex items-center justify-center mb-12 mt-6">
        <button className="productBtn text-[#B88E2F] p-3 border-2 border-[#B88E2F] rounded-md hover:bg-[#B88E2F] hover:text-white transition duration-300">
          Show More
        </button>
      </div>
    </>
  );
}
