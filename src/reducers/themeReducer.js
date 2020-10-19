import constants from '../constants/theme';

export const initialState = {
  isLightTheme: false,
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SWITCH_THEME:
      return {
        ...state, 
        isLightTheme: !state.isLightTheme 
      };
    default:
      return state;
  }
}