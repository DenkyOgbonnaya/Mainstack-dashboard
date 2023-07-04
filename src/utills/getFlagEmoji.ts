import { countries } from "@/data/countries";

export function getFlagEmoji(countryName: string) {
  const country = countries.find((country) => country.name === countryName);
  const uniCode = 127397;

  const countryCode = country ? country.code : "";
  if (!countryCode) return "";

  const codePoints = countryCode
    .toUpperCase()
    .split("")
    //@ts-ignore
    .map((char) => uniCode + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
