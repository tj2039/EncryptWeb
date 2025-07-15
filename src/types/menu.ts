// types/menu.ts
export interface MenuSubItem {
  label: string;
  path: string;
}

export interface MenuGroup {
  label: string;
  children: MenuSubItem[];
}

export interface MenuCategory {
  category: string;
  items: MenuGroup[];
}