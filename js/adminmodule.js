const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const STORAGE_API_HOST = isLocalhost ? `http://localhost:3000` : `https://adesschoolmanagementsystemca2.herokuapp.com/ `;

//button form selector
const InsertButton = document.querySelector('#insert-btn');
const tableBody = document.querySelector('#courselist');

window.onload = function loadScreen() {
    GetCoursename()
    showModule()

}
function GetCoursename() {
    let Dropdown = "";
    fetch(`${STORAGE_API_HOST}/GetCourseName`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        })
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                let coursename = data[i].coursename
                console.log(data[i].courseid);
                console.log(coursename);
                Dropdown += `<option value="${data[i].coursename}">` + coursename + "</option>"
                document.getElementById("Acourseid").innerHTML = Dropdown
            }
        })
}


function AddModule() {
    const modulecode = document.getElementById("Amodule-code").value;
    const modulename = document.getElementById("Amodule-name").value;
    const moduledetail = document.getElementById("Amodule-details").value;
    const semestername = document.getElementById("Asemestername").value;
    const coursename = document.getElementById("Acourseid").value;
    fetch(`${STORAGE_API_HOST}/GetCourseid/${coursename}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.courseid)
            let courseid = data[0].courseid;
            console.log(courseid)
            fetch(`${STORAGE_API_HOST}/Module`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ modulecode, modulename, moduledetail, courseid, semestername }),
            })
                .then((response) => {
                    response.json()
                    alert("successfully Added Module")
                    showModule();
                }
                )
        }
        )
}

function ClearModulefromtable() {
    const tableBody = document.getElementById("modulelist");
    tableBody.innerHTML = '';
}



function showModule() {
    axios.get(`${STORAGE_API_HOST}/Module`)
        .then((res) => {
            if (res.status === 200) {
                console.log("Success!");

                console.log(res)

                return res.data
            } else {
                res.json().then((error) => { throw error });
            }
        })

        .then((data) => {
            var tbody = `<table>`
            for (let i = 0; i < data.result.length; i++) {
                console.log(data.result[0].modulecode)
                tbody += `<tbody>`

                tbody += `  <th scope="col" class="col-2" >${data.result[i].modulecode}</th>`
                tbody += `<th scope="col" class="col-7" >${data.result[i].modulename}</th>`
                tbody += `<th scope="col" class="col-3" >${data.result[i].moduledetail}</th>`
                tbody += `<th scope="col" class="col-3" >${data.result[i].courseid}</th>`
                tbody += `<th scope="col" class="col-3" >${data.result[i].semestername}</th>`
                tbody += `<th scope="col" class="col-3" > <button onclick=" Updatemodulebtn(${data.result[i].moduleid})"> EDIT</button></th>`
                tbody += `<th scope="col" class="col-3" > <button onclick="DeleteModuleInfo(${data.result[i].moduleid})"> DELETE</button></th>`
            }
            tbody += `</table>`


            document.getElementById("modulelist").innerHTML = tbody


        })
        .catch((error) => alert(error.message));

}


function Updatemodulebtn(moduleid){
    sessionStorage.getItem("moduleid",moduleid)
    
    
    axios.get(`http://localhost:3000/Module/`+moduleid)      
                  .then((res) => {
                    if (res.status === 200) {
                        console.log("Success!");
                        
                        
                        return res.data
                    } else {
                      res.json().then((error) => { throw error });
                    }
                  })
    
                  .then((data)=>{
             
                    for (let i = 0; i < data.result.length; i++) {
                     var mc=data.result[i].modulecode;
                     console.log(mc)
                     var mn=data.result[i].modulename;
                     var md=data.result[i].moduledetail;
                     var mid=data.result[i].moduleid;
    
    
    }
    
    document.getElementById("Updatemodule-code").value=mc;
    document.getElementById("Updatemodule-name").value=mn;
    document.getElementById("Updatemodule-details").value=md;
    document.getElementById("moduleid").value=mid;
    
                  })
                  .catch((error) => alert(error.message));
    
    }
    
    
    
    
    
    function updateModulebtn(){
    
      const mc= document.getElementById("Updatemodule-code").value;
      const mn= document.getElementById("Updatemodule-name").value;
       const md=document.getElementById("Updatemodule-details").value;
       const mid=document.getElementById("moduleid").value;
    
       const data={
        modulecode:mc,
        modulename:mn,
        moduledetail:md
      }
    
    
      axios({
        method: 'put',
        url: 'http://localhost:3000/Module/'+mid,
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
    
    


        


//DeleteModuleInfo
function DeleteModuleInfo(moduleid) {
    console.log(moduleid);
    fetch(`${STORAGE_API_HOST}/Module/${moduleid}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (response.status === 200) {
                // Ok
                //   .then((data) =>console.log(data)) 
                console.log("Successfully delete the Moduleinfo");
                alert("Successfully delete the Moduleinfo", "success", 1500);
                location.reload();
                showModule();
                // });
            }
        })

}
    



