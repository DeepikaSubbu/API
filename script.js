

// var div1=document.createElement('div')
// div1.classList.add("container", "text-center")
// div1.innerText=("weather of Rest Countries")
// document.body.appendChild(div1)
var title=document.createElement('H1')
title.setAttribute('id', 'title')
title.setAttribute('class', 'text-center')
title.innerText=("Rest Countries Weather")
document.body.appendChild(title)

let cont=document.createElement("div");
cont.setAttribute("class", "container");
document.body.append(cont);


let row = document.createElement("div")
row.setAttribute("class", "row");
cont.appendChild(row);




fetch("https://restcountries.com/v2/all")
.then((d)=>d.json())
.then((data)=>{
    console.log(data);
    console.log(data.length)
    console.log(data[2].capital)
    for(let i=0;i<data.length; i++){
        console.log(data[i])
        a=data[i].capital
        row.innerHTML+=` 
        <div class="col-lg-4 col-md-4 col-sm-6 col-xl-4 p-3">
        <div  class="card border text-black  h-100 m-3" style="width: 18rem;">
            <div class="card-header text-center "> ${data[i].name}<div>
                <img src=${data[i].flags.png} class="card-img-top">
                <div> <div class="card-body "> 
                <div class="card-text"> Native Name:${data[i].nativeName}<br>
                 Region:${data[i].region}<br>
                 Population:${data[i].population}</div>
                <button onclick='check("${data[i].capital}", "ans${i}")'"> weather</button>
                 <div id="ans${i}"></div>
                 </div>
                 </div>
                 </div>`

                 
    
    }                


})

.catch((er)=>{
    console.log(er);
});





function check(a,i){
    console.log(i)
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+a+"&appid=b22c7aebb66ad5a8ea381b2ad3f191ca")
.then((b)=>b.json())
.then((bdata)=>{
    var e=bdata.weather[0].description
    console.log(e);
    document.getElementById(i).innerHTML=e
})

.catch((er)=>{
    console.log(er);
});
}

    












// fetch("https://api.openweathermap.org/data/2.5/weather?q=Afghanistan,kabul&appid=b22c7aebb66ad5a8ea381b2ad3f191ca")
// .then((d)=>d.json())
// .then((data)=>{
//     console.log(data);
//     console.log(data.sys.sunset);
// })
// .catch((er)=>{
//     console.log(er);
// });

