// console.log("ahmed hassan awn");


const div = document.querySelector("#container");
const input = document.querySelector("#input");
// const btn = document.querySelector("#btn");


function add() {
 
    
    fetch(`https://api.github.com/users/${input.value}`)
    .then((res)=> res.json())
    .then((res)=>{
        console.log(res);
        

        div.innerHTML = `
        <div id="card">
        <div id="image">
        <img src=${res.avatar_url} alt="">
        </div>
        <h2>ID:${res.id}</h2>
        <h2>Name:${res.name}</h2>
        <h2>Bio:  ${res.bio}</h2>
        <h2>Location:  ${res.location}</h2>
        </div>
        
`
//             console.log(res) 
    })
    .catch((err)=>{
        console.log(err);
    });
    
}






