let {
  RITTEN
} = require('../data/mock_data_treinen.js');


const getAll = async () => {
    return Promise.resolve ({ritten : RITTEN, aantal: RITTEN.length});
}

const getById = (id) => {
  let rittenWithId = RITTEN.find((rit) => rit.id === parseInt(id));
  if (!rittenWithId) throw new Error(`Rit met id ${id} niet gevonden`);
  return rittenWithId;
}

const create = (rit) => {
  RITTEN.push(rit);
  return rit;
}

const deleteById = (id) => {
  RITTEN = RITTEN.filter((rit) => rit.id != id);
}

const updateRit = (id, rit) => {
  let bestaandeRit = getById(id);
  bestaandeRit = rit;  
  return bestaandeRit;
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateRit
}