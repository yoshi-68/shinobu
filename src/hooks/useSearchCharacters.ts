export {};

// import { createContext, useCallback, useReducer, useState } from 'react';
// import {
// SearchRequest,
//   SearchCharactersAction,
//   SelectedCharacters,
// } from 'types';

// export const initialState = createContext<SearchRequest>({
//   tabIndex: 1,
//   setIndex: () => {},
//   selectedCharacters: new Map<number, SelectedCharacters>(),
//   setSelectedCharacters: () => {},
// });

// const initialState = new Map<number, SelectedCharacters>();
// type Store = {};
// export const setSelectedCharacters = (
//   state: Store,
//   action: SearchCharactersAction
// ): void => {};

// export const useSearchCharacters = (): RequestCharacters => {
//   const [tabIndex, setTabIndex] = useState(1);
//   const [selectedCharacters, dispatch] = useReducer(
//     setSelectedCharacters,
//     initialState
//   );
//   const setIndex = useCallback((index: number): void => {
//     setTabIndex(index);
//   }, []);
//   return {
//     tabIndex,
//     setIndex,
//   };
// };
