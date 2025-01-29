import Image from "next/image";
import Filter from "@/Pictures/filter.png";

export default function BlowHero() {
  return (
    <>
      {/* Container for the entire filter bar */}
      <div className="showBlowBar w-full h-16 bg-[#F9F1E7] px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center">

        {/* First Row */}
        <div className="firstRow flex items-center gap-2">
          <Image src="/Images/filter.png" height={30} width={30} alt="Filter Icon" />
          <p className="text-sm sm:text-base">Filter</p>
          <p className="text-sm sm:text-base">| Showing 1–16 of 32 results</p>
        </div>

        {/* Second Row */}
        <div className="secondRow flex items-center gap-4 mt-2 sm:mt-0">
          <p className="text-sm sm:text-base">Show</p>
          <input
            className="w-16 h-10 bg-gray-150 text-black text-center rounded-md"
            type="number"
            placeholder="16"
            min="1"
          />
          <p className="text-sm sm:text-base">Sort by</p>
          <select className="w-32 h-10 bg-gray-150 text-black text-center rounded-md">
            <option value="newest">Newest</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>

      </div>
    </>
  );
}
