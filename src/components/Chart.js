// // import React, { Component, useState , useContext,useEffect} from 'react'
// import React, { useContext, useEffect, useState,Component } from "react"
// import {Doughnut} from 'react-chartjs-2'
// import { CatContext } from './Cats/CatsProvider'

// // export const PieChart = () => {
    
//     export  const PieChart = () => {
//         const { cat, getCats} = useContext(CatContext)
//       const [adoptedCatsState, setAdoptedCats] = useState({})
//     let adoptedCats = [];
//     let unadoptedCats =[]; 



//     useEffect(() => {
//         getCats()
//         .then(cat => {
//             console.log(cat,"what you got?")
//                 if (cat.userId === null) {
//                     unadoptedCats.push(cat)
//                 }
//                 else{
//                     adoptedCats.push(cat)
//                 }
//                     return (
//                     setAdoptedCats({
//                         //  <div>
//                         //  <Doughnut
//                         type: 'doughnut',
//                          labels: adoptedCats,
//                          datasets: [{
//                             label: '# of adopted Cats',
//                             data: adoptedCats,
//                             backgroundColor: [
//                                 'rgba (54,162,235,0.2)',
//                                 'rgba(255, 99, 132, 02)',
                
//                             ],  
//                             borderWidth:1,
//                          }]
                
                
//                          height={400}
//                          width={600}
//                          />
//                          </div>
                
                
//                     })
//                 }
//                     )
                
                
//             }, [])
            
//         }
//     )}







    