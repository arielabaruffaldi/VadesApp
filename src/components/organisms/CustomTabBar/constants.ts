import Home from "@assets/svg/HomeIcon";

//https://akveo.github.io/eva-icons/#/?searchKey=user&type=outline

export interface OptionItem {
  path: string;
  icon: typeof Home;
  nameCode: number;
}
export const OPTIONS = [
  {
    path: 'Home',
    icon: 'home-outline',
    title: 'Home',
  },
  {
    path: 'Search',
    icon: 'search-outline',
    title: 'Search',
  },
  {
    path: 'Cart',
    icon: 'shopping-cart-outline',
    title: 'Cart',
  },
  {
    path: 'Favourites',
    icon: 'heart-outline',
    title: 'Favoritos',
  },
  {
    path: 'Profile',
    icon: 'person-outline',
    title: 'Profile',
  },
];
