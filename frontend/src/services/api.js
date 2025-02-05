export const sendMessageToAPI = async (message) => {
    // Simulate an API call
    return new Promise((resolve) =>
      setTimeout(() => resolve({ response: `Response to: ${message}` }), 1000)
    );
  };
  