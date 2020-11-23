import * as React from "react";

export type PropData = { key: string; namespace: string; type: string };

export type ClickData = { namespace: string; type: string };

export type ClickEventHandler = (
  e: React.MouseEvent<HTMLElement, MouseEvent>,
  data: ClickData
) => void;

export type ChangeEventHandler = (data: any) => void;
