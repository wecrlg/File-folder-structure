export interface ExplorerProps {
  id: number;
  name: string;
  isFolder: boolean;
  items: ItemsProp[];
}

export interface ItemsProp {
  id: number;
  name: string;
  isFolder: boolean;
  items: [] | ItemsProp[];
}
