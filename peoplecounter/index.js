let count=0
let countEl= document.getElementById('count_no')
let saveEl=document.getElementById("previous")

function increment(){
    count+=1
    countEl.textContent=count
}
function save(){
    saveEl.textContent+=count+" - "   
    count=0
    countEl.textContent=0
}

