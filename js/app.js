// function toggle active span on every list of sections ---------->>
const listItems = document.querySelectorAll(".list");
const spans = document.querySelectorAll(".spanList");

const sections = document.querySelectorAll(".section");
const mainTitle = document.querySelector(".new-car h2");
const addNewCar = document.querySelector(".new-car");
const carsAtShowroom = document.querySelector(".cars-at-showroom");
const soldCars = document.querySelector(".sold-cars");
const transferCars = document.querySelector(".transfer-cars");
const searchSection = document.querySelector(".search-section");


// active spans function

listItems.forEach((li) => {
  li.addEventListener("click", (event) => {
    listItems.forEach((item) => {
      item.querySelector(".spanList").classList.remove("active");
    });

    const clickedSpan = event.currentTarget.querySelector(".spanList");
    clickedSpan.classList.add("active");
  });
});

// animate active section function

listItems.forEach((item, index) => {
  item.addEventListener('click', function () {
    sections.forEach((section, secIndex) => {
      if (secIndex === parseInt(index)) {
        section.style.transform = 'translateY(0)';
        section.style.transition = '1s ease'
      } else {
        section.style.transform = 'translateY(-150%)';
        section.style.transition = '1s ease'
      }
    });
  });
});

//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//--------------------------          new Car section      --------------------------------------
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

const carType = document.getElementById("carType");
const carClass = document.getElementById("carClass");
const carModel = document.getElementById("carModel");
const carColor = document.getElementById("carColor");
const Chassis_No = document.getElementById("Chassis_No");
const Kilometer = document.getElementById("Kilometer");
const EntryDate = document.getElementById("Entry-date");
const EntryTime = document.getElementById("Entry-time");
const winchNumber = document.getElementById("winch_number");
const winchDriver = document.getElementById("winch_driver");
const cameFrom = document.getElementById("came-from");
const accessories = document.getElementById("accessories");
const Notes = document.getElementById("Notes");
//new car table
const NewCarTable = document.getElementById("new-car-tbody");
//sold cat table
const soldCarTable = document.getElementById("sold-cars-tbody");
//trans table
const transCarTable = document.getElementById("trans-tbody");


// add a new car button "save"
const saveBtn = document.getElementById("save-btn");
// ---------------------------------------------------------

// -----------------Exit variables---------------------------
const exit_Date = document.getElementById("exit-date");
const exit_Time = document.getElementById("Exit-time");
const premit_Num = document.getElementById("premit_number");
const customer_Name = document.getElementById("custm_name");
const sales = document.getElementById("sales-name");
const car_case = document.getElementById("car-case");
const branch = document.getElementById("branch");
// ---------------------------------------------------------
// download tables
const downNewTbody = document.getElementById('downNewTbody');
const downSoldTbody = document.getElementById('downSoldTbody');
const downTransTbody = document.getElementById('downTransTbody');
let downloadMood = 'all'

// showroom data creat --------------
//1- creat array
//2- craet function when click the button
//3- in the function creat opject contain every data value fron inputs
//4- push opject to the array
//5- save data in the array inside localstorage
//6-show cpunt of cars in showroom
const showroomcount = document.getElementById("count");
const soldCount = document.getElementById("soldCount");
const transCount = document.getElementById("transCount");

let showroomCars = JSON.parse(localStorage.getItem("newCar")) || [];
let allSoldCars = JSON.parse(localStorage.getItem("SoldCar")) || [];
let allTransCars = JSON.parse(localStorage.getItem("transCar")) || [];
let allCars = showroomCars.concat(allSoldCars, allTransCars)


saveBtn.onclick = function () {
  let newCar = {
    Type: carType.value,
    Class: carClass.value,
    model: carModel.value.toLowerCase(),
    color: carColor.value.toLowerCase(),
    Chassis: Chassis_No.value.toLowerCase(),
    Kilometer: Kilometer.value,
    EntryDate: EntryDate.value,
    EntryTime: EntryTime.value,
    winchNumber: winchNumber.value.toLowerCase(),
    winchDriver: winchDriver.value.toLowerCase(),
    CameFrom: cameFrom.value.toLowerCase(),
    accessories: accessories.value.toLowerCase(),
    Notes: Notes.value.toLowerCase(),
    //------- exite data---------
    ExitDate: exit_Date.value,
    exitTime: exit_Time.value,
    premitNum: premit_Num.value,
    customerName: customer_Name.value.toLowerCase(),
    sales: sales.value.toLowerCase(),
    carCase: car_case.value,
    branch: branch.value.toLowerCase(),
  };

  if (carModel.value != ''
    && carColor.value != ''
    && Chassis_No.value != ''
    && Kilometer.value != ''
    && EntryDate.value != '') {
    if (mood === 'save') {
      showroomCars.push(newCar);
      allCars.push(newCar)

    } else if (mood === 'Sold') {
      if (exit_Date.value != '' && premit_Num.value != '' && customer_Name.value != '' && car_case.value != '') {
        allSoldCars.push(newCar);
        showroomCars.splice(tempSold, 1);
        carsAtShowroom.style.transform = "translateY(0%)";
        soldCars.style.transform = "translateY(-150%)";
      } else {
        completAlert.classList.add('active')
        displaySoldInputs();
      }
    } else if (mood === 'trans') {
      if (exit_Date.value != '' && premit_Num.value != '' && branch.value != '' && car_case.value != '') {
        allTransCars.push(newCar);
        showroomCars.splice(temptrans, 1);
        carsAtShowroom.style.transform = "translateY(0%)";
        transferCars.style.transform = "translateY(-150%)";
      } else {
        completAlert.classList.add('active')
        displaytransInputs();
      }
    }
    else {
      showroomCars[updatetemp] = newCar;
      mood = 'save';
      saveBtn.innerHTML = 'Save';
      saveBtn.classList.remove('sold-btn');


    }
    clearData();
    mainTitle.innerHTML = 'Add a New Car'
    addNewCar.style.transform = "translateY(-150%)";
    carsAtShowroom.style.transform = "translateY(0%)";
    secndInp.style.transform = "translateX(100%)";
    exitForm.style.transform = "translateX(150%)";
  } else {
    completAlert.classList.add('active')
  }


  localStorage.setItem("newCar", JSON.stringify(showroomCars));
  localStorage.setItem("SoldCar", JSON.stringify(allSoldCars));
  localStorage.setItem("transCar", JSON.stringify(allTransCars));
  localStorage.setItem("allCars", JSON.stringify(allCars));

  showCars();
  showSoldCars();
  showTransCars();
  showAllCars();


};
// alert to copmlet data feilds -----------------------
const completAlert = document.querySelector('.alertComplet-msg');
const alertComplet_btn = document.querySelector('.alertComplet-btn');

alertComplet_btn.onclick = () => {
  completAlert.classList.remove('active');
}

// cleat inputs--------------------------------

//1- creat function tho clear data in the inputs
// and call it insid main function

function clearData() {
  carType.value = "";
  carClass.value = "";
  carModel.value = "";
  carColor.value = "";
  Chassis_No.value = "";
  Kilometer.value = "";
  EntryDate.value = "";
  EntryTime.value = "";
  winchNumber.value = "";
  winchDriver.value = "";
  cameFrom.value = "";
  accessories.value = "";
  Notes.value = "";
  //------------
  exit_Date.value = "";
  exit_Time.value = "";
  premit_Num.value = "";
  customer_Name.value = "";
  sales.value = "";
  car_case.value = "";
  branch.value = "";
  //-----------
}

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//--------------------------          generate Tables functions      --------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

function generatShowTable(car, index) {
  return `
  <tr>
    <th class="new-index">${index + 1}</th>
    <th>
     <div class="allentryData">
          <div class="warning">
            <h3>warning !!</h3>
            <p>You will lose this Data Forever !!</p>
            <div>
              <button class="btn btn-style confirm-delet"onclick="deleteData(${index})">Delete</button>
              <button class="btn btn-style cancel-delet" onclick="cancelDelete(${index})">Cancel</button>
            </div>
          </div>
          <div>
              <h5>type :&nbsp<span>${car.Type}</span></h5>
              <h5>class :&nbsp<span>${car.Class}</span></h5>
              <h5>model :&nbsp<span>${car.model}</span></h5>
              <h5>color :&nbsp<span>${car.color}</span></h5>
              <h5>chassis :&nbsp<span class="chasis-color">${car.Chassis}</span></h5>
              <h5>k.m :&nbsp<span>${car.Kilometer}</span></h5>
          </div>
          <div>
              <h5>entry-date :&nbsp<span>${car.EntryDate}</span></h5>
              <h5>entry-time :&nbsp<span>${car.EntryTime}</span></h5>
              <h5>winch no. :&nbsp<span>${car.winchNumber}</span></h5>
              <h5>winch driver :&nbsp<span>${car.winchDriver}</span></h5>
              <h5>came from :&nbsp<span>${car.CameFrom}</span></h5>
          </div>
          <div class="ditls-title">
              <h4><u>Accessories</u></h4>
              <p>${car.accessories}</p>
          </div>
          <div class="ditls-title">
              <h4><u>Notes</u></h4>
              <p>${car.Notes}</p>
          </div>

     </div>

    </th>
    <th>
      <div class="action-btns-container">
          <button class="btn btn-style sold-btn"onclick="displaySoldInputs(${index})">Sold</button>
          <button class="btn btn-style trans-btn" onclick="displaytransInputs(${index})">Transfer</button>
          <button class="btn btn-style "onclick="updateData(${index})">Update</button>
          <button class="btn btn-style confirm-delet" onclick="deleteWarning(${index})">Delete</button>
      </div>
    </th>
</tr>   
      `
}


function generateSoldTable(car, index) {
  return `
  <tr>
        <th class="sold-index">${index + 1}</th>
        <th>
            <div class="allentryData">
              <div class="warning warningSold">
                <h3>warning !!</h3>
                <p>You will lose this Data Forever !!</p>
                <div>
                  <button class="btn btn-style confirm-delet"onclick="deleteSoldCar(${index})">Delete</button>
                  <button class="btn btn-style cancel-delet" onclick="cancelSoldDelete(${index})">Cancel</button>
                </div>
              </div>
                <div>
                    <h5>type :&nbsp;<span>${car.Type}</span></h5>
                    <h5>class :&nbsp;<span>${car.Class}</span></h5>
                    <h5>model :&nbsp;<span>${car.model}</span></h5>
                    <h5>color :&nbsp;<span>${car.color}</span></h5>
                    <h5>chassis :&nbsp;<span class="chasis-color">${car.Chassis}</span></h5>
                    <h5>k.m :&nbsp;<span>${car.Kilometer}</span></h5>
                </div>
                <div>
                    <h5>entry-date :&nbsp;<span>${car.EntryDate}</span></h5>
                    <h5>entry-time :&nbsp;<span>${car.EntryTime}</span></h5>
                    <h5>winch no. :&nbsp;<span>${car.winchNumber}</span></h5>
                    <h5>winch driver :&nbsp;<span>${car.winchDriver}</span></h5>
                    <h5>came from :&nbsp;<span>${car.CameFrom}</span></h5>
                </div>
                <div>
                    <h5>Case :&nbsp;<span>${car.carCase}</span></h5>
                    <h5>Exit Date :&nbsp;<span>${car.ExitDate}</span></h5>
                    <h5>Premit No. :&nbsp;<span>${car.premitNum}</span></h5>
                    <h5>Customer :&nbsp;<span>${car.customerName}</span></h5>
                    <h5>Sales Name :&nbsp;<span>${car.sales}</span></h5>
                </div>

                <div class="ditls-title sold-trans-notes">
                    <div>
                        <h5><u>accessories</u></h5>
                        <small>${car.accessories}</small>
                    </div>
                    <div>
                        <h5><u>Notes</u></h5>
                        <small>${car.Notes}</small>
                    </div>
                </div>
            </div>
        </th>
        <th>
            <div class="action-btns-container">
                <button class="btn btn-style confirm-delet" onclick="deleteSoldWarning(${index})">Delete</button>
            </div>
        </th>
    </tr>
  `
}
function generatnewDownload(car, index) {
  return `
    <tr>
      <th>${index + 1}</th>
      <th>${car.Type}</th>
      <th>${car.Class}</th>
      <th>${car.model}</th>
      <th>${car.color}</th>
      <th>${car.Chassis}</th>
      <th>${car.Kilometer}</th>
      <th>${car.EntryDate}</th>
      <th>${car.EntryTime}</th>
      <th>${car.winchNumber}</th>
      <th>${car.winchDriver}</th>
      <th>${car.CameFrom}</th>
      <th>${car.accessories}</th>
      <th>${car.Notes}</th>
    </tr>
  `

}
function generat_S_T_Download(car, index, custbrnch_value) {
  return `
    <tbody>
    <tr>
      <th>${index + 1}</th>
      <th>${car.Type}</th>
      <th>${car.Class}</th>
      <th>${car.model}</th>
      <th>${car.color}</th>
      <th>${car.Chassis}</th>
      <th>${car.Kilometer}</th>
      <th>${car.EntryDate}</th>
      <th>${car.EntryTime}</th>
      <th>${car.winchNumber}</th>
      <th>${car.winchDriver}</th>
      <th>${car.CameFrom}</th>
      <th>${car.accessories}</th>
      <th>${car.Notes}</th>
      <th>${car.ExitDate}</th>
      <th>${car.premitNum}</th>
      <th>${custbrnch_value}</th>
      <th>${car.sales}</th>
    </tr>
  `

}
function generateTransTable(car, index) {
  return `
  <tr>
        <th  class="trans-index">${index + 1}</th>
        <th>
            <div class="allentryData">
              <div class="warning warningTrans">
                <h3>warning !!</h3>
                <p>You will lose this Data Forever !!</p>
                <div>
                  <button class="btn btn-style confirm-delet"onclick="deleteTransCar(${index})">Delete</button>
                  <button class="btn btn-style cancel-delet" onclick="canceltransDelete(${index})">Cancel</button>
                </div>
              </div>
                <div>
                    <h5>type :&nbsp;<span>${car.Type}</span></h5>
                    <h5>class :&nbsp;<span>${car.Class}</span></h5>
                    <h5>model :&nbsp;<span>${car.model}</span></h5>
                    <h5>color :&nbsp;<span>${car.color}</span></h5>
                    <h5>chassis :&nbsp;<span class="chasis-color">${car.Chassis}</span></h5>
                    <h5>k.m :&nbsp;<span>${car.Kilometer}</span></h5>
                </div>
                <div>
                    <h5>entry-date :&nbsp;<span>${car.EntryDate}</span></h5>
                    <h5>entry-time :&nbsp;<span>${car.EntryTime}</span></h5>
                    <h5>winch no. :&nbsp;<span>${car.winchNumber}</span></h5>
                    <h5>winch driver :&nbsp;<span>${car.winchDriver}</span></h5>
                    <h5>came from :&nbsp;<span>${car.CameFrom}</span></h5>
                </div>
                <div>
                    <h5>Case :&nbsp;<span>${car.carCase}</span></h5>
                    <h5>Exit Date :&nbsp;<span>${car.ExitDate}</span></h5>
                    <h5>Premit No. :&nbsp;<span>${car.premitNum}</span></h5>
                    <h5>Branch :&nbsp;<span>${car.branch}</span></h5>
                    <h5>Sales Name :&nbsp;<span>${car.sales}</span></h5>
                </div>

                <div class="ditls-title sold-trans-notes">
                    <div>
                        <h5><u>accessories</u></h5>
                        <small>${car.accessories}</small>
                    </div>
                    <div>
                        <h5><u>Notes</u></h5>
                        <small>${car.Notes}</small>
                    </div>
                </div>
            </div>
        </th>
        <th>
            <div class="action-btns-container">
                <button class="btn btn-style confirm-delet" onclick="deletetransWarning(${index})">Delete</button>
            </div>
        </th>
    </tr>
  `
}
function generatAllCarsTable(car, index) {
  let backgroundColor = "";
  if (car.carCase === "") {
    backgroundColor = "#3c6483";
  } else if (car.carCase === "sold") {
    backgroundColor = "#128541";
  } else if (car.carCase === "Transferred") {
    backgroundColor = "#978311";
  }
  return `
  <tr>
  <th class="all-table-th"style="background-color: ${backgroundColor};">${index + 1}</th>
  <th class="all-table-th"style="background-color: ${backgroundColor};">${car.model}</th>
  <th class="all-table-th all-chassis"style="background-color: ${backgroundColor};">${car.Chassis}</th>
  <th class="all-table-th"style="background-color: ${backgroundColor};">${car.color}</th>
  <th class="all-table-th"style="background-color: ${backgroundColor};">${car.EntryDate}</th>
  <th class="all-table-th"style="background-color: ${backgroundColor};">${car.CameFrom}</th>
  <th class="all-table-th"style="background-color: ${backgroundColor};">${car.ExitDate}</th>
  <th class="all-table-th"style="background-color: ${backgroundColor};">${car.premitNum}</th>
  <th class="all-table-th"style="background-color: ${backgroundColor};">${car.carCase}</th>
  <th class="all-table-th"style="background-color: ${backgroundColor};">${car.customerName}</th>
  <th class="all-table-th"style="background-color: ${backgroundColor};">${car.branch}</th>
</tr>
  `

}
// read data-----------------------

//1- creat function tho show data in the table
//2- and call it insid main function
//3-also call it in global to always show data
function showCars() {
  let Table = "";
  let newCarsDnldTB = "";
  let temp = 0;
  //make lope on all data in the array and add it in the table
  showroomCars.forEach((car, index) => {
    temp = index + 1;
    Table += generatShowTable(car, index)
    newCarsDnldTB += generatnewDownload(car, index)
  });

  NewCarTable.innerHTML = Table;
  downNewTbody.innerHTML = newCarsDnldTB;
  showroomcount.innerHTML = `&nbsp;${temp}`;
}
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------       Delet data functions and warning delete functions      ----------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
function deleteWarning(index) {
  const warning = document.querySelectorAll('.warning');
  warning.forEach((popup, x) => {
    if (x === index) {
      popup.style.transform = "translate(-50%,-50%)"
    } else {
      popup.style.transform = "translate(-250%,-50%)"
    }
  });
}
function deleteSoldWarning(index) {
  const warningSold = document.querySelectorAll('.warningSold');
  warningSold.forEach((popup, x) => {
    if (x === index) {
      popup.style.transform = "translate(-50%,-50%)"
    } else {
      popup.style.transform = "translate(-250%,-50%)"
    }
  });
}
function deletetransWarning(index) {
  const warningtrans = document.querySelectorAll('.warningTrans');
  warningtrans.forEach((popup, t) => {
    if (t === index) {
      popup.style.transform = "translate(-50%,-50%)"
    } else {
      popup.style.transform = "translate(-250%,-50%)"
    }
  });
}
// cancel delet---------------------------------------------------------->>
function cancelDelete(index) {
  const warning = document.querySelectorAll('.warning');
  warning.forEach((popup, c) => {
    if (c === index) {
      popup.style.transform = "translate(-250%,-50%)"
    }
  });
}
function cancelSoldDelete(index) {
  const warningSold = document.querySelectorAll('.warningSold');
  warningSold.forEach((popup, c) => {
    if (c === index) {
      popup.style.transform = "translate(-250%,-50%)"
    }
  });
}
function canceltransDelete(index) {
  const warningTrans = document.querySelectorAll('.warningTrans');
  warningTrans.forEach((popup, c) => {
    if (c === index) {
      popup.style.transform = "translate(-250%,-50%)"
    }
  });
}
function deleteData(index) {
  showroomCars.splice(index, 1);
  localStorage.newCar = JSON.stringify(showroomCars);
  showCars();
}
function deleteSoldCar(index) {
  allSoldCars.splice(index, 1);
  localStorage.SoldCar = JSON.stringify(allSoldCars);
  showSoldCars();

}
function deleteTransCar(index) {
  allTransCars.splice(index, 1);
  localStorage.transCar = JSON.stringify(allTransCars);
  showTransCars();

}
// cancel confirm sold =================================================>>
let resertMood = 'reset'

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
  if (resertMood == 'reset') {
    resetBtn.innerHTML = 'Reset';
  } else {
    mood = 'save'
    resertMood = 'reset'
    saveBtn.innerHTML = 'Save';
    saveBtn.classList.remove('confirm-sold', 'confirm-trans');
    resetBtn.innerHTML = 'Reset';
    mainTitle.innerHTML = 'Cars at showroom'
    // saveBtn.classList.remove('confirm-trans');
    resetBtn.classList.remove('cancel-sold');
    addNewCar.style.transform = "translateY(-150%)";
    carsAtShowroom.style.transform = "translateY(0%)";
    secndInp.style.transform = "translateX(100%)";
    exitForm.style.transform = "translateX(150%)";
  }
  clearData();

});

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//-------------------------------------       Update Data      --------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
// mode and temp variable
let mood = 'save';
let updatetemp;
function updateData(index) {
  carType.value = showroomCars[index].Type;
  carClass.value = showroomCars[index].Class;
  carModel.value = showroomCars[index].model;
  carColor.value = showroomCars[index].color;
  Chassis_No.value = showroomCars[index].Chassis;
  Kilometer.value = showroomCars[index].Kilometer;
  EntryDate.value = showroomCars[index].EntryDate;
  EntryTime.value = showroomCars[index].EntryTime;
  winchNumber.value = showroomCars[index].winchNumber;
  winchDriver.value = showroomCars[index].winchDriver;
  cameFrom.value = showroomCars[index].CameFrom;
  accessories.value = showroomCars[index].accessories;
  Notes.value = showroomCars[index].Notes;
  //____________________
  saveBtn.innerText = 'Update';
  mood = 'update';
  updatetemp = index;
  mainTitle.innerHTML = 'Update Car Data'
  addNewCar.style.transform = "translateY(0%)";
  carsAtShowroom.style.transform = "translateY(-150%)";


}
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//--------------------------          sold Car section      ---------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------


//  display sold car inputs-----------------

const secndInp = document.querySelector('.secnd-inp');
const exitForm = document.querySelector('.exit-form');
const branchDiv = document.querySelector('.Branch');
const customerDiv = document.querySelector('.customer-name');

let tempSold;
function displaySoldInputs(index) {
  showSoldTransInp(index)
  mainTitle.innerHTML = 'Confirm Sold'
  saveBtn.classList.add('confirm-sold');
  resetBtn.classList.add('cancel-sold');
  customerDiv.style.display = 'flex';
  branchDiv.style.display = 'none';
  mood = 'Sold';
  resertMood = 'cancel-sold'
  tempSold = index;
  //-----------
};
// confirm sold function========================================>>

function showSoldCars() {
  let soldTable = "";
  let s_T_dwnldTB = "";


  let sold_Count = 0;
  allSoldCars.forEach((car, index) => {
    let custbrnch_value = `${car.customerName}`
    sold_Count = index + 1;
    soldTable += generateSoldTable(car, index)
    s_T_dwnldTB += generat_S_T_Download(car, index, custbrnch_value)
  })

  soldCarTable.innerHTML = soldTable;
  downSoldTbody.innerHTML = s_T_dwnldTB;
  soldCount.innerHTML = `&nbsp;${sold_Count}`
  saveBtn.innerHTML = 'Save'
  saveBtn.classList.remove('confirm-sold');
  saveBtn.style.width = '90px';
  mood = 'save'
}
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//--------------------------          transfere Car section      ------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

let temptrans;
function displaytransInputs(index) {
  showSoldTransInp(index)
  mainTitle.innerHTML = 'Confirm Transfere'
  saveBtn.classList.add('confirm-trans');
  resetBtn.classList.add('cancel-trans');
  customerDiv.style.display = 'none';
  branchDiv.style.display = 'flex';
  mood = 'trans';
  resertMood = 'cancel-sold'
  temptrans = index;
  //-----------
};
function showSoldTransInp(index) {
  addNewCar.style.transform = "translateY(0%)";
  carsAtShowroom.style.transform = "translateY(-150%)";
  secndInp.style.transform = "translateX(0%)";
  exitForm.style.transform = "translateX(0%)";

  saveBtn.innerHTML = 'Confirm';
  resetBtn.innerHTML = 'Cancel';
  carType.value = showroomCars[index].Type;
  carClass.value = showroomCars[index].Class;
  carModel.value = showroomCars[index].model;
  carColor.value = showroomCars[index].color;
  Chassis_No.value = showroomCars[index].Chassis;
  Kilometer.value = showroomCars[index].Kilometer;
  EntryDate.value = showroomCars[index].EntryDate;
  EntryTime.value = showroomCars[index].EntryTime;
  winchNumber.value = showroomCars[index].winchNumber;
  winchDriver.value = showroomCars[index].winchDriver;
  cameFrom.value = showroomCars[index].CameFrom;
  accessories.value = showroomCars[index].accessories;
  Notes.value = showroomCars[index].Notes;

}

// show trans cars function----------------------------------------->>

function showTransCars() {
  let transTable = "";
  let s_T_dwnldTB = "";
  let trans_Count = 0;
  allTransCars.forEach((car, index) => {
    let custbrnch_value = `${car.branch}`
    trans_Count = index + 1;
    transTable += generateTransTable(car, index)
    s_T_dwnldTB += generat_S_T_Download(car, index, custbrnch_value)


  })
  transCarTable.innerHTML = transTable;
  downTransTbody.innerHTML = s_T_dwnldTB;
  transCount.innerHTML = `&nbsp;${trans_Count}`
  saveBtn.innerHTML = 'Save'
  saveBtn.classList.remove('confirm-trans');
  saveBtn.style.width = '90px';
  mood = 'save';

}
showCars();
showSoldCars();
showTransCars();

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//--------------------------          Search Car section      ---------------------------------------
//---------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 1- display and hide serach section
// 2- chang search mood 'show , sold , trans ' 
const searchShow = document.getElementById('searchShow');
const searchPopUp = document.querySelector('.search-popup');
const searchClose = document.querySelector('.search-icon-close')
const searchTitle = document.querySelector('.search-title')
const searchExitDate = document.querySelector('.Exit-search')
const socondryTitle = document.getElementById('socondry-title')
const name_model_branch_btn = document.getElementById('name-model-branch-btn')
const chassisNum_btn = document.getElementById('chassis-num-btn');
const searchInp = document.getElementById('search-inp');
let searchMood = 'show'
let search_inp_mood = ''


searchClose.addEventListener('click', () => {
  searchPopUp.classList.remove('active')
  searchInp.placeholder = 'Search'
  showCars();
  showSoldCars();
  showTransCars();
})

const searchHead_btn = document.querySelectorAll('.search-head');

searchHead_btn.forEach(btn => {
  btn.addEventListener('click', () => {
    searchPopUp.classList.toggle('active');
    searchInp.placeholder = 'Search';
    if (btn.id === 'searchShow') {
      searchMood = 'show';
      searchTitle.innerHTML = 'Showroom Cars'
      searchTitle.style.backgroundColor = '#637e91'
      searchExitDate.style.display = 'none'
      socondryTitle.innerHTML = ' Model'
      socondryTitle.style.color = '#637e91'
      name_model_branch_btn.innerText = 'Car Model'

    } else if (btn.id === 'searchSold') {
      searchMood = 'sold';
      searchTitle.innerHTML = 'Sold Cars'
      searchTitle.style.backgroundColor = '#128541'
      searchExitDate.style.display = 'flex'
      socondryTitle.innerHTML = ' Name'
      socondryTitle.style.color = '#128541'
      name_model_branch_btn.innerHTML = 'Customer'

    } else if (btn.id === 'searchTrans') {
      searchMood = 'trans';
      searchTitle.innerHTML = 'Transferred Cars'
      searchTitle.style.backgroundColor = '#978311'
      searchExitDate.style.display = 'flex'
      socondryTitle.innerHTML = ' Branch'
      socondryTitle.style.color = '#978311'
      name_model_branch_btn.innerHTML = 'Branch'

    } else {
      searchMood = 'all';
      searchTitle.innerHTML = 'All Cars'
      searchTitle.style.backgroundColor = '#b33030'
      searchExitDate.style.display = 'flex'
      socondryTitle.innerHTML = ' Name/Branch'
      socondryTitle.style.color = '#b33030'
      name_model_branch_btn.innerHTML = 'Name/Branch'
    }

  })

})
//-------------------------------------------------------------------
// mood of search input 

function getSearchInpMood(id) {

  if (id === 'chassis-num-btn') {
    search_inp_mood = 'by Chassis';
  } else if (id === 'name-model-branch-btn' && searchMood === 'show') {
    search_inp_mood = 'by Model';
  } else if (id === 'name-model-branch-btn' && searchMood === 'sold') {
    search_inp_mood = 'by Customer Name';
  } else if (id === 'name-model-branch-btn' && searchMood === 'trans') {
    search_inp_mood = 'by Branch';
  } else {
    search_inp_mood = 'All by Name OR Branch';

  }
  searchInp.placeholder = `Search ${search_inp_mood}`
  searchInp.value = '';
}
//------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//----------------------      Search By Search input Value      ------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

function searchByInpValue(value) {
  value = value.toLowerCase();
  let showTable = '';
  let soldTable = '';
  let transTable = '';
  let newCarsDnldTB = '';
  let soldDownload = '';
  let transDownload = '';

  let allTable = '';
  if (searchMood === 'show') {
    if (search_inp_mood === 'by Chassis') {
      showroomCars.forEach((car, index) => {
        if (car.Chassis.includes(value)) {
          showTable += generatShowTable(car, index)
          newCarsDnldTB += generatnewDownload(car, index)
        }

      })

    } else if (search_inp_mood === 'by Model') {
      showroomCars.forEach((car, index) => {
        if (car.model.includes(value)) {
          showTable += generatShowTable(car, index)
          newCarsDnldTB += generatnewDownload(car, index)
        }
      })
    }

  } else if (searchMood === 'sold') {
    if (search_inp_mood === 'by Chassis') {
      allSoldCars.forEach((car, index) => {
        if (car.Chassis.includes(value)) {
          soldTable += generateSoldTable(car, index)
          soldDownload += generat_S_T_Download(car, index)
        }
      })
    } else if (search_inp_mood === 'by Customer') {
      allSoldCars.forEach((car, index) => {
        if (car.customerName.includes(value)) {
          soldTable += generateSoldTable(car, index)
          soldDownload += generat_S_T_Download(car, index )
        }
      })
    }

  } else if (searchMood === 'trans') {
    if (search_inp_mood === 'by Chassis') {
      allTransCars.forEach((car, index) => {
        if (car.Chassis.includes(value)) {
          transTable += generateTransTable(car, index)
          transDownload += generat_S_T_Download(car, index)
        }
      })
    } else if (search_inp_mood === 'by Branch') {
      allTransCars.forEach((car, index) => {
        if (car.branch.includes(value)) {
          transTable += generateTransTable(car, index)
          transDownload += generat_S_T_Download(car, index)
        }

      })
    }
  } else {
    if (search_inp_mood === 'by Chassis') {
      allCars.forEach((car, index) => {
        if (car.Chassis.includes(value)) {
          allTable += generatAllCarsTable(car, index)
        }
      })

    } else {
      allCars.forEach((car, index) => {
        if (car.customerName.includes(value) || car.branch.includes(value)) {
          allTable += generatAllCarsTable(car, index)
        }
      })
    }

  }
  NewCarTable.innerHTML = showTable;
  soldCarTable.innerHTML = soldTable;
  transCarTable.innerHTML = transTable;
  downNewTbody.innerHTML = newCarsDnldTB;
  downSoldTbody.innerHTML = soldDownload;
  downTransTbody.innerHTML = transDownload;

  allCarsTbody.innerHTML = allTable;
  if (searchInp.value === '' || searchInp.placeholder === 'Search') {
    showCars();
    showSoldCars();
    showTransCars();
  }

}
//----------------------------------





//-------------------------------------Show all Function-------------------------------------------
function showAll() {
  showCars();
  showSoldCars();
  showTransCars();
  showAllCars();
}
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------          Search By Entry Date      ------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
const EntryStartDate = document.getElementById('Entry-start-date');
const EntryEndDate = document.getElementById('Entry-End-date');
const all_cars_count_p = document.getElementById('all-cars-count-p');

function searchBetweenEntryDates() {
  let showTable = '';
  let soldTable = '';
  let transTable = '';
  let newDwnlodTB = '';
  let soldDownload = '';
  let transDownload = '';
  let allTable = '';
  let searchTempCount = 0;
  if (searchMood === 'show') {
    if (EntryStartDate.value != '' && EntryEndDate.value != '') {
      showroomCars.forEach((car, index) => {
        if (EntryStartDate.value <= car.EntryDate && EntryEndDate.value >= car.EntryDate) {
          searchTempCount++
          if (index + 1 == 1) {
            index = searchTempCount
          }
          showTable += generatShowTable(car, index)
          newDwnlodTB += generatnewDownload(car, index)
        }

      })
    }


  } else if (searchMood === 'sold') {
    if (EntryStartDate.value != '' && EntryEndDate.value != '') {
      allSoldCars.forEach((car, index) => {
        if (EntryStartDate.value <= car.EntryDate && EntryEndDate.value >= car.EntryDate) {
          searchTempCount++
          soldTable += generateSoldTable(car, index)
          soldDownload += generat_S_T_Download(car, index, custbrnch_value)



        }
      })
    }


  } else if (searchMood === 'trans') {
    if (EntryStartDate.value != '' && EntryEndDate.valuee != '') {
      allTransCars.forEach((car, index) => {
        if (EntryStartDate.value <= car.EntryDate && EntryEndDate.value >= car.EntryDate) {
          searchTempCount++
          transTable += generateTransTable(car, index)
          transDownload += generat_S_T_Download(car, index, custbrnch_value)



        }

      })
    }

  } else {
    if (EntryStartDate.value != '' && EntryEndDate.valuee != '') {
      allCars.forEach((car, index) => {
        if (EntryStartDate.value <= car.EntryDate && EntryEndDate.value >= car.EntryDate) {
          searchTempCount++
          allTable += generatAllCarsTable(car, index)

        }

      })
    }

  }

  if (all_cars_count_p.classList.contains('active')) {
    all_cars_count_p.classList.remove('active')
  } else {
    all_cars_count_p.classList.add('active')
    all_cars_count_p.innerHTML = `The count of All Cars entered Showroom between 
      ${EntryStartDate.value} & ${EntryEndDate.value} 
      is ( ${searchTempCount} ) Cars`
  }
  NewCarTable.innerHTML = showTable;
  soldCarTable.innerHTML = soldTable;
  transCarTable.innerHTML = transTable;

  downNewTbody.innerHTML = newDwnlodTB;
  downSoldTbody.innerHTML = soldDownload;
  downTransTbody.innerHTML = transDownload;

  allCarsTbody.innerHTML = allTable;

  showroomcount.innerHTML = `&nbsp;${searchTempCount}`;
  soldCount.innerHTML = `&nbsp;${searchTempCount}`;
  transCount.innerHTML = `&nbsp;${searchTempCount}`;

  allCars_Count.innerHTML = `&nbsp;${searchTempCount}`

  EntryStartDate.value = '';
  EntryEndDate.value = '';

}
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------          Search By Exit Date      ------------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
const ExitStartDate = document.getElementById('Exit-start-date');
const ExitEndDate = document.getElementById('Exit-End-date');

function searchBetweenExitDates() {
  let showTable = '';
  let soldTable = '';
  let transTable = '';

  let newDwnlodTB = '';
  let soldDownload = '';
  let transDownload = '';

  let allTable = '';

  let searchTempCount = 0;
  if (searchMood === 'show') {
    if (ExitStartDate.value != '' && ExitEndDate != '') {
      showroomCars.forEach((car, index) => {
        if (ExitStartDate.value <= car.ExitDate && ExitEndDate.value >= car.ExitDate) {
          searchTempCount++
          showTable += generatShowTable(car, index)
          newDwnlodTB += generatnewDownload(car, index)


        }

      })
    }


  } else if (searchMood === 'sold') {
    if (ExitStartDate.value != '' && ExitEndDate != '') {
      allSoldCars.forEach((car, index) => {
        if (ExitStartDate.value <= car.ExitDate && ExitEndDate.value >= car.ExitDate) {
          searchTempCount++
          soldTable += generateSoldTable(car, index)
          soldDownload += generat_S_T_Download(car, index, custbrnch_value)



        }
      })
    }


  } else if (searchMood === 'trans') {
    if (ExitStartDate.value != '' && ExitEndDate != '') {
      allTransCars.forEach((car, index) => {
        if (ExitStartDate.value <= car.ExitDate && ExitEndDate.value >= car.ExitDate) {
          searchTempCount++
          transTable += generateTransTable(car, index)
          transDownload += generat_S_T_Download(car, index, custbrnch_value)



        }

      })
    }

  } else {
    if (ExitStartDate.value != '' && ExitEndDate.valuee != '') {
      allCars.forEach((car, index) => {
        if (ExitStartDate.value <= car.ExitDate && ExitEndDate.value >= car.ExitDate) {
          searchTempCount++
          allTable += generatAllCarsTable(car, index)

        }

      })
    }

  }
  if (all_cars_count_p.classList.contains('active')) {
    all_cars_count_p.classList.remove('active')
  } else {
    all_cars_count_p.classList.add('active')
    all_cars_count_p.innerHTML = `The count of All Cars Exit From Showroom between 
      ${ExitStartDate.value} & ${ExitEndDate.value} 
      is ( ${searchTempCount} ) Cars`
  }
  NewCarTable.innerHTML = showTable;
  soldCarTable.innerHTML = soldTable;
  transCarTable.innerHTML = transTable;
  allCarsTbody.innerHTML = allTable;

  downSoldTbody.innerHTML = soldDownload;
  downNewTbody.innerHTML = newDwnlodTB;
  downTransTbody.innerHTML = transDownload;

  showroomcount.innerHTML = `&nbsp;${searchTempCount}`;
  soldCount.innerHTML = `&nbsp;${searchTempCount}`;
  transCount.innerHTML = `&nbsp;${searchTempCount}`;
  allCars_Count.innerHTML = `&nbsp;${searchTempCount}`

  ExitStartDate.value = '';
  ExitEndDate.value = '';

}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//-----------------      Show All Cars in Search All Section      ----------------------------------
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
const allCarsTbody = document.getElementById('search-tbody');
const allCars_Count = document.getElementById('All-Cars-count');
function showAllCars() {
  let allTable = '';
  let allCarsCount = 0;
  allCars.forEach((car, index) => {
    allCarsCount++;
    allTable += generatAllCarsTable(car, index)

  })

  allCarsTbody.innerHTML = allTable;
  allCars_Count.innerHTML = `&nbsp;${allCarsCount}`
  all_cars_count_p.classList.remove('active')

}
showAllCars();
//---------------------





//-------------- log-out ---------------
const logOutbtn = document.querySelector('.log-out-btn');
const logOutSpan = document.querySelector('.logout-span');

logOutbtn.onclick = () => {
  let i = 3
  logOutSpan.innerHTML = `..${i}`
  setInterval(() => {
    i--
    logOutSpan.innerHTML = `..${i}`
    if (i == 0) {
      location.href = '../html/login.html'
    }
  }, 1000)

}
//  download file

function changDwnldMood(id) {
  if (id === "newCarsList") {
    downloadMood = 'new'
  } else if (id === 'soldCarsList') {
    downloadMood = 'Customer'
  } else if (id === 'transCarsList') {
    downloadMood = 'Branch'
  } else {
    downloadMood = 'all'
  }
  console.log(downloadMood)
}
document.getElementById('download-file').addEventListener('click', function () {
  if (downloadMood === 'new') {
    downloadTableAsXlsx('newCarsdownload', 'New-Cars');
  } else if (downloadMood === 'Customer') {
    downloadTableAsXlsx('soldCarsDownload', 'Sold-Cars');
  } else if (downloadMood === 'Branch') {
    downloadTableAsXlsx('transCarsDownload', 'Transferred-Cars');

  } else {
    downloadTableAsXlsx('all-table', 'All-Cars');
  }
});

function downloadTableAsXlsx(tableId, filename) {
  const table = document.getElementById(tableId);
  const workbook = createWorkbook(table);

  // Create a Blob from the workbook
  workbook.xlsx.writeBuffer().then(function (buffer) {
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, `${filename}.xlsx`);
  });
}

function createWorkbook(table) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet 1');

  // Add headers
  const headerRow = worksheet.addRow(getTableHeaders(table));

  // Style headers
  styleRow(headerRow);
  headerRow.eachCell(cell => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'c3babb' } // gray background color
    };
    cell.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };
  });


  // Add data rows
  const dataRows = getTableDataRows(table);
  dataRows.forEach(dataRow => {
    const row = worksheet.addRow(dataRow);
    styleRow(row);
  });

  return workbook;
}

function getTableHeaders(table) {
  const headers = [];
  const headerCells = table.querySelectorAll('thead th');
  headerCells.forEach(cell => {
    headers.push(cell.innerHTML.trim());
  });
  return headers;
}

function getTableDataRows(table) {
  const dataRows = [];
  const rows = table.querySelectorAll('tbody tr');
  rows.forEach(row => {
    const rowData = [];
    const cells = row.querySelectorAll('tbody th');
    cells.forEach(cell => {
      rowData.push(cell.innerHTML.trim());
    });
    dataRows.push(rowData);
  });
  return dataRows;
}

function styleRow(row) {
  row.eachCell(cell => {
    cell.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    }
  });
}
