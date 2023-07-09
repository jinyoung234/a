export const genNewState = (state, name) => {
  const { menu, curCategory } = state;
  const newState = {
    ...state,
    menu: {
      ...menu,
      [curCategory]: [
        ...menu[curCategory],
        { id: menu[curCategory].length + 1, name, isSoldOut: false },
      ],
    },
  };
  return newState;
};
