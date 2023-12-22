import React from 'react'

function CardDish(props) {

    let spclMenu= props.menuitem
    
  return (
    <li key={props.index}>
        <a href="#:;" onClick={()=>props.showPopupHandler(spclMenu.strMeal)}>
            <img  src={spclMenu.strMealThumb} alt=""  className='br'/> 
            <h5>{spclMenu.strMeal}</h5>
        </a>
    </li>
  )
}

export default CardDish