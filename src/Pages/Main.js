import React from 'react'
import FilterdDishes from '../components/Postes/FilterdDishes'
import {AllMenus} from '../components/context/AllMenuContext'
import SpecialDishesh from '../components/Postes/SpecialDishesh'


function Main() {
  return (
    <div>
        <AllMenus >
                <SpecialDishesh />
                <FilterdDishes />
        </AllMenus>
    </div>
  )
}

export default Main