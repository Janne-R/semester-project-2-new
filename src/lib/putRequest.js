const putRequest = async (url, data, token) => {

  const options = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };

  const response = await fetch(url, options);
  if (response.ok) {
    const json = await response.json();
    console.log(json);
    return json;

  }
  throw new Error("request failed");
};

export default putRequest;