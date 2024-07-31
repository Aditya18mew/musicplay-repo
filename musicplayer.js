const button_play=document.getElementById("button_play")
const songname=document.getElementById("songname")
const navh=document.getElementById("nav_h1")
const nextsong=document.getElementById("nextsong")
const previoussong=document.getElementById("previoussong")
const loop=document.getElementById("loop")
const searching=document.getElementById("search")
const searchbutton=document.getElementById("searchbutton")
const songlist=document.getElementById("songlist")
let showduration=document.getElementById("duration")








let songs=['Vaaste - Dhvani Bhanushali.mp3',`Nadaaniyan(PagalNew.Com.Se).mp3`,`Dilbar - Satyameva Jayate 320Kbps.mp3`,`Dil Galti Kar Baitha Hai - Jubin Nautiyal.mp3`,`I can see you from behind.mp3`,`Jo Mujhe Deewana Kar De - Tulsi Kumar.mp3`,`Khwaab Khwaab.mp3`,`Kusu Kusu - Satyameva Jayate 2.mp3`,`Leja Re.mp3`,`Raataan Lambiyan - Shershaah.mp3`,`Tere Hoth Madhur Hain Mukh Bhi Madhur - Adharam Madhuram ! Hindi.mp3`,`Thakim Tumar Hote Hukhot Song.mp3`,`Tum Hi Aana - Marjaavaan.mp3`]


let i=0

let isplaying=false

audio=new
Audio(songs[i])





button_play.addEventListener("click",playstop)


    function playstop()
    {
    songname.textContent=`${songs[i]}`
 
endtime()
audio.addEventListener("loadedmetadata",endtime)



  

// for play and stop
    if(isplaying){
     
        audio.pause()
        button_play.textContent="□"
        
    }else{
       
        audio.play()
        button_play.textContent="| |"
       
       
    }
    isplaying=!isplaying

   
//slider working

let currentdur=document.getElementById("currentduration")

const slider=document.getElementById("slider")
sliderworking()
audio.addEventListener("loadedmetadata",sliderworking)
function sliderworking()
{  
slider.min=0
slider.max=audio.duration
slider.value=audio.currentTime
}
slider.addEventListener("input",function(){
audio.currentTime=slider.value
 
})




  

// current time of a song
let counter=0

function showcurrenttime(){
let currentmin=Math.floor(audio.currentTime/60)
let currentsecond=Math.floor(audio.currentTime%60)
if(currentsecond<10)
    {currentdur.textContent=currentmin + ":0" + currentsecond}
    else{
        currentdur.textContent=currentmin + ":" + currentsecond
    }
    counter++
}
  let intervalid=setInterval(showcurrenttime,1000)
  if(counter>=audio.duration){
    clearInterval(intervalid)
  }
 
   }

// time control
function endtime(){
    
  
   let min=Math.floor(audio.duration/60)
   let second=Math.floor(audio.duration%60)
  if(second<10){
   showduration.textContent=`${min}:0${second}`
  }else{
     showduration.textContent=`${min}:${second}`
  }
}



let rewind=document.getElementById("rewind")

rewind.addEventListener("click",function(){
    
    if(audio.currentTime>5){
        audio.currentTime-=5

    }else{
        audio.currentTime=0
    }
})
 
let forward=document.getElementById("forward")

forward.addEventListener("click",function(){
    if(audio.currentTime===audio.duration){
       i=1

    }else{
        audio.currentTime+=5
    }
})
// previous or next song
nextsong.addEventListener("click",function(){
    audio.pause()
    isplaying=false
   i=(i+1)%songs.length
   audio=new
   Audio(songs[i])
  
   playstop()
})

previoussong.addEventListener("click",function(){
   if(i>0)
   { audio.pause()
    isplaying=false
   i=(i-1)%songs.length
   audio=new
   Audio(songs[i])
  
   playstop()}
   else if(i<=0){
    i=songs.length
    audio.pause()
    isplaying=false
   i=(i-1)%songs.length
   audio=new
   Audio(songs[i])
  
   playstop()
   }
})
 





// useless css buttons
let navtogglebutton=document.getElementById("navtogglebutton")
let nav_menu=document.getElementById("nav_menu")

navtogglebutton.addEventListener("click",function(){
    if(nav_menu.style.display==="block"){
        nav_menu.style.display=`none`
    }else{
        nav_menu.style.display=`block`
       
    }

})

document.addEventListener("click",function(event){
    if(!nav_menu.contains(event.target) && event.target!==navtogglebutton){
        nav_menu.style.display=`none`
    }
})
let navbackgroundbutton=document.getElementById("navbackgroundbutton")
let nav_background=document.getElementById("nav_background")

navbackgroundbutton.addEventListener("click",function(){
    if(nav_background.style.display==="block"){
        nav_background.style.display=`none`
    }else{
        nav_background.style.display=`block`
       
    }

})

document.addEventListener("click",function(event){
    if(!nav_background.contains(event.target) && event.target!==navbackgroundbutton){
        nav_background.style.display=`none`
    }
})



//complete search operations

searching.addEventListener("input",function(){

   if(searching.value!==""){
    
    let search=searching.value.toLowerCase()

    let filtersongs=songs.filter(function(song){
        return song.toLowerCase().includes(search)
       
    }) 

    songlist.innerHTML=""


    if(filtersongs.length>0){
        const ul=document.createElement("ul")
        
        filtersongs.forEach(function(song)
        {
           const li=document.createElement("li") 
         
           let button=document.createElement("button") 
           button.textContent=song 

           button.addEventListener("click",function(){
            searchplay(song)
           })
           li.appendChild(button)  
          ul.appendChild(li)
        
          
        
        })
        songlist.appendChild(ul)
    }
    else{
        songlist.textContent="try something else"
    } }


})




    
function searchplay(song){
    for(let k=0;k<songs.length;k++){
        if(songs[k].toLowerCase()===song.toLowerCase()){

            if(audio){
                audio.pause()
                isplaying=false
            }
            i=k
            audio=new
            Audio(songs[k])
            playstop()

        }
    }
}
    
//extra space removal
document.addEventListener("click",function(event){
   
    if(event.target!==searchbutton ){
      
        songlist.textContent=""
    }
})

document.addEventListener("click",function(event){
    if(event.target!==searchbutton )
        searching.value=""
        
})



