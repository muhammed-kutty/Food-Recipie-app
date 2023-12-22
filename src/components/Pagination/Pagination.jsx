import React from 'react'

function Pagination({ filterdDishes , itemsperPage , currentPage , setCurrentPage}) {

    let numberofPages=[]

    for(let i=1; i<=Math.ceil(filterdDishes.length/itemsperPage); i++){
        numberofPages.push(i)
        
    }

    function currentpageseter(event){
        let currentPage = event
        setCurrentPage(currentPage)
        
    }
    
    let page= numberofPages.map((pageNumber , index)=>{
        return(
            <li key={index} id={pageNumber} onClick={(e)=>currentpageseter(e.target.id , pageNumber )} className={index === currentPage-1 ? "active" : ""}>
                
                    {pageNumber}
                
            </li>
        )
    })

  return (
    <section>
    
              <ul className='pagination flex'>
                  {page}
              </ul>
            
        
    </section>

  )
}

export default Pagination