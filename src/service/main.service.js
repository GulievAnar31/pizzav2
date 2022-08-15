const mockApi = `https://62d1010cd9bf9f170590bf69.mockapi.io/Items?`;

export const getPizzas = async (
  setPizzas,
  setIsLoading,
  page,
  categoryId,
  sortProperty,
  searchValue
  ) => {
  const url = `page=${page}&` + 
  `${categoryId ? `&category=${categoryId}` : ''}` + 
  `${sortProperty ? `&sortBy=${sortProperty}&order=asc` : `&sortBy=rating&order=asc`}` +
  `${searchValue ? `&search=${searchValue}` : ''}`;

  setIsLoading(true);
  await fetch(mockApi + url)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      if(json.length > 0) setPizzas(json);
      setIsLoading(false);
    });
}; 