const mockApi = `https://62d1010cd9bf9f170590bf69.mockapi.io/Items?page=1&limit=4`;

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
  fetch(`${mockApi}&category=${categoryId}`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setPizzas(json);
      setIsLoading(false);
    });
};

export const sortedPizza = async (
  categoryId,
  sortProperty,
  setPizzas,
  searchValue,
  setIsLoading,
) => {
  setIsLoading(true);
  fetch(
    `${mockApi}&${
      categoryId !== null ? `category=${categoryId}` : ''
    }&_sortBy=${sortProperty}&_order=desc${searchValue ? `&search=${searchValue}` : ''}`,
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setPizzas(json);
      setIsLoading(false);
    });
};
