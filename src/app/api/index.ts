import { ipcMain } from "electron";
import { DatabaseOperationsObject, IPC_DatabaseOperationQuery, IPC_DatabaseOperation_Arguments, IPC_TableOperationQuery, IPC_TableOperation_Arguments, TableOperationsObject } from "./types";
import { ElectronAPI } from "../constants";

const DatabaseOperations: DatabaseOperationsObject = {
    CREATE: (_event, Database, Value) => { return }
}

const TableOperations: TableOperationsObject = {
    ADD: () => { return },
    MODIFY: () => { return },
    QUERY: () => { return },
    DELETE: () => { return }
}

ipcMain.on("DatabaseOperation", (_event, args: IPC_DatabaseOperation_Arguments | IPC_TableOperation_Arguments) => {
    const { Target, Query } = args;
    if (Target === ElectronAPI.DATABASE) {
        const { Database, Operation, Value }: IPC_DatabaseOperationQuery = Query;
        DatabaseOperations[Operation as keyof typeof DatabaseOperations](_event, Database, Value)
    } else if (Target === ElectronAPI.TABLE) {
        const { Database, Operation, Value }: IPC_TableOperationQuery = Query;
        TableOperations[Operation as keyof typeof TableOperations](_event, Database, Value)
    }
    return;
});