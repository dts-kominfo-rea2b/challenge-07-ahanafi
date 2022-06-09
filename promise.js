const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  const ixx = await promiseTheaterIXX();
  const vgc = await promiseTheaterVGC();

  const ixxFiltered = ixx.filter(movie => movie.hasil === emotion);
  const vgcFiltered = vgc.filter(movie => movie.hasil === emotion);

  return (ixxFiltered.length + vgcFiltered.length);
}

module.exports = {
  promiseOutput,
};
