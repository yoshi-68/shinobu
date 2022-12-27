export type Character = {
  id: number;
  name: string;
  iconPath: string;
  guardType: string;
  orderFormation: number;
};

export type CharacterGroup = {
  allTab: Character[];
  forwardTab: Character[];
  middleTab: Character[];
  backwardTab: Character[];
};

type TabIndex = number;

export type SearchRequest = {
  selectedTabIndex: number;
  charactersSelectedTabs: Map<TabIndex, Characters[]>;
};

export type SetSelectedSearchTabIndex = React.Dispatch<
  React.SetStateAction<number>
>;

export type setTeam1Characters = React.Dispatch<
  React.SetStateAction<number[] | undefined>
>;
