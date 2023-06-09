class CustomAPIError extends error {
    constructor(message , statuscode){
        super(message)
        this.statuscode = statuscode
    }

}

const createCustomError = (msg, statuscode) => {
    return new CustomAPIError(msg, statuscode)
}

module.exports = { createCustomError, CustomAPIError}