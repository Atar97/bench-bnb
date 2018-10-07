export const fetchParks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/parks'
  });
};

export const createPark = (park) => {
  return $.ajax({
    method: 'POST',
    url: '/api/parks',
    data: park
  });
};
