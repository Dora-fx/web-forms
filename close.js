closeBtn.onclick = function(){
    fixedForm.style.display = "none"
}

seePass.onclick = function (){
    if (seePass.checked) {
        pass.type = "text"
    } else {
        pass.type = "password"
    }
}