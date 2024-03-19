// See the Electron documentation for details on how to use preload scripts:

import { contextBridge, ipcRenderer } from "electron";

// Local
import { OrderJsApi_Def, TypeEventWindow } from "./types";

function EventWindow(typeEvent: TypeEventWindow) {
    ipcRenderer.send(typeEvent);
}

// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const OrderJsApi: OrderJsApi_Def = {
    EventWindow
};

contextBridge.exposeInMainWorld("OrderApi", OrderJsApi);