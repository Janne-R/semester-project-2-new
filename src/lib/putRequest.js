const putRequest = async (url, token) => {

  const data = JSON.stringify({
    title: title,
    shortDescription: shortDescription,
    longDescription: longDescription,
    code: code,
  });

  const formData = new FormData();
  formData.append("data", data);

  const options = {
    method: "PUT",
    body: formData,
    headers: {
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