import Image from "next/image"
import Living from "@/Images/living.png" 
import Bedroom from "@/Images/bedroom.png" 
export default function SubHero(){

    return (
        <>
        <div className="subText">
            <h3 id="img"> Browse The Range</h3>
            <p id="img">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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