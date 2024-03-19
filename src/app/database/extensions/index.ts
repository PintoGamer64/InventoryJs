type ErrorHandlingType = {
    _ErrorMessage: string
    SetErrorMessage: (Message: string) => void
    CreateError: (Message: string, Response: string | (() => unknown)) => string | void
}

export default class ErrorHandling implements ErrorHandlingType{
    public _ErrorMessage: string;

    SetErrorMessage(Message: string) { this._ErrorMessage = Message; }

    CreateError(Message: string, Response: string | (() => unknown)) {
        this.SetErrorMessage(Message);
        console.log(this._ErrorMessage);
        if (typeof Response === "string") {
            return Response;
        } else {
            Response()
            return;
        }
    }
}