
class Member{
        constructor(userId,userPassword,userName,userSsn,agency,userPhone,userEmail,datetime=Date.now()){
          this.myid=userId;
          this.mypassword =userPassword;
          this.myname = userName;
          this.myssn =userSsn;
          this.myagency=agency;
          this.myphone = userPhone;
          this.myemail = userEmail;
          this.datetime= datetime;

        }
}
/**
 * // select box ID로 접근하여 선택된 값 읽기
$("#셀렉트박스ID option:selected").val();
 */
const saveMember=()=>{
        //멤버 객체생성 
        const agency = $("#agency option:selected").val();
        const joinMember = new Member(userId.value,userpassword.value,username.value,userssn.value,agency,userphone.value,useremail.value);
        //배열에 추가
        const joinMembers = JSON.parse(localStorage.getItem('joinMembers')) || [];
        joinMembers.push(joinMember)
        //localStorage에 저장
        localStorage.setItem('joinMembers',JSON.stringify(joinMembers));
    }    

// -------------------------------------------------------------------------------------------------------------
document.memberFrm.onsubmit=function(){
    const userId = document.getElementById("userId");
    const mypwd = document.getElementById("userpassword");
    const myname = document.getElementById("username")
    const myssn = document.getElementById("userssn")
    const myemail =document.getElementById("useremail")
    const myphone = document.getElementById("userphone")
        
          //아이디 검사
const regExp1 = /^[a-z][a-z\d]{3,11}$/;
const regExp2 = /[0-9]/;
        
if(!regExpTest(regExp1,userId,'아이디의 길이는 영소문자로 4~12글자사이로 입력하세요.'))
    return false;
if(!regExpTest(regExp2,userId,'아이디에는 숫자가 포함되어있어야합니다.'))
    return false;
//아이디존재하는지 검사

//비밀번호검사
const regExpArr = [/^.{8,15}$/, /\d/, /[a-zA-Z]/, /[\\*!&]/];

for(let i = 0; i <regExpArr.length;i++){
    if(!regExpTest(regExpArr[i],mypwd,'비밀번호는 8~15자리 숫자/문자/특수문자를 포함해야합니다.'))
    return false;
}
//비번 일치여부
if (!isEqualPwd()){
    return false;
}
//이름검사

const regExp3 = /^[가-힇]{2,}$/;

if(!regExpTest(regExp3,myname,'이름은 한글로 2글자 이상 입력하세요.'))
return false;

//주민번호 검사
const regExp4 = /^\d{13}/;
if (!regExpTest(regExp4,myssn,'주민등록번호 13자리를 정확히 입력해주세요'))
return false;

//이메일검사
if ( !regExpTest(/^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/,myemail,"이메일 형식에 어긋납니다."))
    return false;
//전화번호검사 
const regExp5 = /^\d{11}/;
if (!regExpTest(regExp5,myphone,'전화번호 11자리를 정확히 입력해주세요'))
return false;
console.log('회원가입성공');
    
    alert("회원가입이 성공적으로 완료되었습니다.")
    window.location.href = '회원목록.html';
    return true;
}

      
function isEqualPwd() {
    if (userpassword.value === userpasswordcfn.value) {
      return true;
    } else {
      alert("비밀번호가 일치하지 않습니다.");
      userpassword.select();
      return false;
    }
  }
      function regExpTest(regExp,el,msg){
          if(regExp.test(el.value))return true;
          // 적합하지 않을경우
          alert(msg);
          return false;
      }


    

                