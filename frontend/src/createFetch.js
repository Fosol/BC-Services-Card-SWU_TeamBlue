
/**
 * Creates a wrapper function around the HTML5 Fetch API that provides
 * default arguments to fetch(...) and is intended to reduce the amount
 * of boilerplate code in the application.
 * https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
 */
function createFetch(
  fetch,
  options,
) {
  // NOTE: Tweak the default options to suite your application needs
  const defaults = {
    method: 'POST', // handy with GraphQL backends
    mode: options.baseUrl ? 'cors' : 'same-origin',
    credentials: options.baseUrl ? 'include' : 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(options.cookie ? { Cookie: options.cookie } : null),
    },
  };

  return async (url, options) => {
    return fetch(url, options);
  };
}

export default createFetch;
