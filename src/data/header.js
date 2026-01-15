import ROUTES from "../constants/routes";
export const headerData = {
  navigation: [
    {
      label: "SERVICES",
      to: ROUTES.SERVICES,
    },
    {
      label: "COLLECTION",
      to: ROUTES.COLLECTIONS,
    },
    {
      label: "SELL/PAWN",
      to: ROUTES.SELL_PAWN,
    },
    {
      label: "ABOUT",
      to: ROUTES.ABOUT_US,
    },
    {
      label: "CONTACT",
      to: ROUTES.CONTACT_US,
    },
  ],
  authentication: [
    {
      label: "SIGN IN",
      to: ROUTES.SIGN_IN,
    },
    {
      label: "SIGN UP",
      to: ROUTES.SIGN_UP,
    },
  ],
};
