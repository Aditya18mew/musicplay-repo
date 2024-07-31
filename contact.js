const personname=document.getElementById("name")
const email=document.getElementById("email")
const message=document.getElementById("message")
const submit=document.getElementById("submit")


let names=[]
let emails=[]
let messages=[]



submit.addEventListener("click",function(){
    names.push(personname.value)
    emails.push(email.value)
    messages.push(message.value)

personname.value=""
email.value=""
message.value=""

  
})

