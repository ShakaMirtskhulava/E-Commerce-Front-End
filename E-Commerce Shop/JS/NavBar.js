let sendwichIcon = document.getElementById('SendwichIcon');
let lowerNavBar = document.getElementById('LowerNavBar');


var clicked = false;
sendwichIcon.addEventListener('click', () => {
    
    if(lowerNavBar.style.display != 'flex'){
        lowerNavBar.style.display = 'flex';
        clicked = true;
    }
    else{
        lowerNavBar.style.display = 'none';
        clicked = false;
    }

});

function checkSize(){
    if(clicked && window.innerWidth >500){
        lowerNavBar.style.display = 'flex';
    }

    if(sendwichIcon.style.display != 'none' && window.innerWidth >500){
        lowerNavBar.style.display = 'flex';
    }
}
window.addEventListener('resize', () => {
    checkSize();
});
checkSize();
