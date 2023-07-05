export const formatDate = (date:string) => {
  if (!date) return "";

  const [_, day, month] = new Date(date).toDateString().split(" ");
  return `${day} ${month}`;
};
