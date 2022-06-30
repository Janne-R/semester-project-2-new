const deleteRequest = async (url, token) => {

  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const response = await fetch(url, options);
  if (response.ok) {
    const json = await response.json();
    return json;

  }
  throw new Error("request failed");
};

export default deleteRequest;