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
      <div className="navbar">
        <div className="logo ">


        <Image id="img" src={'/Images/Logo.png'} width={185} height={41} alt="Picture of the author" />
        </div>

        <div className="navbtns">
        <ul className="head">
                  
                  
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

        <div className="icons">
        <MdPersonOutline id="img" />
        <CiSearch id="img" />
        <GoHeart id="img" />
        <Link href={'/cart'}>
        <AiOutlineShoppingCart id="img" />
        </Link>

        </div>


      </div>
    </>
  );
}