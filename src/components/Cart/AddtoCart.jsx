import { useContext } from "react"
import React   from 'react'
import { StateContext} from '../../context/AppProvider'
import {DispatchContext} from '../../context/AppProvider'
import {Link} from 'react-router-dom'
 
const AddtoCart = ({cartitems , deletCartItem})=>{
  
    const Cartpakages = useContext(StateContext)
    const dispatch = useContext(DispatchContext)

    let cartpakageAre = Cartpakages.cartItems.map((item , index)=>{
        return(
            <div  key={index}>
                <h5>{item.title}</h5>
                <img src={item.img} alt="" />
                <h1 className="add-t-cart-item-delete-h1" onClick={
                    
                    ()=>{
                    dispatch({
                        type : "delete cart item",
                        payload: {
                            id: item.id,
                        }
                    })
                }
                }>Delete</h1>
                <h2>Rs:- {item.price}</h2>
                <h1 className="add-t-cart-item-delete-h1"><Link to='/chekout'>CheckOut</Link></h1>
            </div>
        )
    })
       
    return(
        <div  className="add-to-cart-wrappr">
            <div className="container">
            <div className="add-t-cart-item">
             <h4>Your Cart</h4>
              {cartpakageAre}
            </div>
            </div>
        </div>
            
    )
}


export default AddtoCart

