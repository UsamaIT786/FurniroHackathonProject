import Image from "next/image";
import Logo from "@/Pictures/Logo.png";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <div className="navbar flex justify-between items-center p-4">
        <div className="logo flex-shrink-0">
          <Image
            id="img"
            src={'/Images/Logo.png'}
            width={185}
            height={41}
            alt="Logo"
          />
        </div>

        {/* Navigation buttons */}
        <div className="navbtns hidden md:flex">
          <ul className="flex space-x-6">
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

        {/* Icons */}
        <div className="icons flex space-x-4 items-center">
          <MdPersonOutline id="img" className="cursor-pointer" />
          <CiSearch id="img" className="cursor-pointer" />
          <GoHeart id="img" className="cursor-pointer" />
          <Link href={'/cart'}>
            <AiOutlineShoppingCart id="img" className="cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Button (visible on small screens) */}
        <div className="mobile-menu-btn md:hidden">
          <button className="text-2xl">☰</button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default, visible on small screens) */}
      <div className="mobile-menu md:hidden">
        <ul className="space-y-4 mt-4 text-center">
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
