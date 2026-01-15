import { assets } from "../constants/assets";
export const servicesData = {
  hero: {
    title: "Gold & Silver:",
    highlightTitle: "Redefining Luxury Transactions",
    description:
      "At Gold & Silver, we provide specialized services in the buying, selling, and pawning of luxury watches and precious metals. With years of experience and deep market knowledge, we offer accurate evaluations, highly competitive rates, and immediate transactions, all conducted with absolute discretion. Our watch division features an extensive selection of prestigious timepieces, supported by expert authentication and global sourcing. Whether you are selling, acquiring, or leveraging the value of your assets, Gold & Silver delivers a refined, transparent, and professional experience at every step.",
  },
  sellYourItems: {
    header: "SELL YOUR ITEMS",
    title: "Get the Best Price for Your Luxury Pieces",
    icon: assets.dollar,
    tickIcon: assets.charm_tick,
    description:
      "Looking to sell your luxury watch or jewelry? We offer competitive prices based on current market values, ensuring you get the best return on your investment.",
    features: [
      "Free expert valuation within 24 hours",
      "Competitive market-based pricing",
      "Quick and secure payment",
      "No hidden fees or commissions",
    ],
    button: {
      label: "Sell Now",
      link: "#",
    },
  },
  buyLuxuryItems: {
    header: "BUY LUXURY ITEMS",
    title: "Discover Authenticated Luxury Timepieces",
    icon: assets.clock_circle,
    tickIcon: assets.charm_tick,
    description:
      "Browse our curated collection of pre-owned luxury watches. Every piece is thoroughly authenticated by our certified experts and comes with our quality guarantee.",
    features: [
      "100% authenticated inventory",
      "Prices below retail",
      "Secure online payment via Stripe",
      "Watch request service available",
    ],
    button: {
      label: "Browse Collection",
      link: "#",
    },
  },
  pawnServices: {
    header: "PAWN SERVICES",
    title: "Get Cash Without Selling Your Valuables",
    icon: assets.servicse_lock,
    tickIcon: assets.charm_tick,
    description:
      "Need short-term financing? Use your luxury watch or jewelry as collateral. Get the cash you need while keeping ownership of your precious items.",
    features: [
      "Competitive loan rates",
      "Flexible repayment terms",
      "Secure storage of your items",
      "Full KYC verification for security",
    ],
    button: {
      label: "Sell Now",
      link: "#",
    },
  },
  itemsWeAccept: {
    title: "Items We",
    highlightTitle: "Accept",
    description:
      "We specialize in luxury watches and fine jewelry from prestigious brands.",
    items: [
      {
        icon: assets.clock,
        label: "Watch",
      },
      {
        icon: assets.plus,
        label: "Ring",
      },
      {
        icon: assets.plus,
        label: "Necklace",
      },
      {
        icon: assets.plus,
        label: "Bracelet",
      },
      {
        icon: assets.plus,
        label: "Gold Bar",
      },
      {
        icon: assets.plus,
        label: "Bags",
      },
      {
        icon: assets.plus,
        label: "Earrings",
      },
      {
        icon: assets.plus,
        label: "Other",
      },
    ],
  },
};
