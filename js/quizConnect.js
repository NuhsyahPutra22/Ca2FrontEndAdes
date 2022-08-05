const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const STORAGE_API_HOST = isLocalhost ? `http://localhost:3000` : `https://adesschoolmanagementsystemca2.herokuapp.com/ `;


// connect
// function createAttempt(){

// var a = document.getElementById("q1-input").value;
// var b = document.getElementById("q2-input").value;
// var c = document.getElementById("q3-input").value;
// var d = document.getElementById("q4-input").value;
// var e = document.getElementById("q5-input").value;
// var f = document.getElementById("q6-input").value;
// var g = document.getElementById("q7-input").value;
// var userid = JSON.stringify(document.getElementById("user-input").value);

// const data={
//   q1:a,
//   q2:b,
//   q3:c,
//   q4:d,
//   q5:e,
//   q6:f,
//   q7:g,
//   userid:userid
// }
// axios({
//   method: 'post',
//   url: 'http://localhost:3000/Quiz',
//   data: data,
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({q1, q2, q3, q4, q5, q6, q7, userid}),
// })      
//         .then((res) => {
//           if (res.status === 201) {
//               console.log("Success!");
//               alert("success");
//               location.reload();
              
//           } else {
//           alert("error");
//           }
//         })

       
//         .catch((error) => alert(error.message))
// }

axios.get(`http://localhost:3000/Quiz`)      
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

  tbody+=`<th scope="col" class="col-1" >${data.result[i].quizid}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].q1}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].q2}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].q3}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].q4}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].q5}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].q6}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].q7}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].userid}</th>`
  tbody+=`<th scope="col" class="col-1" ><button onclick="deleteQuizbtn(${data.result[i].quizid})">DELETE</button></th>`
}
tbody+=`</table>`


document.getElementById("quizlist").innerHTML=tbody

           
              })
              .catch((error) => alert(error.message))
              function deleteQuizbtn(quizid){
                console.log(quizid);
                axios.delete("http://localhost:3000/Quiz/"+quizid, {
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

//new
// window.onload = function loadScreen() {
//     getAttempts();
//     deleteAttempt();
// };

// function getAttempts() {
//     // Get data from server
//     let html = ``;
//     fetch(`http://localhost:3000/Quiz`)
//         .then((response) => response.json())
//         .then((data) => {
//           for (let i = 0; i < data.length; i++) {
//             const quiz = data[i];
//             // const row = `<tr>hello ${i}</tr>`
//             html += `
//               <tr>
//                 <th scope="row">${quiz["quizid"]}</th>
//                <td>${quiz["q1"]}</td>
//                <td>${quiz["q2"]}</td>
//                <td>${quiz["q3"]}</td>
//                <td>${quiz["q4"]}</td>
//                <td>${quiz["q5"]}</td>
//                <td>${quiz["q6"]}</td>
//                <td>${quiz["q7"]}</td>
//                <td>${quiz["total_score"]}</td>
//                <td>${quiz["userid"]}</td>
//                  <td>$quiz["credit_unit"]}</td>
//                  <td><button data-toggle="modal" data-target="#deleteModalCenter" onclick="deleteQuizbtn('${data.quizid
//           }')">Delete</button></td>
//              </tr>
//            `;
//           }
//           const tableBody = document.getElementById("quizlist");  
//           tableBody.innerHTML = html;
//         })
//         .catch((error) => alert(error.message))
//   }

  // function createAttempt() {
  //   var a = document.getElementById("q1-input").value;
  //   var b = document.getElementById("q2-input").value;
  //   var c = document.getElementById("q3-input").value;
  //   var d = document.getElementById("q4-input").value;
  //   var e = document.getElementById("q5-input").value;
  //   var f = document.getElementById("q6-input").value;
  //   var g = document.getElementById("q7-input").value;
  //   var userid = document.getElementById("user-input").value;
  //   if (validate(a,b,c,d,e,f,g,total_score,userid)) {
  //    // let modules={currentModuleName,currentcreditUnit}
  //     fetch(`http://localhost:3000/Quiz`,
  //      {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({a,b,c,d,e,f,g,total_score,userid}),
  //   })
  //       .then((response) => {
  //         if (response.status === 201) {
  //           // Ok
  //           getAttempt();
  //           return `success`;
  //         } else {
  //           response.json().then((error) => { throw error });
  //         }
  //       })
  //       .catch((error) => alert(error.message))
  //   } else {
  //     return error;
  //   }
  // }

  function createAttempt() {
    var a = document.getElementById("q1-input").value;
    var b = document.getElementById("q2-input").value;
    var c = document.getElementById("q3-input").value;
    var d = document.getElementById("q4-input").value;
    var e = document.getElementById("q5-input").value;
    var f = document.getElementById("q6-input").value;
    var g = document.getElementById("q7-input").value;
    var userid = document.getElementById("user-input").value;
            fetch(`http://localhost:3000/Quiz`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ a,b,c,d,e,f,g,userid }),
            })
                .then((response) => {
                    response.json()
                    alert("successfully Added Attempt")
                    // showAttempt();

                            //  .then((data) => { 
                  //             const data={
                      
                  //               q1: a,
                  //               q2: b,
                  //               q3:c,
                  //               q4:d,
                  //               q5:e,
                  //               q6: f,
                  //               q7: g,
                  //               userid: userid
                        
                  //             }
                  // var tbody = `<table>`
                  // for (let i = 0; i < data.result; i++) {
                  //     console.log(data.result[0].quizid)
                  //     tbody+=`<th scope="col" class="col-1" >${data.result[i].quizid}</th>`
                  //     tbody+=`<th scope="col" class="col-1" >${data.result[i].q1}</th>`
                  //     tbody+=`<th scope="col" class="col-1" >${data.result[i].q2}</th>`
                  //     tbody+=`<th scope="col" class="col-1" >${data.result[i].q3}</th>`
                  //     tbody+=`<th scope="col" class="col-1" >${data.result[i].q4}</th>`
                  //     tbody+=`<th scope="col" class="col-1" >${data.result[i].q5}</th>`
                  //     tbody+=`<th scope="col" class="col-1" >${data.result[i].q6}</th>`
                  //     tbody+=`<th scope="col" class="col-1" >${data.result[i].q7}</th>`
                  //     tbody+=`<th scope="col" class="col-1" >${data.result[i].userid}</th>`
                  //     tbody+=`<th scope="col" class="col-1" ><button onclick="deleteQuizbtn(${data.result[i].quizid})">DELETE</button></th>`
                  // }
                  // tbody += `</table>`
      
      
                  // document.getElementById("quizlist").innerHTML = tbody
                }
                )
           
        
        }

      //   function showAttempt() {
      //     axios.get(`http://localhost:3000/Quiz`)
      //         .then((res) => {
      //             if (res.status === 200) {
      //                 console.log("Success!");
      
      //                 console.log(res)
      
      //                 return res.data
      //             } else {
      //                 res.json().then((error) => { throw error });
      //             }
      //         })
      
      //         .then((data) => {
      //             var tbody = `<table>`
      //             for (let i = 0; i < data.result.length; i++) {
      //                 console.log(data.result[0].quizid)
      //                 tbody+=`<th scope="col" class="col-1" >${data.result[i].quizid}</th>`
      //                 tbody+=`<th scope="col" class="col-1" >${data.result[i].q1}</th>`
      //                 tbody+=`<th scope="col" class="col-1" >${data.result[i].q2}</th>`
      //                 tbody+=`<th scope="col" class="col-1" >${data.result[i].q3}</th>`
      //                 tbody+=`<th scope="col" class="col-1" >${data.result[i].q4}</th>`
      //                 tbody+=`<th scope="col" class="col-1" >${data.result[i].q5}</th>`
      //                 tbody+=`<th scope="col" class="col-1" >${data.result[i].q6}</th>`
      //                 tbody+=`<th scope="col" class="col-1" >${data.result[i].q7}</th>`
      //                 tbody+=`<th scope="col" class="col-1" >${data.result[i].userid}</th>`
      //                 tbody+=`<th scope="col" class="col-1" ><button onclick="deleteQuizbtn(${data.result[i].quizid})">DELETE</button></th>`
      //             }
      //             tbody += `</table>`
      
      
      //             document.getElementById("quizlist").innerHTML = tbody
      
      
      //         })
      //         .catch((error) => alert(error.message));
      
      // }

//   function deleteAttempt(quizid){
//     //$("#deleteModelBtn").on("click", function () {
//      // const records_id = document.getElementById("recordid").value;
//       console.log(quizid);
//       fetch(`http://localhost:3000/Quiz/${quizid}`,
//       {
//        method: 'DELETE',
//        headers: {
//            'Content-Type': 'application/json',
//        },
//    })
//    .then((response) => {
//     if (response.status === 200) {
//       // Ok
//       getAttempts()
//     //   .then((data) =>console.log(data)) 
//        .catch((error) => alert(error.message))
//       getAttempts();
//   // });
//   }})
//   }