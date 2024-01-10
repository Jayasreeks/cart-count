let rupeesEl=document.getElementById("rupees")
let countEl=document.getElementById("count")
let totalEl=document.getElementById("total")
let count=1
let total=totalEl.textContent
let amt=345


function increment(){
    count+=1
    countEl.textContent=count
    let totalamt=count*total
    
}
function decrement(){
    count-=1
    countEl.textContent=count
}

function save(){
    let totalamt=count*amt
    totalEl.textContent=total+totalamt
}