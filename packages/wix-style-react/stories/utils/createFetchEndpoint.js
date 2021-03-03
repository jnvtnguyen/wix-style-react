export const createFetchEndpoint = (endpoint, initialData) => {
  return api => {
    const url = new URL(api);
    if (url.pathname === endpoint) {
      return new Promise(resolve => {
        let results = initialData;
        if (url.searchParams.get('items')) {
          results = [];
          for (let i = 0; i < url.searchParams.get('items'); i++) {
            results.push(
              initialData[
                Math.floor(Math.random() * Math.floor(initialData.length))
              ],
            );
          }
        }

        return setTimeout(() => resolve(results), 1000);
      });
    }

    return fetch(api);
  };
};
