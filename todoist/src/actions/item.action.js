import * as itemConst from "../constants/action-types";

// j'ai créé un fichier constants "action-types" pour les constants, vous êtes pas obligé, mais c'est plus propre
export const setItem = items => ({
  type: itemConst.ADD_ITEM,
  payload: items
});
