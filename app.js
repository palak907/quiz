let quizdata=[
   {
      question:'Who is the PM of India?',
      a:'Narendra Modi',
      b:'Manmohan Singh',
      correct:'a'
   },
   {
question:'What is the name of Pandemic going on in 2020?',
a:'Covid',
b:'Plague',
correct:'a'
   }
]
let quiz=document.getElementById('quiz');
let answers=document.querySelectorAll('.answer');
let submit=document.getElementById('submit');
let que=document.getElementById('que');
let atext=document.getElementById('atext');
let btext=document.getElementById('btext');
let currentquiz=0;
let score=0;
loadquiz();
function loadquiz(){
   deselect();
   currentquizdata=quizdata[currentquiz];
   que.innerHTML=currentquizdata.question;
   
   atext.innerHTML=currentquizdata.a;
   btext.innerHTML=currentquizdata.b;
}
submit.addEventListener('click',function(){
   
   let ans=getselected();
   if(ans){
      if(ans===quizdata[currentquiz].correct){
         score++;
      }
      currentquiz++;
      if(currentquiz<quizdata.length){
         loadquiz();
      }
      else{
         quiz.innerHTML=`<h2>Your score is ${score} out of 2</h2>
         <button onclick='location.reload()'>Reload</button>`;
      }
   }
   
   
})
function getselected(){
   let answer=undefined;
   
   answers.forEach( function(item){
  if(item.checked){
     answer=item.id;
  }
  
   });
   return answer;
}
function deselect(){
   answers.forEach( function(item){
      item.checked=false;
      
      
       });
       
}