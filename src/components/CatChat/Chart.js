// // import React, { Component, useState , useContext,useEffect} from 'react'
// import React, { useContext, useEffect, useState,Component } from "react"
// // import {Doughnut} from 'react-chartjs-2'
// import { CatContext } from '../Cats/CatsProvider'
// import {Doughnut} from 'Canvas.js'

    
//     export  const PieChart = ({ cat }) => {
//         const { cats, getCats} = useContext(CatContext)
//       const [adoptedCatsState, setAdoptedCats] = useState({})
//       const [unAdoptedCatsState, setUnAdoptedCats] = useState({})
    
//     let adoptedCats = [];
//     let unadoptedCats =[]; 

//     window.onload = function () {
   
//     useEffect(()  => {
//         const filteredCats = cats.filter(cat => cat.userId === null)
//         setUnAdoptedCats(filteredCats)
//     console.log(filteredCats,"filteredCats")
//       }, [cats]
//       )
//       useEffect(()  => {
//         const filteredAdoptedCats = cats.filter(cat => cat.userId !== null)
//         setAdoptedCats(filteredAdoptedCats)
//     console.log(filteredAdoptedCats,"filteredAdoptedCats")
//       }, [cats]
//       )
//       var chart = new CanvasJS.Chart("chartContainer", {
//         animationEnabled: true,
//         title:{
//             text: "Adopt Today!",
//             horizontalAlign: "left"
//         },
//      data:[{
//          type: "doughnut",
//          startAngle: 60,
//          indexLabelFontSize: 17,
//          indexLabel: "{label} - #percent%",
//          toolTipContent: "<b>{label}:</b> {y} (#percent%)",
//          dataPoints:[
//              {  adoptedCatsState },
//              { unAdoptedCatsState}
//          ]
//         }]
//     });
// }}
//     // return (
    
//     //     chart.render()
//     // </script>
//     // </head>
//     // <body>
//     // <div id="chartContainer" style="height: 300px; width: 100%;"></div>
//     // <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
//     // </body>
//     // </html>
//     // )}