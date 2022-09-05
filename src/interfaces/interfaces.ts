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
