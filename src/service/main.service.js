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
