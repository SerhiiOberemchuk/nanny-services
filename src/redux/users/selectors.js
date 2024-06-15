export const selectorIsLoggedIn = (state) => state.users.isLoggedIn;
export const selectorIsModalLogin = (state) => state.users.isModalLogin;
export const selectorIsModalRegistration = (state) =>
  state.users.isModalRegistration;
export const selectorIsLoadingUsers = (state) => state.users.loading;
export const selectorUserId = (state) => state.users.userId;
export const selectorFavoritesNannies = (state) => state.users.favoritesNannies;
export const selectorIsLoadingNannies = (state) => state.users.loading;
export const selectorNanniesArrey = (state) => state.users.nanniesArray;
