// let inps = document.querySelectorAll(".text")
// let warnpara = document.querySelector(".warning")
// let barValue = document.querySelector(".bar-value")
// let barPara = document.querySelector(".bar-para")

// let checkboxs = document.querySelectorAll(".checkbox")
// let bar = 0;
// let count = 0;


// const allGoal = JSON.parse(localStorage.getItem('allGoal')) || {}

// inps.forEach((inp)=>{

//     //setting value of input feild from localstorage

//     inp.value = allGoal[inp.id].name
    
//     inp.addEventListener("input",(e)=>{
//         allGoal[inp.id]={
//             name: e.target.value,
//             completed : false
//         };
        
//            localStorage.setItem("allGoal",JSON.stringify(allGoal))


//             if(inp.value === "")
//             {
//                 checkboxs.forEach((checkbox)=>{
//                     checkbox.parentElement.classList.remove("completed")
//                     warnpara.style.opacity = 1;
//                     // barValue.style.width = `0%`
//                     barValue.style.opacity = 0
//                     bar = 0
//                     count = 0;
//                     })
//             }
//         })
//         })
// checkboxs.forEach((checkbox)=>{
//     checkbox.addEventListener("click",()=>{
//         const isfilled = [...inps].every((inp)=>{
//             return inp.value
//         })
//         if(isfilled == false)
//         {
//             warnpara.style.opacity = 1;
//             bar = 0;
//             count =0;

//             inps.forEach((inp)=>{
//                 inp.addEventListener('focus',()=>{
//                     warnpara.style.opacity = 0;
//                 })
//             })
//             checkboxs.forEach((checkbox)=>{
//                 checkbox.parentElement.classList.remove("completed")
//             })
//         }
//         else{
//            let istrue = checkbox.parentElement.classList.toggle("completed")
//            const inpId = checkbox.nextElementSibling.id
//            allGoal[inpId].completed = !allGoal[inpId].completed;
//            localStorage.setItem("allGoal",JSON.stringify(allGoal))

//             warnpara.style.opacity = 0;
//             if(istrue == true)
//             {
//                 ++count;
//                 bar = 33.33*count
//                 barValue.style.opacity = 1
//                 barValue.style.width = `${bar}%`
//                 barValue.innerHTML= `${count}/3  Work is Completed`
//             }
//             else if(istrue == false)
//             {
//                 --count;
//                 bar = 33.33*count
//                 barValue.style.opacity = 1
//                 barValue.style.width = `${count}/3 Work is Completed`
//                 if(bar === 0)
//                 {
//                     barValue.style.opacity = 0
//                 }
//                 barValue.innerHTML= `${count}/3 Work is Completed`
//             }
    
//         }
//     })
// })












let inps = document.querySelectorAll(".text")
let warnpara = document.querySelector(".warning")
let barValue = document.querySelector(".bar-value")
let barPara = document.querySelector(".bar-para")

let checkboxs = document.querySelectorAll(".checkbox")
let bar = 0;
let count = 0;


const allGoal = JSON.parse(localStorage.getItem('allGoal')) || {}

inps.forEach((inp) => {
    // Setting value of input field from localStorage
    inp.value = allGoal[inp.id]?.name || "";

    inp.addEventListener("input", (e) => {
        allGoal[inp.id] = {
            name: e.target.value,
            completed: false
        };

        localStorage.setItem("allGoal", JSON.stringify(allGoal))

        if (inp.value === "") {
            checkboxs.forEach((checkbox) => {
                checkbox.parentElement.classList.remove("completed")
                warnpara.style.opacity = 1;
                barValue.style.opacity = 0;
                bar = 0;
                count = 0;
            })
        }
    })
})

checkboxs.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
        const isFilled = [...inps].every((inp) => inp.value);
        if (!isFilled) {
            warnpara.style.opacity = 1;
            bar = 0;
            count = 0;

            inps.forEach((inp) => {
                inp.addEventListener('focus', () => {
                    warnpara.style.opacity = 0;
                })
            })
            checkboxs.forEach((checkbox) => {
                checkbox.parentElement.classList.remove("completed")
            })
        } else {
            let isTrue = checkbox.parentElement.classList.toggle("completed")
            const inpId = checkbox.nextElementSibling.id
            allGoal[inpId].completed = !allGoal[inpId].completed;
            localStorage.setItem("allGoal", JSON.stringify(allGoal))

            warnpara.style.opacity = 0;
            if (isTrue) {
                count++;
            } else {
                count--;
            }

            bar = (count / 3) * 100;
            barValue.style.opacity = bar > 0 ? 1 : 0;
            barValue.style.width = `${bar}%`
            barValue.innerHTML = `${count}/3 Work is Completed`
        }
    })
})
