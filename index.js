let screen = document.querySelector("input");
let buttons= document.querySelectorAll(".key");
// let clear=document.querySelector(".btn_c");
// let equal=document.querySelector(".btn_tl");
let string="";
let i;
for(i=0;i<=buttons.length;i++){
buttons[i].addEventListener("click" , function(e){

  //console.log(e.target.innerHTML);
if(e.target.innerHTML == "="){
string = eval(string);
screen.value = string;
}

else if(e.target.innerHTML == "c"){
string = " " ;
screen.value = string;}

else {
  console.log(e.target);
  string = string + e.target.innerHTML ;
  screen.value= string;
}

});

}