import { Map, List } from 'immutable';

export function mergeDeeplyElements(page1, page2) {
  const mergedMap = Map(page1).mergeDeep(Map(page2));
  const mergedList = List(mergedMap.valueSeq());
  return mergedList;
}
