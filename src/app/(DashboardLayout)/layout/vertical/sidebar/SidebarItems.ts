
export interface ChildItem {
  id: string;
  url: string;
  icon?: string;
  name: string;
  color?: string;
  children?: ChildItem[];
}
