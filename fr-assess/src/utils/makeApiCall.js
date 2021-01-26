export const makeApiCall = async (searchValue) => {
  const url = new URL("https://pixabay.com/api"),
    params = { key: "20013321-468c9878820209514ae3fb09e", q: searchValue };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  const result = await fetch(url);
  const response = await result.json();
  return response;
};
