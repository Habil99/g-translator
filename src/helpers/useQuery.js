const useQuery = (location) => {
  return new URLSearchParams(location.search)
}

export default useQuery;
