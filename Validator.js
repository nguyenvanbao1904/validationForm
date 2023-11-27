const Validator = function({form, errorMessages, rules}){

    const validate = (inputElement, rule)=>{
        let errorMess = rule.test(inputElement.value);
        let parentElement = inputElement.parentElement;
                if(errorMess){
                    parentElement.querySelector(errorMessages).innerHTML = errorMess;
                    parentElement.classList.add('invalid')
                } else{
                    parentElement.classList.remove('invalid')
                }
    }

    const formElement = document.querySelector(form);
    rules.forEach(rule => {
        let inputElement = formElement.querySelector(rule.selector);
        if(inputElement){
            inputElement.onblur = function(){
                validate(inputElement, rule)
            }

            inputElement.oninput = function(){
                inputElement.parentElement.querySelector(errorMessages).innerHTML = '';
                inputElement.parentElement.classList.remove('invalid')
            }
        }
    });
}

Validator.isRequired = (selector)=>({
    selector,
    test: (value)=> value.trim() ? undefined : "Vui lòng nhập trường này!"
})

Validator.isEmail = (selector)=>({
    selector,
    test: (value)=> /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? undefined : "Email chưa hợp lệ!"
})

Validator.isPassword = (selector)=>({
    selector,
    test: (value)=> /^[A-Za-z]\w{7,14}$/.test(value) ? undefined : "Mật chưa hợp lệ!"
})

Validator.isPasswordConfirm = (selector)=>({
    selector,
    test: (value)=> value.trim() ? undefined : "Vui lòng nhập trường này!"
})