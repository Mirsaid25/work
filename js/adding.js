let form = document.forms.adding

let url1 = "http://localhost:3001/info"

form.onsubmit=e=>{
    e.preventDefault()

    let info = {}
    let fm = new FormData(form)
    fm.forEach((value,key)=>{
        info[key]=  value
    })
    
    axios.post(url, info)
    .then(res=> console.log(res.data))

    
}