function switchTab(tab){

document
.querySelectorAll(
'.tab-content'
)
.forEach(el=>{

el.classList.remove(
'active'
);

});

document
.querySelectorAll(
'.tab'
)
.forEach(el=>{

el.classList.remove(
'active'
);

});

document
.getElementById(
tab+'Tab'
)
.classList.add(
'active'
);

event.target
.classList.add(
'active'
);

}
