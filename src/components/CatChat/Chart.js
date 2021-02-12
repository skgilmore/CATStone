// import React, { Component, useState , useContext,useEffect} from 'react'
import React, { useContext, useEffect, useState,Component } from "react"
import {Doughnut} from 'react-chartjs-2'
import { CatContext } from '../Cats/CatsProvider'

    
    export  const PieChart = ({ cat }) => {
        const { cats, getCats} = useContext(CatContext)
      const [adoptedCatsState, setAdoptedCats] = useState({})
      const [unAdoptedCatsState, setUnAdoptedCats] = useState({})
    //   const [cat, setCat] = useState({})
    

    
    useEffect(()  => {
        getCats()
        
    }, [])

    useEffect(()  => {
        const filteredAdoptedCats = cats.filter(cat => cat.userId !== null)
        setAdoptedCats(filteredAdoptedCats)
        const filteredCats = cats.filter(cat => cat.userId === null)
        setUnAdoptedCats(filteredCats)
        console.log(filteredCats,"filteredCats")
        console.log(filteredAdoptedCats,"filteredAdoptedCats")
    }, [cats])

//     let adoptedNumber = adoptedCatsState.length
    
//    let unAdoptedNumber = unAdoptedCatsState.length


//    console.log(adoptedNumber,"adopt cat length")
//    console.log(unAdoptedNumber,"homlesscats")
   return (
    //  <Doughnut = () => {
        // animationEnabled: true,
    
        <div>
            <Doughnut
 data= {{
     text:  "Seeing these guys get adopted is Mew-sic to my ears!",
     
     labels:['Adopted','UnAdopted'],
     
     datasets:[
         {
             label:"# of adopted Cats",
             data: [adoptedCatsState.length,unAdoptedCatsState.length,],
             backgroundColor:[
                 'rgba(87, 163, 83)',
                 'rgba(145, 55, 55)',
                ],
                borderWidth:1 
            },
            
            
        ]
    }
    }
    height={400}
    width={600}
    
    options ={{
        animationEnabled: true,
        maintainAspectRatio: false,
        title: {
            display: true,
                       text: "So many strays... Fur-Real?!",
        },
        }
    }


    />
    </div>

    )
}
  