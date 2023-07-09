export const genNewMenu = (state, name) => {
  const { menu, curCategory } = state;
  const newState = {
    ...state,
    menu: {
      ...menu,
      [curCategory]: [
        ...menu[curCategory],
        { id: menu[curCategory].length, name, isSoldOut: false },
      ],
    },
  };
  return newState;
};

export const genDeleteMenu = (state, id) => {
  const { menu, curCategory } = state;
  menu[curCategory].splice(id, 1);
  return { menu, curCategory };
};
