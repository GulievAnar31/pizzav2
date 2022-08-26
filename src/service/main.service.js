import axios from "axios";

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

  await setIsLoading(true);

  try {
    const res = await axios.get(mockApi + url);
    await setPizzas(res.data);
    await setIsLoading(false);
  } catch(err) {
    alert(err.mesage);
  }
};