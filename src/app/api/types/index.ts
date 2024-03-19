import { IpcMainEvent } from "electron"

type IPC_Operation_ValueArguments = {
    Database: string,
    Type: "INT" | "VARCHAR" | "DATE" | "JSON",
    Value: number | Date | string | JSON,
    IsPrimary?: boolean,
    IsForeing?: boolean,
    AutoIncrement?: boolean
}

// DatabaseOperation Arguments
export type IPC_DatabaseOperation_Arguments = {
    Target: "DATABASE",
    Query: IPC_DatabaseOperationQuery
}
export type IPC_DatabaseOperationQuery = {
    Database: string,
    Operation: string | "CREATE" | "QUERY" | "MODIFY" | "DELETE",
    Value?: IPC_Operation_ValueArguments[]
}

// TableOperation Object
export type IPC_TableOperation_Arguments = {
    Target: "TABLE",
    Query: IPC_TableOperationQuery
}
export type IPC_TableOperationQuery = {
    Database: string,
    Operation: string | "ADD" | "QUERY" | "MODIFY" | "DELETE",
    Value?: IPC_Operation_ValueArguments[]
}

/**
 * @param _event Electron Event Handler
 * @param Database Database Name to Execute Query
 * @param Value Value To Send At Query
 */
export type DatabaseOperationsObject = {
    CREATE: (_event: IpcMainEvent, Database: string, Value: IPC_Operation_ValueArguments[]) => void
}

/**
 * @param _event Electron Event Handler
 * @param Database Database Name to Execute Query
 * @param Value Value To Send At Query
 */
export type TableOperationsObject = {
    ADD: (_event: IpcMainEvent, Database: string, Value: string | IPC_Operation_ValueArguments[]) => void,
    MODIFY: (_event: IpcMainEvent, Database: string, Value: string | IPC_Operation_ValueArguments[]) => void,
    QUERY: (_event: IpcMainEvent, Database: string, Value: string | IPC_Operation_ValueArguments[]) => void,
    DELETE: (_event: IpcMainEvent, Database: string, Value: string | IPC_Operation_ValueArguments[]) => void
}