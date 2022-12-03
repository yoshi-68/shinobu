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
  selectedTabIndex: number;
  charactersSelectedTabs: Map<TabIndex, Characters[]>;
};

export type SearchCharactersAction = 'index' | 'character';
export type SetSelectedSearchTabIndex = React.Dispatch<
  React.SetStateAction<number>
>;
