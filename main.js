const submitBtn = document.querySelector(".submit-btn");
const phase1 = document.querySelector('.flex-box-container');
const phase2 = document.querySelector('.thankYou');
const rating = document.getElementById('rtng');
const rates = document.querySelectorAll('.rating-btn');

submitBtn.addEventListener("click", function() {
    phase1.classList.add("hidden");
    phase2.classList.remove("hidden");

});

rates.forEach((rate) => {
    rate.addEventListener('click', ()=>{
        rating.innerHTML = rate.innerHTML;
        console.log(rating)
    });
});



// select buttons for toggle selected one
// const btnsContainer = document.querySelector('.rating-numbers');
// const btns = document.querySelectorAll('.rating-btn');

// console.log(btnsContainer);
// console.log(btns);

// btns.addEventListener('click', function () {
//     btns.forEach(function (item){
//         if (item.classList.contains('tgl')){
//             item.classList.remove('tgl');
//         }
//     });
//     btns.classList.toggle('tgl');

// });





// btns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     btns.forEach(function (item){
//         if (item !== 
//     });

//   });
// });




// for (const btn of btns) {
//     btn.addEventListener('click', function() {
//         const btnClass = btn.classList
//         if (btnClass.contains('tgl')){
//             btnClass.remove('tgl');
//             console.log(btn.classList)
//         }else {
//             btnClass.add('tgl');
//         }
// })}













// for (const btn of btns) {

//     btn.addEventListener('click', function onClick() {
//         const btnClass = btn.classList
//         console.log(btn.classList);
//         btnClass.toggle('tgl');
            
//     });
//   }

// btn.addEventListener ('click', function onClick() {
//         const elClass = e.target.classList;
//         if (!elClass.contains('tgl')){
//             btn.forEach(
//                 btns => btns.classList.remove('tgl')
//         );
//         elClass.add('tgl')
//     }
// });