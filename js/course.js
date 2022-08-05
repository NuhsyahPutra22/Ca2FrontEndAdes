const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const STORAGE_API_HOST = isLocalhost ? `http://localhost:3000` : `https://adesschoolmanagementsystemca2.herokuapp.com/ `;



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
  tbody+= `<th scope="col" class="col-3" >${data.result[i].courseabbrev}</th>
`
}
tbody+=`</table>`


document.getElementById("courselist").innerHTML=tbody

           
              })
              .catch((error) => alert(error.message))
           