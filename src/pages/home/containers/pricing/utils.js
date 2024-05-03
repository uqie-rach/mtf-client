import { handleRegistration } from "@services/constants/globalUtils";

export const pricingData = [
  {
    title: "hackaton",
    price: "Rp50,000",
    cardVar: "bg-white/5",
    features: ["3x mentoring sessions", "Max. 5 members assigned"],
    btnProps: {
      text: "Register",
      variant: "btn-gray",
      onClick: () => handleRegistration(),
    },
  },
  {
    title: "seminar",
    price: "free",
    cardVar: "bg-white/10",
    features: [
      "Certificate",
      "Insightful sessions",
      "Networking opportunities",
      "Snacks",
    ],
    btnProps: {
      text: "coming soon!",
      variant: "btn-primary",
      onClick: () => alert("Coming soon!"),
    },
  },
];

export const headerData = {
  label: "pricing",
  title: "registration fee",
  desc: "",
  classes: "text-center",
};
