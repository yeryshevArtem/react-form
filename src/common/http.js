function http(url, params) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const { body, method } = params;
    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        const data = await response.json();
        resolve(data);
      }
      throw new Error(response.statusText);
    } catch (err) {
      reject(err);
    }
  });
}

export default http;
