Validator({
    form: "#myForm",
    errorMessages: ".formMessages",
    rules: [
        Validator.isRequired("#fullName"),
        Validator.isEmail("#email"),
        Validator.isPassword("#password"),
        Validator.isPasswordConfirm("#passwordConfirm", ()=>{
            return document.querySelector("#myForm #password").value;
        }, "Mật khẩu chưa khớp!")
    ]
})