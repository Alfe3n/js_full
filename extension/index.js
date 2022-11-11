
let myLeads=[]
const text_input_el=document.getElementById("text_input")
let list_el=document.getElementById("list")
const save_btn_el=document.getElementById("save_btn")
localStorage.clear()
save_btn_el.addEventListener("click",function(){
  myLeads.push(text_input_el.value)
  renderLeads()
  text_input_el.value=" "

}
)
function renderLeads(){
  listItems=" "
  for(i=0;i<myLeads.length;++i)
  listItems+=`
  <li>
      <a href='${myLeads[i]}' target='_blank'>
        ${myLeads[i]}
      </a>
  </li>
  `
  list_el.innerHTML=listItems
}
