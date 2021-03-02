export const createFetchEndpoint = (endpoint, initialData) => {
  return (api, options) => {
    if (api === endpoint) {
      return new Promise(resolve => {
        let results = initialData;
        if (options.load) {
          results = [];
          for (let i = 0; i < options.load; i++) {
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

    return fetch(api, options);
  };
};
