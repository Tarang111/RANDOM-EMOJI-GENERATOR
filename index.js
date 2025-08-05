const btn=document.getElementById("btn")
async function api() {
    let res=await fetch("https://emoji-api.com/emojis?access_key=9952dd0ca7399893a5a067ac987e8f7811b27567")
    let result =await res.json()
 
     let rand=Math.floor(Math.random()*1900)
    document.getElementById("h").innerHTML=` <h1>EMOJI</h1>
        <p id="photo">${result[rand].character}</p>
         <p>${result[rand].slug.slice(5, ).toUpperCase()}</p>
    `
}
 btn.addEventListener("click",()=>{
   
   api();
   let rand1=Math.floor(Math.random()*256)
    let rand2=Math.floor(Math.random()*256)
     let rand3=Math.floor(Math.random()*256)
   btn.style.backgroundColor=`rgb(${rand1},${rand2},${rand3})`
})