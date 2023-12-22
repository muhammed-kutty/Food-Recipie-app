import React from "react"
import { useState , useEffect} from 'react'
import Loader from "../Loader/Loader"


export const AllMenuContext = React.createContext()

export const AllMenus= (props)=>{
    
    let [menu,setMenu]=useState([])
    let [loading,setLoading] = useState(false)

    async function getdata(){
        setLoading(true)
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let responce = await fetch(API_URL)
        let data = await responce.json()
        setMenu(data.meals)
        setLoading(false)
    }

    useEffect( ()=>{
        getdata();
    },[])

    return(

      <AllMenuContext.Provider value={menu}>
        
        {!loading ? props.children : <Loader/>}

      </AllMenuContext.Provider>   
    )
}

