import React from "react";
import CardDish from "../Card/CardDish";
import { useState, useContext } from "react";
import PopUp from "../Popup/PopUp";
import { AllMenuContext } from "../context/AllMenuContext";
import AddtoCart from "../Cart/AddtoCart";
import { StateContext} from '../../context/AppProvider'

function SpecialDishesh(props) {
  let [showPopup, setshowPopup] = useState(false);
  let [popupItems, setpopupItems] = useState("");
  let [cartitems, setcartItem] = useState([]);

  let cartItemContext = useContext(StateContext)
  const allmenuContext = useContext(AllMenuContext);

  function showPopupHandler(dishname) {
    setpopupItems(dishname);
    setshowPopup(true);
  }
  function closepopupHandler() {
    setshowPopup(false);
  }

  function adToCartHandler(addTocartimg, addTocarttitle , addToCartid) {
    
    let checkCartItem = cartitems.find((item)=>item.id===addToCartid )

    if(checkCartItem){
      alert('Item Already Added to Cart')
    } else{
      setcartItem([
                      ...cartitems,
                    {
                      id:addToCartid,
                      img: addTocartimg,
                      title: addTocarttitle,
                    },
                  ])
                  alert('Item Successfully added to Cart')
    }
  
  }
  
  let specialDishes = 8;

  let specialMenus = allmenuContext.map((menuItem, index) => {
    if (index < specialDishes) {
      return (
        <CardDish menuitem={menuItem} showPopupHandler={showPopupHandler} index={index} />
      );
    }
    return null;
  });
  return (
    <section className="special-dishes section-bg">
      {showPopup && (
        <PopUp
          closepopupHandler={closepopupHandler}
          popupItems={popupItems}
          adToCartHandler={adToCartHandler}
        ></PopUp>
      )}
      <div className="container">{cartItemContext.cartItems.length !== 0 ?
        <AddtoCart ></AddtoCart> : ''
      }
        <div className="special-dishes-content text-center">
          <h2> special Dishes</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            quae, explicabo reiciendis distinctio animi similique, velit
            aspernatur quod commodi sequi quidem numquam eligendi quasi ipsam!
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap gap-25">{specialMenus}</ul>
        </div>
      </div>
    </section>
  );
}

export default SpecialDishesh;
