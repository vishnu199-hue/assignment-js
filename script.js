function validateName(){
    let nameerror = document.getElementById('username-error')
    let name = document.getElementById('username')


    if(name.Value.trim() == ''){
        nameerror.innerHTML = 'cannot be blank!!'
        return false
    }
    else if(name.value.length < 4){
        nameerror.innerHTML = 'userName must be more than 5 charactors'
        return false
    }
    else {
        nameerror.innerHTML = ''
        return true
    }
}