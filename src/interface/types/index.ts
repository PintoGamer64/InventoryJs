type TypeEventWindow = 'minimize' | 'close' | 'restore';
export type OrderJsApi_Def = {
    EventWindow: (typeEvent: TypeEventWindow) => void
}