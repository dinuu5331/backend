class ApiError extends Error{
    construtor(
        StatusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message);
        this.StatusCode = StatusCode;
        this.errors = errors;
        this.stack = stack;
        this.date =null;

        if(stack){
            this.stack = stack;
        }
        else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {ApiError}