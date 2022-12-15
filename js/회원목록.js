window.addEventListener('load',()=>{
    renderMember();
})

const datetimeFormatter=(date)=>{
        const f = (n) => n>=10 ? n : "0"+n;
        const MM = f(date.getMonth() +1);
        const DD = f(date.getDate());
        const HH = f(date.getHours());
        const mm = f(date.getMinutes());
        return `${MM}/${DD} ${HH}:${mm}`; 
        }
const renderMember =()=>{
    const members = JSON.parse(localStorage.getItem('joinMembers'))
    console.log(members);
    const tbody = document.querySelector('#addTbody')
    tbody.innerHTML="";
    //최근 부터 출력
    members?.reverse();
    //Member 가 있다면  실행
    // constructor(userId,userPassword,userName,userSsn,userPhone,userEmail,datetime=Date.now()){
    if(members){
        members.forEach(({myid,mypassword,myname,myssn,myagency,myphone,myemail,datetime},index)=>{
            
            tbody.innerHTML+=`
            <tr>
                <th style="height :30px">No.${index+1}</th>
                <th>${myid}</th>
                <th>${myname}</th>
                <th>${myagency}</th>
                <th>${myphone.substr(0,3)}-${myphone.substr(3,4)}-${myphone.substr(7)}</th>
                <th>${myemail}</th>
                <th>시각: ${datetimeFormatter(new Date(datetime))}</th>
            </tr>
            `
        })
    }else{
        tbody.innerHTML= `<tr><th colspan='8' style="text-align: center;">등록된 회원이 존재하지 않습니다. </th></tr> `
    }
}
