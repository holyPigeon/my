var userId = document.querySelector('#user-id');
var userPw1 = document.querySelector('#user-pw1');
var userPw2 = document.querySelector('#user-pw2');
 
 
 userId.onchange = checkId;
 userPw1.onchange = checkPw;
 userPw2.onchange = comparePw;
 
 function checkId(){
     if(userId.value.length < 4 || userId.value.length > 15){
         alert("4~15자리로 입력해주세요.");
         userId.select();
     }
 }

 function checkPw(){
     if(userPw1.value.length < 8){
         alert("8자리 이상으로 입력해주세요.");
         userPw1.value = "";
         userPw1.focus();
     }
 }

 function comparePw(){
     if(userPw1.value != userPw2.value){
         alert("비밀번호가 다릅니다.");
         userPw2.value = "";
         userPw2.focus();
     }
 }