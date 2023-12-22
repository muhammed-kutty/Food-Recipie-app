import React from "react";
import { useContext , useState } from "react";
import { StateContext } from "../../context/AppProvider";
import {DispatchContext} from '../../context/AppProvider'
import UseForm from "../Forms/UseForm";


const Checkout = () => {
  const Cartpakages = useContext(StateContext);
  const dispatch = useContext(DispatchContext)
  
  const [itemid,setitemid] = useState()
  const [showUserform, setshowUserform] = useState(false)

  let cartpakageAre = Cartpakages.cartItems.map((item , index) => {
   
    return (
      <div key={index}>
        <h5>{item.title}</h5>
        <img src={item.img} alt="" />
        <h2>Rs:- {item.price}/-</h2>
        <h2> Quantity : {item.qty}  
          <button onClick={()=>{dispatch({
            type: 'minus-qty',
                payload:{
                  id:item.id
                }
              })}}>-</button>
          <button onClick={()=>{
            dispatch({
            type: 'add-qty',
            payload:{
              id:item.id
            }
          })}}>+</button>
        </h2>
        <h2 >Tottal Price : {item.totalprice}/-</h2>
        <h2 onClick={()=>showuserform(item.id) }>Buy Now</h2>      
      </div>
    );
  });
  function showuserform(id){
    setshowUserform(true)
    setitemid(id)
  }
  function closeuserForm(){
    setshowUserform(false)
  } 
  return (
    <section>
      { showUserform &&
        <UseForm closeuserForm={closeuserForm}
        itemid={itemid}>

        </UseForm>

      }
    <div>
      <div className="container">
        <div className="checkout-warper">
          <div className="checkout-warper-items">
            <h1>CheckOut Page</h1>

            {cartpakageAre}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Checkout;
