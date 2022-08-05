const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const STORAGE_API_HOST = isLocalhost ? `http://localhost:3000` : `https://adesschoolmanagementsystemca2.herokuapp.com/ `;

const token = sessionStorage.getItem("token");
const userid=sessionStorage.getItem("userid");
const userrole=sessionStorage.getItem("userrole");
if (token === null || isNaN(userid)) {
    console.log("Redirecting to login...");
  
    window.location.href = "https://gmstrikerz.github.io/Ca2AdesFrontEnd/view/Login.html";
}

window.addEventListener("DOMContentLoaded", function () {

    axios.get(`http://localhost:3000/Feedback`)      
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
                var id=sessionStorage.getItem("userid")
                var postHtml=``
                for (let i = 0; i < data.result.length; i++) {
                    var str = data.result[i].feedbackdate;
                    var res = str.substring(0, 10);
                        if (data.result[i].userid==id){

                            postHtml += `
                               <div class="card" style="margin-top: 2rem;">
                               <div class="card-body">
                    
                                   <p class="card-text">${data.result[i].feedbacktitle}</p>
                                   <p class="card-text">${data.result[i].feedbackcontent}</p>
                               </div>
                               <div class="card-footer text-muted">
                                   Date : ${res}
                                   <button onclick="deletebtn(${data.result[i].feedbackid})">delete</button>
                               </div>
                           </div>
                           `;
                           document.getElementById("getfeedback").innerHTML=postHtml
                        }
                        else{
                            postHtml += `
                            <div class="card" style="margin-top: 2rem;">
                            <div class="card-body">
                 
                                <p class="card-text">${data.result[i].feedbacktitle}</p>
                                <p class="card-text">${data.result[i].feedbackcontent}</p>
                            </div>
                            <div class="card-footer text-muted">
                                Date : ${res}
                            </div>
                        </div>
                        `;
                        document.getElementById("getfeedback").innerHTML=postHtml
                        }
                                
                }




           
              })
              .catch((error) => alert(error.message))
    
    var feedbacksubmit = document.getElementById("submitfeedback");
    feedbacksubmit.addEventListener("submit", function(event) {
        event.preventDefault();
        let feedbacktitle=document.getElementById("feedback-title").value;
        let feedbackcontent=document.getElementById("textfeedback").value;
        let userid=sessionStorage.getItem("userid")
        const data={
            feedbacktitle:feedbacktitle,
             feedbackcontent:feedbackcontent,
             userid:userid
        }
axios({
    method: 'post',
    url: 'http://localhost:3000/Feedback',
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
       
        })


        
        
        
    })
    
    
    
    
    
            function deletebtn(feedbackid){
                // console.log(courseid);
                let userid=sessionStorage.getItem("userid")
                axios.delete("http://localhost:3000/Feedback/"+userid+"/"+feedbackid, {
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


