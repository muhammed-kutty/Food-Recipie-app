import React from 'react'
import { useContext } from 'react'
import { AllMenuContext } from '../context/AllMenuContext'
import { DispatchContext } from '../../context/AppProvider'





function PopUp({ closepopupHandler, popupItems, singleDish }) {

    const allmenuContext = useContext(AllMenuContext)
    const dispatch = useContext(DispatchContext)

    let popupDishes = allmenuContext.filter((item) => {
        return (
            item.strMeal === popupItems
        )
    }).map((item, index) => {
        return (
            <div key={index} className='popup-content-data'>
                <div className="popup-header">
                    <img src={item.strMealThumb} alt="" />
                    <h5 className='popup-header-category'>{item.strCategory}</h5>
                </div>
                <h2>{item.strMeal}</h2>
                <p>{item.strInstructions}</p>


                <ul className='dish-ingredients flex'>
                    <li>{item.strIngredient1}</li>
                    <li>{item.strIngredient2}</li>
                    <li>{item.strIngredient3}</li>
                    <li>{item.strIngredient4}</li>
                </ul>
                <h2>Rs:- 299/-</h2>
                <button onClick={() => {
                    dispatch(
                        {
                            type: "Add to Cart",
                            payload: {
                                id: item.idMeal,
                                title: item.strMeal,
                                img: item.strMealThumb,
                                qty: 1 ,
                                price : 299,
                                totalprice: 299,
                            }
                        })
                        closepopupHandler()

                }
                }>Order Now</button>
                <h5 className='popup-close' onClick={closepopupHandler}>Close</h5>

            </div>
        )
    })
    return (
        <div className='popup'>
            <div className="popup-content">
                {popupDishes}

            </div>
        </div>
    )
}

export default PopUp