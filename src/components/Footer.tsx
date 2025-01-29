import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer p-5 border-t-2 leading-10 border-gray-300 flex flex-col sm:flex-row sm:justify-between sm:space-x-8">
          {/* Logo and Info */}
          <div className="w-full sm:w-[14rem] mb-6 sm:mb-0">
            <h2 id="img" className="font-bold text-[2rem]">Funiro.</h2>
            <p id="btn" className="leading-9 text-black font-bold">
              Website Design By Usama Muzammil
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 sm:mb-0">
            <ul className="space-y-4 sm:space-y-0 sm:flex sm:space-x-6">
              <li id="img"><Link href={'/'}>Home</Link></li>
              <li id="img"><Link href={'/Shop'}>Shop</Link></li>
              <li id="img"><Link href={'/Blog'}>Blog</Link></li>
              <li id="img"><Link href={'/Contact'}>Contact</Link></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="mb-6 sm:mb-0">
            <h4 id="img" className="font-semibold">Help</h4>
            <ul className="space-y-4">
              <li id="img">Payment Option</li>
              <li id="img">Returns</li>
              <li id="img">Privacy Policies</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="mb-6 sm:mb-0">
            <h4 id="img" className="font-semibold">Newsletter</h4>
            <div className="flex space-x-3">
              <input 
                type="text" 
                placeholder="Your Email" 
                className="px-4 py-2 border rounded-md w-48"
              />
              <button id="btn" type="submit" className="font-bold px-6 py-2 bg-green-500 text-white rounded-md">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="para text-center py-4 border-t-2 border-gray-300">
          <hr />
          <p className="text-sm mt-2">2023 Furino. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
