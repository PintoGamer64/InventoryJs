import { createConnection, Connection } from 'mysql2';

// Local
import ErrorHandling from "./extensions"

type DatabaseContructor = {
    User: string
    Name: string
    ConnectionURI: string
    Password: string
}

type DatabaseTypes = {
    GetDBName: () => string
    CreateConnection: () => Connection
}

export default class Database extends ErrorHandling implements DatabaseTypes {
    protected _DBUser: string;
    protected _DBName: string;
    protected _DBConnectionURI: string;
    protected _DBPassword: string;

    // Contructor
    constructor({ Name }: DatabaseContructor) {
        super()
        this._DBName = Name;
    }

    // Get Methods
    public GetDBName() { return this._DBName }

    public CreateConnection() {
        return createConnection({
            user: this._DBUser,
            database: this._DBName
        });
    }
}