export const addParamsInUrl = (page, categorie, sort, search, isMounted, navigate, qs) => {
  if(isMounted.current){
    const queryObj = {
      page: 1,
      sortBy: sort ?? 'rating',
      search: search ?? '',
      category: Number(categorie)
    };

    const queryStr = qs.stringify(queryObj);

    if(window.location.search.substring(1) !== queryStr){
      navigate(`?${queryStr}`);
    }
  }
  isMounted.current = true;
}