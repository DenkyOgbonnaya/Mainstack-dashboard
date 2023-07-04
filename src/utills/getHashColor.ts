const COLORS = [
  "rgba(89, 158, 234, 1)",
  "rgba(89, 158, 234, 1)",
  "rgba(240, 148, 104, 1)",
  "rgba(132, 79, 246, 1)",
  "rgba(10, 106, 48, 1)",
  "rgba(212, 175, 44, 1)",
  "rgba(239, 241, 246, 1)",
  "rgba(26, 71, 184, 1)",
  "rgba(249, 57, 57, 1)",
];
export const getHashedColor = (word: string) => {
  let hash = 7;
  for (let i = 0; i < word.length; i++) {
    hash = word.charCodeAt(i) + (hash << 5) - hash;
  }
  const index = Math.abs(hash % COLORS.length);
  return COLORS[index];
};
