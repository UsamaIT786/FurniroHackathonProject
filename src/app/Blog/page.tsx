import Image from "next/image"
import Living from "@/Images/living.png" 
import Bedroom from "@/Images/bedroom.png" 
export default function SubHero(){

    return (
        <>
        <div className="subText">
            <h3 id="img"> Browse The Range</h3>
            <p id="btn"> Furniro,Market Place Builder, we believe that furniture is more than just functional—it's the foundation of creating a space that reflects your personality and enhances your lifestyle. Whether you're redesigning your living room, upgrading your bedroom, or setting up a home office, we offer a curated selection of stylish, high-quality furniture that fits every need and budget. From cozy sofas that invite relaxation to elegant dining sets perfect for family gatherings, our collection ensures that you don’t have to compromise on comfort or style. Browse our pieces today and transform your home into a space you’ll love!

</p>
        </div>
        <div className="imgArea">
            <div className="imgOne">

            <Image id="img" src={'/Images/dining.png'} width={282} height={282} alt="Picture of the author" />
                <h6>Dining</h6>
            </div>
                

            <div className="imgTow">
            <Image id="img" src={'/Images/living.png'} width={282} height={282} alt="Picture of the author" />
            <h6>Living</h6>
            </div>
            
            <div className="imgThree">

            <Image id="img" src={'/Images/bedroom.png'} width={282} height={282} alt="Picture of the author" />
            <h6>Bedroom</h6>    
            </div>
           </div>

        </>
    )
}