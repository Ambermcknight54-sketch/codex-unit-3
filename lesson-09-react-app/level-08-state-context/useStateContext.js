import { useContext, useEffect, useState } from "react";

const STATE_CONTEXT_LIST = Symbol.for("STATE_CONTEXT_LIST");

export function useStateContext(key) {
  if (!key) throw new Error("key is required.");

  let map, updateMap, value;
  const Contexts = window[STATE_CONTEXT_LIST];

  for (let Context of Contexts) {
    const contextValue = useContext(Context);
    if (contextValue) {
      const [mapTemp, updateMapTemp] = contextValue;
      if (mapTemp.has(key)) {
        map = mapTemp;
        updateMap = updateMapTemp;
        value = map.get(key);
      }
    }
  }

  if (!map)
    throw new Error(
      "Invalid State Context. Include this component in <StateContext> to give it access.",
    );
  if (!map.has(key))
    throw new Error(
      "Invalid key. Keys must be declare in <StateContext> initialState.",
    );

  return [value, setter];

  /////////////////////////////////////////////////////

  function setter(newValue) {
    map.set(key, newValue);
    updateMap();
  }
}
