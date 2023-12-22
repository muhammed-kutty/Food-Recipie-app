import React, {useContext} from 'react'
import { StateContext} from '../../context/AppProvider'

function Orders() {

    const ordereitem = useContext(StateContext)

    let orderpackage = ordereitem.orderItem.map((item , index)=>{
      return(
        <div key={index}>
           <h3>Order No:- {index+1}</h3><br />
           <h2>{item.title}</h2><br />
           <img src={item.img} alt="" /><br />
           <h2>Name: {item.name}</h2><br />
           <h2>Phone: {item.phone}</h2><br />
           <h2>Address: {item.address}</h2><br />
           <h2>pincode: {item.pincode}</h2><br />
           <h2>Quantity :- {item.qty}</h2><br />
           <h2>Tottal price:- {item.totalprice}</h2><br />
           <h2>Payment Methode:- {item.payment} </h2> <hr />


        </div>
      )
    })

  return (
    <section>
      <div className="container">
        <div className="order">
          <div className="order-item">
           <h1>Order Summary</h1>
           {orderpackage}
           
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Orders