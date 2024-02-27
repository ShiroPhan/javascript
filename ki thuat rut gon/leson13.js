function validate(fullname){
    if(!fullname.firstname)
        return false;
    if(!fullname.lastname)
        return false;
    return true;
}
console.log(validate({firstname: 'duy',lastname: 'buffet'}));

//tai su dung
const rule = {
    firstname: {
        required:true
    },
    lastname:{
        required:true
    }
}

const validate = {rule ,values} => {
    for(prop in rule){
        if(rule[prop].required){
            if(!values[prop]){
                return false;
            }
        }
    }
    return true;
}

console.log(validate(rule,{firstname:'duy'})); //false
console.log(validate(rule,{firstname:'duy',lastname:'buffet'})); //true
