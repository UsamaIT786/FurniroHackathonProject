import Link from "next/link"
export default function Footer(){
    return (
        <>
        <footer>

        <div className="footer p-5 border-t-2 leading-10  border-gray-300">
            <div className="w-[14rem]  ">
                <h2 id="img" className="font-bold text-[2rem]">Funiro.</h2>
                <p id="btn" className="leading-9 text-black font-bold ">Website Design By Usama Muzammil</p>
            </div>


            <div>
                
                <ul>
                    
                    <li id="img">
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li id="img">
                        <Link href={'/Shop'}>Shop</Link>
                    </li>
                    <li id="img">
                        <Link href={'/Blog'}>Blog</Link>
                    </li>
                    <li id="img">
                        <Link href={'/Contact'}>Contact</Link>
                    </li>
                </ul>
            </div>


            <div>
                <h4 id="img">Help</h4>
                <ul>
                    <li id="img">Payment Option</li>
                    <li id="img">Returns</li>
                    <li id="img">Privacy Policies</li>
                </ul>
            </div>

            <div>
                <h4 id="img">Newsletter</h4>
            <input type="text" placeholder="Your Email" />
            <button id="btn" type="submit" className="font-bold">SUBSCRIBE</button>
            </div>
            
        </div>
        <div  className="para">

            <hr />
            <p>2023 furino. All rights reverved</p>
        </div>
        </footer>
        </>
    )

}
