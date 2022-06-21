const postRequest = async (url, data) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json"
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

export default postRequest;