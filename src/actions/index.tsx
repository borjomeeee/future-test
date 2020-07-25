import { ITableItem } from "../models/TableItem.model";

export type IAppReducerSyncActions =
  | ReturnType<typeof loadDataAction>
  | ReturnType<typeof loadDataSuccessAction>
  | ReturnType<typeof loadDataFailedAction>
  | ReturnType<typeof clearErrorAction>;

export type IAppReducerActions =
  | ReturnType<typeof loadData>
  | IAppReducerSyncActions;

export type IAsyncAction = (
  dispatch: React.Dispatch<IAppReducerActions>
) => void;

export const loadData = (url: string): IAsyncAction => async (
  dispatch: React.Dispatch<IAppReducerActions>
) => {
  dispatch(loadDataAction());
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data)) {
        const validData = data.map(
          (item: any) =>
            ({
              id: item["id"] || Date.now(),
              firstName: item["firstName"] || "",
              lastName: item["lastName"] || "",
              email: item["email"] || "",
              phone: item["phone"],
              address: {
                streetAddress: item["address"]["streetAddress"] || "",
                city: item["address"]["city"] || "",
                state: item["address"]["state"] || "",
                zip: item["address"]["zip"] || "",
              },
              description: item["description"] || "",
            } as ITableItem)
        );
        console.log(validData);
        dispatch(loadDataSuccessAction(validData));
      } else {
        dispatch(loadDataFailedAction("Ошибка обработки данных с сервера"));
      }
    })
    .catch(() => dispatch(loadDataFailedAction("Ошибка загруки данных")));
};

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
