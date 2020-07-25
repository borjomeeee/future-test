import { ITableItem } from "../models/TableItem.model";

export type IAppReducerSyncActions =
  | ReturnType<typeof loadDataAction>
  | ReturnType<typeof loadDataSuccessAction>
  | ReturnType<typeof loadDataFailedAction>
  | ReturnType<typeof clearErrorAction>;

export type IAppReducerActions =
  | ReturnType<typeof loadSmallData>
  | ReturnType<typeof loadBigData>
  | IAppReducerSyncActions;

export type IAsyncAction = (
  dispatch: React.Dispatch<IAppReducerActions>
) => void;

export const loadSmallData = (): IAsyncAction => async (
  _: React.Dispatch<IAppReducerActions>
) => {};
export const loadBigData = (): IAsyncAction => async (
  _: React.Dispatch<IAppReducerActions>
) => {};

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
