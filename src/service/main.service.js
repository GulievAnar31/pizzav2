const mockApi = `https://62d1010cd9bf9f170590bf69.mockapi.io/Items?`;

export const getPizzas = async (
  setPizzas,
  setIsLoading,
  page,
  categoryId,
  sortProperty,
  searchValue
  ) => {
  
    console.log(searchValue, categoryId, sortProperty);
  const url = `page=${page}&limit=5` + 
  `${categoryId ? `&category=${categoryId}` : ''}` + 
  `${sortProperty ? `&sortBy=${sortProperty}&order=asc` : `&sortBy=rating&order=asc`}` +
  `${searchValue ? `&search=${searchValue}` : ''}`;

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