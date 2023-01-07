import "./Cards.css";

function Cards({title,image,price,area,time,feature}){

    return(
        <div className="Card">
            <div className="Image_Wrapper">
                <div className="feature">
                    <span>{feature}</span>
                </div>
                <img src={image} alt="Olx Product Image"/>
            </div>

            <div className="Card_body">
            <div className="titleIcon">
                <div className="Title">
                    <a href="#">{title}</a>
                </div>
                <div className="icon">
                    <img src="https://www.olx.com.pk/assets/iconFavoriteUnselected_noinline.5767fec1cf12da79531e7c0b4a94f4e2.svg" alt="" />
                </div>
            </div>
             
            <div className="price">
                <h4>{price}</h4>
            </div>
            <div className="areaTime">
                <span>{area}</span>
                <span>•</span>
                <span>{time}</span>
            </div>
            </div>
          

        </div>

    )
}
 




export default Cards;
        

