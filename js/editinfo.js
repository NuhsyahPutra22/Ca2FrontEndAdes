const id=sessionStorage.getItem("userid")
const token=sessionStorage.getItem("token");

axios.get(`http://localhost:3000/user/`+id)      
.then((res) => {
  if (res.status === 200) {
      console.log("Success!");
      console.log(res)
      return res.data
  } else {
  this.alert("error")
  }
})

.then((data)=>{
  for (let i = 0; i < data.result.length; i++) {
    document.getElementById("email").value=data.result[i].useremail
    document.getElementById("password").value=data.result[i].userpassword
    document.getElementById("address").value=data.result[i].useraddress
    document.getElementById("contact").value=data.result[i].usercontactnumber

          }
                  
  }

)
.catch((error) => alert(error.message))




function updateinfo(){
    let a=    document.getElementById("email").value;
    let b=  document.getElementById("password").value;
    let c=   document.getElementById("address").value;
    let d=   document.getElementById("contact").value;
    console.log(id)
    // console.log(requestConfig)
    const data={
        userpassword:b,
        useremail:a,
         useraddress:c,
         usercontactnumber:d
      }


      axios({
        method: 'put',
        url: 'http://localhost:3000/user/'+id,
        data: data,
     
        headers: {  "Authorization": "Bearer " + token}
      })      
              .then((res) => {
                if (res.status === 201) {
                    console.log("Success!");
                    alert("success");
                    window.location.href = "../view/index.html";
                    
                } else {
                alert("error");
                }
              })
      
             
              .catch((error) => alert(error.message))





}

