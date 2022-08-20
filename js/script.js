let url = "http://localhost:3001/info"

let btn_add = document.querySelector(".add")
let tbody = document.querySelector("tbody")
let up = document.querySelector(".up")
let doun = document.querySelector(".doun")
let to_left = document.querySelector(".to_left")
let to_right = document.querySelector(".to_right")
let row_list = document.querySelectorAll(".row_list")
let slice_of_list = document.querySelector(".slice_of_list")
let add_custemers = document.querySelectorAll(".add_custemers")
let contener = document.querySelector(".contener")
let contener_register = document.querySelector(".contener_register")
let customers = document.querySelector(".customers")
let register = document.querySelector(".register")



function reload1(p){
    axios.get(url)
        .then(res=> {
            if(res.status === 200 || res.status == 201){
              reload( res.data ,tbody)
            }
        })
        .catch(err => console.log(err))
}
reload1()

function reload(arr,plc) {
    plc.innerHTML = ""

    arr = arr.slice(0,5)

    for(let item of arr){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let img_td1 = document.createElement("img")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")

        td1.classList.add("t1")

        td1.innerHTML = item.name
        td2.innerHTML = item.email
        td3.innerHTML = item.location
        td4.innerHTML = item.phone
        td5.innerHTML = "16/08/2022"

        img_td1.src = "./img/avatar.png"
        img_td1.height= "35"
        img_td1.alt= ""

        plc.append(tr)
        tr.append(td1, td2, td3,td4,td5)
        td1.prepend(img_td1)
    }
}

// ---------------------------------------------------------------

let arr =[]
    axios.get(url)
        .then(res => {
            if(res.status === 200 || res.status == 201){
                arr.push(...res.data) 

                row_list.forEach(item =>{
                    item.innerHTML = res.data.length
                })

                to_right.onclick=()=>{
                    reload(res.data.slice(5,10), tbody)
                    slice_of_list.innerHTML = "5-10"
                }
                
                to_left.onclick=()=>{
                    reload(res.data.slice(0,5), tbody)
                    slice_of_list.innerHTML = "1-5"
                }
            }
        })  

// ---------------------------------------------------------------
let form = document.forms.adding

form.onsubmit=e=>{
    e.preventDefault()

    let info = {}
    let fm = new FormData(form)
    fm.forEach((value,key)=>{
        info[key]=  value
    })

     contener.style.display = "block"
    contener_register.style.display = "none"

    axios.post(url, info)
   
    reload1()
}
// ---------------------------------------------------------------

doun.onclick=()=>{
    arr.sort((a,b)=> b.id -a.id)
    
    reload(arr, tbody)
}
    
up.onclick=()=>{
    reload1()
}

// ======================search================================

let search1 = document.querySelector(".search1")

search1.onkeyup=()=>{
    let a = arr.filter(item=>{
        let value = search1.value.toLowerCase().trim()
        let name = item.name.toLowerCase()
    
        if(name.includes(value)){
            return item
        }
        console.log(value, name);
    })
    reload(a,tbody)
    
}
// ---------------------------------------------------------------

add_custemers.forEach(item=>{
    item.onclick=()=>{
        contener.style.display = "none"
        contener_register.style.display = "flex"
    }
})

customers.onclick=()=>{
    contener.style.display = "block"
    contener_register.style.display = "none"
}

// -------------------------------------------------------------

let name1 = document.querySelector(".name")
let surname = document.querySelector(".surname")
let country  = document.querySelector(".country")

let inp_name = form.querySelector(".inp_name")
let inp_surname = form.querySelector(".inp_surname")
let inp_country = form.querySelector(".inp_country")

inp_name.onkeyup=()=>{
   name1.innerHTML = inp_name.value 
}
inp_surname.onkeyup=()=>{
    surname.innerHTML = inp_surname.value 
 }
 inp_country.onkeyup=()=>{
    country.innerHTML = inp_country.value 
 }


 let dashboard = document.querySelector(".dashboard")

dashboard.onclick=()=>{
    window.location.href = "../index2.html"
 }

 let eror = document.querySelectorAll(".eror")

 eror.forEach(item=>{
    item.onclick=()=>{
        window.location.href = "../eror.html"
    } 
})