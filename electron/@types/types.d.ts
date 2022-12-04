export type Character =
  | {
      id: number;
      name: string;
      iconPath: string;
      guardType: string;
      orderFormation: number;
    }
  | undefined;

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

export type SetSelectedSearchTabIndex = React.Dispatch<
  React.SetStateAction<number>
>;

export type SetSelectedCharacters = React.Dispatch<
  React.SetStateAction<Characters[]>
>;
