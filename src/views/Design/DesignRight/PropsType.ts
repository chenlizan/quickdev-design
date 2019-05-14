export type PropData = { key: string, namespace: string, type: string };

export type ClickData = { namespace: string, type: string };

export type ClickEventHandler = (e: MouseEvent, data: ClickData) => void;

export type ChangeEventHandler = (data: any) => void;