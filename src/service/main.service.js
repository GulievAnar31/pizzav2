const mockApi = `https://62d1010cd9bf9f170590bf69.mockapi.io/Items?`;

export const getPizzas = async (setPizzas, setIsLoading, page) => {
  const url = `page=${page}&limit=4`;

  setIsLoading(true);
  fetch(mockApi + url)
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
