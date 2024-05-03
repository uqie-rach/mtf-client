import {
  IFacebook,
  ITwitter,
  IInstagram,
  IDarkLinkedIn,
  IYoutube,
} from "@assets";

export const socialMedia = [
  {
    name: "facebook",
    alt: "Maliki Tech Festival facebook page",
    url: "https://www.facebook.com/",
    icon: IFacebook,
  },
  {
    name: "twitter",
    alt: "Maliki Tech Festival twitter page",
    url: "https://twitter.com/",
    icon: ITwitter,
  },
  {
    name: "linkedin",
    alt: "Maliki Tech Festival linkedin page",
    url: "https://www.linkedin.com/",
    icon: IDarkLinkedIn,
    addOns: "bg-gradient-to-r from-primary to-secondary"
  },
  {
    name: "instagram",
    alt: "Maliki Tech Festival instagram page",
    url: "https://www.instagram.com/",
    icon: IInstagram,
  },
  {
    name: "youtube",
    alt: "Maliki Tech Festival youtube page",
    url: "https://www.youtube.com/",
    icon: IYoutube,
  },
];

export const headerData = {
  label: "",
  title: `maliki tech festival ${new Date().getFullYear()}`,
  desc: "",
  classes: "text-center text-white",
};
