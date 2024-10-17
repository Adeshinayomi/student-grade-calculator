const percent=document.getElementById('percentage');
const grades=document.getElementById('grade');
const submit=document.getElementById('submit');
const remark= document.getElementById('pass');

submit.addEventListener("click",getMarks);

function getMarks(){

  var maths = Number(document.getElementById('maths').value);
  var physics = Number(document.getElementById('physics').value);
  var chemistry = Number(document.getElementById('chemistry').value);
  var english= Number(document.getElementById('english').value);


  var grade='';
  var totalMarks=400;
  var marksObtained = maths + physics + chemistry + english; 
  var percentage=(marksObtained/totalMarks) * 100;

  percent.innerHTML=percentage + "%";
 
  if(percentage >= 90){
    grade= "A+";
  }else if(percentage <= 90 && percentage >= 80){
    grade="A";
  }else if(percentage <= 80 && percentage >= 60){
    grade="B"
  }else if(percentage <= 60 && percentage >= 50){
    grade ="C";
  }else if(percentage <= 50 && percentage >= 45){
    grade ="D";
  }else if(percentage <= 45 && percentage >= 40){
    grade ="E";
  }else if(percentage <= 40){
    grade ="F";
  }
   grades.innerHTML = grade;

  if(percentage <= 50){
    remark.innerHTML='Sorry! You failed please try next time';
    remark.classList.add('fail');
    remark.classList.remove('pass');
  }else{
    remark.innerHTML='Congratulations! You have passed';
    remark.classList.add('pass');
    remark.classList.remove('fail');
  }
}