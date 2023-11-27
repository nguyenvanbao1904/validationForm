Validator({
    form: "#myForm",
    errorMessages: ".formMessages",
    rules: [
        Validator.isRequired("#fullName"),
        Validator.isEmail("#email"),
        Validator.isPassword("#password"),
        Validator.isPasswordConfirm("#passwordConfirm")
    ]
})