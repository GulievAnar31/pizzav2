const mockApi = `https://62d1010cd9bf9f170590bf69.mockapi.io/Items`;

export const getPizzas = async (setPizzas, setIsLoading) => {
  setIsLoading(true);
  fetch(mockApi)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setPizzas(json);
      setIsLoading(false);
    });
};

export const sortCategoryPizza = async (categoryId, setPizzas, setIsLoading) => {
  setIsLoading(true);
  fetch(`${mockApi}?category=${categoryId}`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setPizzas(json);
      setIsLoading(false);
    });
};

export const sortedPizza = async (categoryId, sortProperty, setPizzas, setIsLoading) => {
  setIsLoading(true);
  fetch(
    `${mockApi}${categoryId > -1 && `?category=${categoryId}`}&sortBy=${sortProperty}&order=${
      sortProperty === 'price' ? 'asc' : 'desc'
    }`,
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
      setPizzas(json);
      setIsLoading(false);
    });
};
