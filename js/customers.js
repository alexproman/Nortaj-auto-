// //---------------------------------------------------------------------------------------------------
// //---------------------------------------------------------------------------------------------------
// //--------------------------          customer data section      ------------------------------------
// //---------------------------------------------------------------------------------------------------
// //---------------------------------------------------------------------------------------------------

// const CustomerName = document.getElementById('customer-name');
// const phoneNum = document.getElementById('phone-num');
// const bookedCar = document.getElementById('booked-car');
// const bookingDate = document.getElementById('booking-date');
// const custmTbody = document.getElementById('custm-tbody');

// const addCostumerBtn = document.getElementById('new-cstm-btn');

// let allCustomers = JSON.parse(localStorage.getItem("Customer")) || [];

// addCostumerBtn.onclick = function(){
//   let Customer ={
//     CustomerName:CustomerName.value.toLowerCase(),
//     phoneNum:phoneNum.value.toLowerCase(),
//     bookedCar:bookedCar.value.toLowerCase(),
//     bookingDate:bookingDate.value.toLowerCase(),
//   }
//   if(CustomerName.value!=''&&phoneNum.value!=''&&bookedCar.value!=''&&bookingDate.value!=''){
//     if(custMood === 'addNew'){
//       allCustomers.push(Customer)
//     }else{
//       allCustomers[custTemp]=Customer;
//       custMood='addNew';
//       addCostumerBtn.innerHTML='New Customer';
//     }

//   }else{
//     completAlert.classList.add('active')
//   }
//   clearData();
//   showCustomers();
//   localStorage.setItem('Customer',JSON.stringify(allCustomers))
//   console.log(allCustomers);

// }
// const customerCount = document.getElementById("customerCount");

// function showCustomers(){
//   let CustomerTable='';
//   let custmCount=0;
//   allCustomers.forEach((customer,index)=>{
//     custmCount = index+1 ;
//     CustomerTable +=`
//     <tr>
//       <th>${index + 1}</th>
//       <th>${customer.CustomerName}</th>
//       <th>${customer.phoneNum}</th>
//       <th>${customer.bookedCar}</th>
//       <th>${customer.bookingDate}</th>
//       <th><button class="btn btn-style" onclick="updatateCust(${index})">update</button></th>
//       <th><button class="btn btn-style confirm-delet" onclick="deletCustomer(${index})">delete</button></th>
//     </tr>
    
//     `
//   })

//   custmTbody.innerHTML=CustomerTable;
//   customerCount.innerHTML=`&nbsp;${custmCount}`;
// }
// showCustomers();

// // delete customer
// function deletCustomer(index){
//   allCustomers.splice(index,1);
//   localStorage.Customer = JSON.stringify(allCustomers);
//   showCustomers();

// }
// // update customer data

// let custMood='addNew';
// let custTemp;

// function updatateCust(index){
//   CustomerName.value = allCustomers[index].CustomerName;
//   phoneNum.value = allCustomers[index].phoneNum;
//   bookedCar.value = allCustomers[index].bookedCar;
//   bookingDate.value = allCustomers[index].bookingDate;
//   custMood='UpdateCust';
//   custTemp = index;
//   addCostumerBtn.innerHTML='Update';

// }
// //-------------------------------------------------------------------------- search customers ----------------------------------

// //1 - serach  in customer data by name or car model 

// const search_Cust_NC_input = document.getElementById('search-cust-nc-input')

// let searchCustMood='by Name'

// function getSearchCustMood(id){
//   if(id ==='search-by-name'){
//     searchCustMood='by Name'
//   }else{
//     searchCustMood='by Car'
//   }
//   search_Cust_NC_input.focus();
//   search_Cust_NC_input.placeholder = `Search ${searchCustMood}`
//   search_Cust_NC_input.value ='';
//   showCustomers();
// }

// function searchCust_NC(value){
//   let CustomerTable='';
//   if(searchCustMood ==='by Name'){
//     allCustomers.forEach((customer,index)=>{
//       if(customer.CustomerName.includes(value)){
//         CustomerTable +=
//         `
//         <tr>
//         <th>${index + 1}</th>
//         <th>${customer.CustomerName}</th>
//         <th>${customer.phoneNum}</th>
//         <th>${customer.bookedCar}</th>
//         <th>${customer.bookingDate}</th>
//         <th><button class="btn btn-style" onclick="updatateCust(${index})">update</button></th>
//         <th><button class="btn btn-style confirm-delet" onclick="deletCustomer(${index})">delete</button></th>
//       </tr>
//         `
//       }
//     })
//   }else{
//     allCustomers.forEach((customer,index)=>{
//       if(customer.bookedCar.includes(value)){
//         CustomerTable +=
//         `
//         <tr>
//         <th>${index + 1}</th>
//         <th>${customer.CustomerName}</th>
//         <th>${customer.phoneNum}</th>
//         <th>${customer.bookedCar}</th>
//         <th>${customer.bookingDate}</th>
//         <th><button class="btn btn-style" onclick="updatateCust(${index})">update</button></th>
//         <th><button class="btn btn-style confirm-delet" onclick="deletCustomer(${index})">delete</button></th>
//       </tr>
//         `
//       }
//     })

//   }
//   custmTbody.innerHTML=CustomerTable;
// }
// //---------------- search by date

// // Function to search products between two dates

// const startDate = document.getElementById('from-date');
// const endDate = document.getElementById('to-date');
// function searchBetweenDates() {

//   let CustomerTable='';
//   allCustomers.forEach((customer,index)=>{
//     if(startDate.value !='' && endDate.value !=''){
//       if (customer.bookingDate >= startDate.value && customer.bookingDate <= endDate.value){
//         CustomerTable +=
//         `
//           <tr>
//           <th>${index + 1}</th>
//           <th>${customer.CustomerName}</th>
//           <th>${customer.phoneNum}</th>
//           <th>${customer.bookedCar}</th>
//           <th>${customer.bookingDate}</th>
//           <th><button class="btn btn-style" onclick="updatateCust(${index})">update</button></th>
//           <th><button class="btn btn-style confirm-delet" onclick="deletCustomer(${index})">delete</button></th>
//         </tr>
//           `
//       }

//     }else{
//       CustomerTable +=
//       `
//           <tr>
//           <th>${index + 1}</th>
//           <th>${customer.CustomerName}</th>
//           <th>${customer.phoneNum}</th>
//           <th>${customer.bookedCar}</th>
//           <th>${customer.bookingDate}</th>
//           <th><button class="btn btn-style" onclick="updatateCust(${index})">update</button></th>
//           <th><button class="btn btn-style confirm-delet" onclick="deletCustomer(${index})">delete</button></th>
//         </tr>
//           `

//     }
    
//   }
// )
// startDate.value ='';
// endDate.value ='';
//   custmTbody.innerHTML=CustomerTable;

// }