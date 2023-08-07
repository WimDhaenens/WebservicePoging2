let {
  RITTEN,
  TREINEN
} = require('../data/mock_data_treinen');

const getAll = () => {
  return {
    treinen: TREINEN,
    ritten: RITTEN,
    treinenCount: TREINEN.length,
    rittenCount: RITTEN.length
  };
}


const getById = (id) => {
  let trein;
  trein = TREINEN.find((t) => t.id === parseInt(id));
  if (trein) return trein;
  else return (`trein met ${id} is niet in de database...`);
}

const updateById = (id,
  items) => {
  let treinUpdated;
  treinUpdated = TREINEN.find(t => t.id === parseInt(id));
  if (!treinUpdated) {
    return (`de trein met ${parseInt(id)} bestaat niet.
  `)
  } else {

    // return (`naam ${items.naam } ,
    // nummer ${items.nummer},
    // aandrijving  ${items.aandrijving},
    // type  ${items.type},
    // eingenaar ${items.eigenaar},
    // huurder ${items.huurder},
    //foto ${items.foto}`);
    
    treinUpdated.id=parseInt(id);
    treinUpdated.naam=items.naam;
    treinUpdated.nummer=items.nummer;
    treinUpdated.aandrijving=items.aandrijving;
    treinUpdated.type=items.type;
    treinUpdated.eigenaar=items.eigenaar;
    treinUpdated.huurder=items.huurder;
    treinUpdated.foto=items.foto;
  };

  return treinUpdated;
}


const create = ({
  naam,
  nummer,
  aandrijving,
  type,
  eigenaar,
  huurder,
  foto
}) => {

  if (TREINEN.find(trein => trein.nummer === nummer))
    return (`Trein met nummer ${nummer} bestaat al`)

  let rating = 0;
  let newFoto = 'Moet nog gemaakt worden';
  if (foto) newFoto = foto;
  const newTrein = {
    id: Math.max(...TREINEN.map(t => t.id)) + 1,
    naam,
    nummer,
    aandrijving,
    type,
    eigenaar,
    huurder,
    rating,
    "foto": newFoto,
  }

  TREINEN.push(newTrein);
  //  = {
  //   TREINEN,...newTrein
  // }
  return (newTrein);

  //}
};

const deleteById = (id) => {
  TREINEN = TREINEN.filter(t => t.id !== parseInt(id));
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
}