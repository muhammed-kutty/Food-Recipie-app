import React, { useContext, useState } from "react";
import { StateContext, DispatchContext } from "../../context/AppProvider";
import { useNavigate } from "react-router-dom";

function UseForm({ closeuserForm, itemid }) {
  const itemcontext = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const navigate = useNavigate();

  const [input,setinput]=useState({
    name:'',
    email:'',
    phone:'',
    address:'',
    pincode:'',
    payment:''

  })


  let itemForbuy = itemcontext.cartItems.map((item, index) => {
    if (item.id === itemid)
      return (
        <div key={index}>
          <h3>{item.title}</h3>
          <h4>{item.totalprice}</h4>
        </div>
      );
    return null;
  });
  


  function itemForOrder() {
    // let orderDetails= input.map((item)=> {return item})
    // console.log('orderDetails=',orderDetails);

    itemcontext.cartItems.map((item) => {
      if (item.id === itemid)
        dispatch({
          type: "order-summit",
          payload: {
            id: item.id,
            title: item.title,
            img: item.img,
            qty: item.qty,
            totalprice: item.totalprice,
            name:input.name,
            phone:input.phone,
            address:input.address,
            pincode:input.pincode,
            payment:input.payment,


          },
        });
      return null;
    });
  }
  function handleSummit(event) {
    event.preventDefault();
    if(input.name === ''){
      alert('Your Name is required')
    }
    else if(input.email === ''){
      alert('Your Email is required')
    }
    else if(input.phone === ''){
      alert('Your phone is required')
    }
    else if(input.address === ''){
      alert('Your Adrress is required')
    }
    else if(input.pincode === ''){
      alert('Your pincode is required')
    }
    else if(input.payment === ''){
      alert('please select a Payment Methode')
    }
    else if(input.payment !== 'cod'){
      alert('Sorry currently only Cash on Delivery')
    }
    else{
      alert("item orderd successfully  !!");
      itemForOrder();
      navigate("/orders");
    }
  }
  
  function onchangeHandler(event){
    const neewObj = {...input,[event.target.name]:event.target.value}
    setinput(neewObj)
    
  }

  return (
    <section>
      <div className="container">
        <div className="userform flex text-center">
          <div className="userform-content">
            <form onSubmit={handleSummit}>
              <div>
                <label>
                  <h2>Name :</h2>
                  <input
                    name='name'
                    onChange={(e) => onchangeHandler(e)}
                    type="text"
                    placeholder="Enter Your Name"
                  />
                </label>
              </div>
              <div>
                <label>
                  <h2>Email :</h2>
                  <input
                    name='email'
                    onChange={(e) => onchangeHandler(e)}
                    type="email"
                    placeholder="Enter Your Email"
                  />
                </label>
              </div>
              <div>
                <label>
                  <h2>Phone No : </h2>
                  <input
                    name='phone'
                    onChange={(e) => onchangeHandler(e)}
                    type="tel"
                    placeholder="Enter Your Phone no"
                  />
                </label>
              </div>
              <div>
                <label>
                  <h2>Address : </h2>
                  <input
                    name='address'
                    onChange={(e) => onchangeHandler(e)}
                    type="text"
                    placeholder="Enter Your Adress"
                  />
                </label>
              </div>
              <div>
                <label>
                  <h2>Pincode : </h2>
                  <input
                    name='pincode'
                    onChange={(e) => onchangeHandler(e)}
                    type="text"
                    placeholder="Enter Your Pincode"
                  />
                </label>
              </div>

              <div className="userform-content-orders">
                <label>
                  <h2>Your orders:</h2>
                  {itemForbuy}
                </label>
              </div>
              <div>
                <h3>Payment Methode :</h3>
                <label>
                  COD
                  <input
                    onClick={(e) => onchangeHandler(e)}
                    type="radio"
                    name="payment"
                    value='cod'
                  />
                </label>
                <label>
                  UPI
                  <input
                    onClick={(e) => onchangeHandler(e)}
                    type="radio"
                    name="payment"
                    value='upi'
                  />
                </label>
                <label>
                  ATM
                  <input
                    onClick={(e) => onchangeHandler(e)}
                    type="radio"
                    name="payment"
                    value='atm'
                  />
                </label>
              </div>

              <div>
                <button
                  type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <h3 onClick={closeuserForm} className="userform-close">
            Close
          </h3>
        </div>
      </div>
    </section>
  );
}

export default UseForm;
