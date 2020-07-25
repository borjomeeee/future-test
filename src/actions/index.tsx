import { ITableItem } from "../models/TableItem.model";

export const loadSmallData = () => async (dispatch: React.Dispatch<any>) => {};
export const loadBigData = () => async (dispatch: React.Dispatch<any>) => {};

export const loadDataAction = () =>
  ({
    type: "LOAD_DATA",
  } as const);

export const loadDataSuccessAction = (items: ITableItem[]) =>
  ({
    type: "LOAD_DATA_SUCCESSED",
    payload: { items },
  } as const);

export const loadDataFailedAction = (error: string) =>
  ({
    type: "LOAD_DATA_FAILED",
    payload: { error },
  } as const);

export const clearErrorAction = () =>
  ({
    type: "CLEAR_ERROR",
  } as const);
