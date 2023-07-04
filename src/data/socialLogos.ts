import { Facebook, Instagram, Linkedin, Twitter } from "@/assets";
import { StaticImageData } from "next/image";

const socialLogos: Record<string, string | StaticImageData> = {
  google: Twitter,
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
};

export default socialLogos;
