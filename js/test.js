
// const carModel = document.getElementById("carModel");
// const carColor = document.getElementById("carColor");
// const car_case = document.getElementById("car-case");
// const btn = document.getElementById("btn");
// const tbody = document.getElementById("tbody");

// const allCars=[]

// btn.onclick = function(){
//    let newCar={
//         model:carModel.value,
//         Color:carColor.value,
//         carCase:car_case.value,
//     }
//     if(carModel.value !="" && carColor.value !=""){
//         allCars.push(newCar)
//     }else{
//         alert('complete data')
//     }
//     showdata();
// }
// function showdata(){
//     let table='';
//     allCars.forEach((car,index) => {
//         table +=generatAllCarsTable(car,index)
        
//     });
//     tbody.innerHTML=table;
// }
    
//     function generatAllCarsTable(car,index){  
  
//         return  `
//         <tr>
//         <th>${index +1}</th>
//         <th >${car.model}</th>   
//         <th>${car.color}</th>
//         <th>${car.carCase}</th>
//       </tr>
//         `
      
//       }
//       // add here afunction to give the first <th>${index+1}</th>
//       // abackgroundColor.
//       // if the carCase ='' ===>> background(blue)
//       // if the carCase ='sold' ===>> background(green)
//       // if the carCase ='trans' ===>> background(yellow)
//       //__________________________________________________________________
//       // done>>>>>>>>>>>>>>>>>>>
//       const carModel = document.getElementById("carModel");
// const carColor = document.getElementById("carColor");
// const car_case = document.getElementById("car-case");
// const btn = document.getElementById("btn");
// const tbody = document.getElementById("tbody");

// const allCars = [];

// btn.onclick = function () {
//   let newCar = {
//     model: carModel.value,
//     color: carColor.value,
//     carCase: car_case.value,
//   };
//   if (carModel.value !== "" && carColor.value !== "") {
//     allCars.push(newCar);
//   } else {
//     alert("Complete all data");
//   }
//   showData();
// };

// function showData() {
//   let table = "";
//   allCars.forEach((car, index) => {
//     table += generateAllCarsTable(car, index);
//   });
//   tbody.innerHTML = table;
// }

// function generateAllCarsTable(car, index) {
//   let backgroundColor = "";
//   if (car.carCase === "") {
//     backgroundColor = "blue";
//   } else if (car.carCase === "sold") {
//     backgroundColor = "green";
//   } else if (car.carCase === "trans") {
//     backgroundColor = "yellow";
//   }

//   return `
//     <tr>
//       <th style="background-color: ${backgroundColor};">${index + 1}</th>
//       <th>${car.model}</th>   
//       <th>${car.color}</th>
//       <th>${car.carCase}</th>
//     </tr>
//   `;
// }
