export type Character = {
  name: string;
  iconPath: string;
  guardType: string;
  orderFormation: number;
};

export type Characters = Map<number, Character>;

export type Guards =
  | {
      allGuards: Characters;
      avantGuards: Characters;
      middleGuards: Characters;
      rearGuards: Characters;
    }
  | undefined;

type TabIndex = number;

export type SearchRequest = {
  tabIndex: TabIndex;
  setIndex: (index: number) => void;
  charactersSelectedTabs: Map<TabIndex, Characters>;
  setSelectedCharacters: (characters: Characters) => void;
};

export type SearchCharactersAction = 'index' | 'character';
