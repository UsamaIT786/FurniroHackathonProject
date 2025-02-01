
"use client"

import Image from "next/image";
import Logo from "@/Images/Logo.png";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <div className="navbar flex justify-between items-center py-4 px-4 sm:px-6 lg:px-12 bg-white">
        {/* Logo Section */}
        <div className="logo flex items-center">
          <Image
            id="img"
            src={'/Images/Logo.png'}
            width={185}
            height={41}
            alt="Picture of the author"
            className="object-contain"
          />
        </div>

        {/* Navigation Buttons (Menu) */}
        <div className="navbtns hidden sm:flex">
          <ul className="head flex space-x-6">
            <li className="hover:text-green-500">
              <Link href={'/'}>Home</Link>
            </li>
            <li className="hover:text-green-500">
              <Link href={'/Shop'}>Shop</Link>
            </li>
            <li className="hover:text-green-500">
              <Link href={'/Blog'}>Blog</Link>
            </li>
            <li className="hover:text-green-500">
              <Link href={'/Contact'}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Icons Section */}
        <div className="icons flex space-x-4 items-center">
            <MdPersonOutline id="img" className="text-xl" />


            
          <CiSearch id="img" className="text-xl" />
          <GoHeart id="img" className="text-xl" />
          <Link href={'/cart'}>
            <AiOutlineShoppingCart id="img" className="text-xl" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button className="text-xl">☰</button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div className="sm:hidden mt-4">
        <ul className="space-y-4 text-center">
          <li className="hover:text-green-500">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="hover:text-green-500">
            <Link href={'/Shop'}>Shop</Link>
          </li>
          <li className="hover:text-green-500">
            <Link href={'/Blog'}>Blog</Link>
          </li>
          <li className="hover:text-green-500">
            <Link href={'/Contact'}>Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
