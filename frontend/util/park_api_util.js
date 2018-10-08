export const fetchParks = (bounds) => {
  return $.ajax({
    method: 'GET',
    url: '/api/parks',
    data: {bounds}
  });
};

export const createPark = (park) => {
  return $.ajax({
    method: 'POST',
    url: '/api/parks',
    data: park
  });
};
