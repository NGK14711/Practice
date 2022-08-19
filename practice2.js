// alert("hello world");
//  let num1 = document.getElementById("number");
//  let add = document.getElementById("increament");
//  let res1 = document.getElementById("reset");
//  let remove = document.getElementById("decreament");
//  let integer = 0;
//  integer = document.getElementById("number").innerText;

//   integer.addEventListener("click", function(){
//     integer = integer + 1;
//  });

//   integer.addEventListener("click", function(){
//         index = index - 1;
//         document.getElementById("number").innerText = index;
//     }
//     num1.innerText = integer; 
//   });

//   res1.addEventListener("click", function(){
//      num1.innerText = integer;
//   });

//  add.addEventListener("click", increamentFunction);

//  function increamentFunction(){
//      integer += 1;
//      document.getElementById("number").innerText = integer;
//  }
 
 let index = 0;

 function inc(){
     index = index + 1;
     document.getElementById("number").innerText = index;
 }
 function dec(){
    index = index - 1;
    document.getElementById("number").innerText = index;
}
function res(){
    index = 0;
    document.getElementById("number").innerText = index;
}

// var integer =document.getElementById("number");
// integer.addEventListener("click", myIncreament);
// integer.addEventListener("click", myDecreament);
// integer.addEventListener("click", myReset);

// function myIncreament(){
//     integer += 1;
//     document.getElementById("number").innerHTML = integer;

// }


