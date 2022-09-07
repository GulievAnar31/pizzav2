export type IQueryObjType = {
  category: string;
  page: string;
  search: string;
  sortBy: string;
}

export type IState = {
  basket: PizzaItemType[];
  basketInfo: {
    price: number;
    allPizzas: number;
  }
}

export type IBasketInfo = {
  basketInfo: {
    price: number;
    allPizzas: number;
  }
}

export type ICurrentPizza = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  types: number[];
  sizes: number[];
}

export type PizzaItemType = {
  id: string;
  name: string;
  price: number;
  type: number;
  size: number;
  img: string;
}

export type PizzaBlockProps = {
  title: string;
  price: number;
  imageUrl: string;
  id: string;
  sizes: number[];
  types: number[];
}

export type PizzaInBasketProps = {
  item: {
    img: string;
    name: string;
    price: number;
  },
  index: number;
}

export type StateType = {
  basket: PizzaItemType[];
}

export type ParamsType = {
  page?: any;
  categorie: number;
  sort: string;
  search: string;
}

export type AddPizzaActionType = {
  id: string,
  name: string,
  price: number,
  type: number,
  size: number,
  img: string
}

export type IActionAddPizza = {
  type: string;
  payload: AddPizzaActionType;
}

export type IActionDeletePizza = {
  type: string;
  payload: AddPizzaActionType[];
}

export type AsyncThunkConfig = {
  /** return type for `thunkApi.getState` */
  state?: unknown;
  /** type for `thunkApi.dispatch` */
  dispatch?: any;
  /** type of the `extra` argument for the thunk middleware, which will be passed in as `thunkApi.extra` */
  extra?: unknown;
  /** type to be passed into `rejectWithValue`'s first argument that will end up on `rejectedAction.payload` */
  rejectValue?: unknown;
  /** return type of the `serializeError` option callback */
  serializedErrorType?: unknown;
  /** type to be returned from the `getPendingMeta` option callback & merged into `pendingAction.meta` */
  pendingMeta?: unknown;
  /** type to be passed into the second argument of `fulfillWithValue` to finally be merged into `fulfilledAction.meta` */
  fulfilledMeta?: unknown;
  /** type to be passed into the second argument of `rejectWithValue` to finally be merged into `rejectedAction.meta` */
  rejectedMeta?: unknown;
  rejectWithValue: (value: string) => void;
};

export type PizzaStateType = {
  page: number;
  categorie: number;
  sort: string;
  search: string;
  pizzas: PizzaItemType[];
  status: string;
};

export type BasketInfoType = {
  price: number;
  allPizzas: number;
}
