const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const STORAGE_API_HOST = isLocalhost ? `http://localhost:3000` : `https://adesschoolmanagementsystemca2.herokuapp.com/ `;

const token = sessionStorage.getItem("token");
const userid=sessionStorage.getItem("userid");
const userrole=sessionStorage.getItem("userrole");
// if (token === null || isNaN(userid)||userrole!=="Admin") {
//     console.log("Redirecting to login...");
//     if(userrole!=="Admin"){
//         alert("you are no admin")
//     }
//     window.location.href = "../view/login.html";
// }

axios.get(`http://localhost:3000/Course`)      
              .then((res) => {
                if (res.status === 200) {
                    console.log("Success!");
                    
                    console.log(res)
                    
                    return res.data
                } else {
                  res.json().then((error) => { throw error });
                }
              })

              .then((data)=>{
                var tbody=`<table>`
                for (let i = 0; i < data.result.length; i++) {
                  console.log(data.result[0].coursecode)
                  tbody+=`<tbody>`

  tbody+=`  <th scope="col" class="col-2" >${data.result[i].coursecode}</th>`
  tbody+=`<th scope="col" class="col-7" >${data.result[i].coursename}</th>`
  tbody+= `<th scope="col" class="col-3" >${data.result[i].courseabbrev}</th>`
  tbody+=`<th scope="col" class="col-3" > <button onclick="editbtn(${data.result[i].courseid})"> EDIT</button></th>`
  tbody+=`<th scope="col" class="col-3" > <button onclick="deletebtn(${data.result[i].courseid})"> DELETE</button></th>`
}
tbody+=`</table>`


document.getElementById("courselist").innerHTML=tbody

           
              })
              .catch((error) => alert(error.message));


              function deletebtn(courseid){
                console.log(courseid);
                axios.delete("http://localhost:3000/Course/"+courseid, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(function (response) {
                    if (response.status === 200) {
                        alert('Delete successfull!');
                        location.reload();
                    } else {
                        alert('Failed to delete!')
                        console.log(response);
                    }
                })
                    .catch((error) => {
                        console.log(error);
                    })
            }


function createcourse(){

let a=document.getElementById("course-code").value;
let b=document.getElementById("course-name").value;
let c=document.getElementById("course-abbrv").value;
const data={
  coursecode:a,
   coursename:b,
   courseabbrev:c
}
axios({
  method: 'post',
  url: 'http://localhost:3000/Course',
  data: data,
  headers: { 'Content-Type': 'application/json' }
})      
        .then((res) => {
          if (res.status === 201) {
              console.log("Success!");
              alert("success");
              location.reload();
              
          } else {
          alert("error");
          }
        })

       
        .catch((error) => alert(error.message))
}


function editbtn(courseid){
sessionStorage.getItem("courseid",courseid)


axios.get(`http://localhost:3000/Course/`+courseid)      
              .then((res) => {
                if (res.status === 200) {
                    console.log("Success!");
                    
                    console.log(res)
                    
                    return res.data
                } else {
                  res.json().then((error) => { throw error });
                }
              })

              .then((data)=>{
         
                for (let i = 0; i < data.result.length; i++) {
                 var a=data.result[i].coursecode;
                 console.log(a)
                 var b=data.result[i].coursename;
                 var c=data.result[i].courseabbrev;
                 var d=data.result[i].courseid;


}

document.getElementById("editcoursecode").value=a;
document.getElementById("editcoursename").value=b;
document.getElementById("editcourseabbrv").value=c;
document.getElementById("courseid").value=d;

              })
              .catch((error) => alert(error.message));

}





function btnedit(){
  // const courseid=sessionStorage.getItem("courseid")

  const a= document.getElementById("editcoursecode").value;
  const b= document.getElementById("editcoursename").value;
   const c=document.getElementById("editcourseabbrv").value;
   const d=document.getElementById("courseid").value;

   const data={
    coursecode:a,
    coursename:b,
    courseabbrev:c
  }


  axios({
    method: 'put',
    url: 'http://localhost:3000/Course/'+d,
    data: data,
 
    headers: { 'Content-Type': 'application/json' }
  })      
          .then((res) => {
            if (res.status === 200) {
                console.log("Success!");
                alert("success");
               location.reload();
                
            } else {
            alert("error");
            }
          })
  
         
          .catch((error) => alert(error.message))



}



           