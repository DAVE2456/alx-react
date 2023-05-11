import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  return List(page1.concat(page2));
}

export function mergeElements(page1, page2) {
  const mergedObj = { ...page1, ...page2 };
  const mergedMap = Map(mergedObj);

  return List(mergedMap.values());
}
