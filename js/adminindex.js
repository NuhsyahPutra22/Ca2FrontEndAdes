var admin=sessionStorage.getItem("userrole")
const userrole=sessionStorage.getItem("userrole")
const token=sessionStorage.getItem("token");


if(userrole!=="Admin"){

alert("Your role is not Admin")
window.location.href="https://gmstrikerz.github.io/Ca2AdesFrontEnd/view/Login.html"


}



if (admin=="Admin"){
    const  html=`
    <select  id="modes">
    <option value="Admin">Admin mode</option>
    <option value="Student">Student Mode</option>
    
  </select>
  <button type="submit" onclick="gopage()">go</button>
  `


document.getElementById("changemode").innerHTML=html;

function gopage(){

    if(document.getElementById("modes").value=="Student"){
    
       window.location.href="../view/index.html"
    
    }




}    






}













axios.get(`http://localhost:3000/user`)      
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
    
    tbody+=`<tbody>`

tbody+=`  <th scope="col" class="col-2" >${data.result[i].username}</th>`
tbody+=`<th scope="col" class="col-3" >${data.result[i].useremail}</th>`
tbody+= `<th scope="col" class="col-3" >${data.result[i].coursename}</th>`
tbody+= `<th scope="col" class="col-3" >${data.result[i].semestername}</th>`
tbody+= `<th scope="col" class="col-3" ><button onclick="deleteuser(${data.result[i].userid})">delete</button></th>`
}
tbody+=`</table>`


document.getElementById("courselist").innerHTML=tbody


})
.catch((error) => alert(error.message))



function deleteuser(userid){

  axios.delete("http://localhost:3000/user/"+userid, {
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
