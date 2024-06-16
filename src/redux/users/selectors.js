export const selectorIsLoggedIn = (state) => state.users.isLoggedIn;
export const selectorIsModalLogin = (state) => state.users.isModalLogin;
export const selectorIsModalRegistration = (state) =>
  state.users.isModalRegistration;
export const selectorIsLoading = (state) => state.users.loading;
export const selectorUserId = (state) => state.users.userId;
export const selectorFavoritesNannies = (state) => state.users.favoritesNannies;
export const selectorIsLoadingFavorites = (state) =>
  state.users.loadingFavorites;
export const selectorNanniesArrey = (state) => state.users.nanniesArray;
export const selectorSortOption = (state) => state.users.sortOption;
