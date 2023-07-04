import socialLogos from "@/data/socialLogos";

export const getSocialLogo = (socialNetwork: string) => {
  return socialLogos[socialNetwork];
};
