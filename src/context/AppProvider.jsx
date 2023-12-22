import React, {useReducer} from 'react'
import { createContext } from 'react'

const DispatchContext = createContext()
const StateContext = createContext()

function AppProvider({children}) {
    
    const initialState ={
        cartItems : [],
        orderItem :[],
    }

    const reducer = (state , action) => {


    
            switch (action.type){
                case 'Add to Cart' :
                    let cartDuplicateFinder = state.cartItems.findIndex((item)=>action.payload.id === item.id); 
                   
                    if(cartDuplicateFinder >= 0){
                        alert('item Alredy added');
                        return state
                    }else{
                        return {...state , cartItems: [...state.cartItems, action.payload]}
                    }
                   case "delete cart item" :
                    return {
                        ...state,cartItems: state.cartItems.filter((item)=>item.id !== action.payload.id )
                    }
                    case 'add-qty':
                        return {
                            ...state,cartItems:state.cartItems.map((item)=>
                            item.id === action.payload.id ? ({...item,qty:item.qty+1,totalprice:item.totalprice+item.price}):item
                        )
                    }
                    case 'minus-qty':
                        return {
                            ...state,cartItems:state.cartItems.map((item)=>
                            item.id === action.payload.id ? ({...item,qty:item.qty-1,totalprice:item.totalprice-item.price}):item
                        )
                    }
                    case 'order-summit':                        
                        state.orderItem = [ ...state.orderItem , action.payload ] 
                        return(
                           {  ...state,cartItems: state.cartItems.filter((item)=>item.id !== action.payload.id )}  
                      ) 
                   

                    default: {
                        return state
                    }
                    
                }
                
           }

    let [state , dispatch] = useReducer(reducer ,initialState)
   

  return (
    <DispatchContext.Provider value={dispatch} >
        <StateContext.Provider value={state} key={state.id}>
            {children}
        </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export {AppProvider , DispatchContext , StateContext}