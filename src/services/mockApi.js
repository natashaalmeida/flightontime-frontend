export const predictFlightMock = async (data) => {
  console.log("Dados enviados:", data);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        delayed: Math.random() > 0.5,
        probability: Math.random().toFixed(2),
      });
    }, 1000);
  });
};
