import ROUTES from "../constants/routes";
export const headerData = {
  navigation: [
    {
      label: "SERVICES",
      to: ROUTES.SERVICES,
    },
    {
      label: "COLLECTION",
      to: ROUTES.HOME,
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
      to: ROUTES.HOME,
    },
    {
      label: "SIGN UP",
      to: ROUTES.HOME,
    },
  ],
};
