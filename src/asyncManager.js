export async function getResponse(url, api_key) {
  var x = await fetch(url, {
    method: 'GET',
    withCredentials: true,
    headers: {
      'X-Auth-Token': api_key,
      'Content-Type': 'application/json',
    },
  });
  return x;
}
