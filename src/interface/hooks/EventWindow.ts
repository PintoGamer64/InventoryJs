import { OrderJsApi_Def } from "../types";

export default function useWindowEvents() {
    //@ts-expect-error Conexion con Electron
    const { EventWindow }: OrderJsApi_Def = window.OrderApi;
    const MinimizeEvent = () => EventWindow('minimize');
    const MaxMinEvent = () => EventWindow('restore');
    const CloseEvent = () => EventWindow('close');

    return {
        MinimizeEvent,
        MaxMinEvent,
        CloseEvent
    }
}