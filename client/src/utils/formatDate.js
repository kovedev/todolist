export const formatDate = (date) => {
  return `${new Date(date).toLocaleDateString("fi-FI")} ${new Date(date).toLocaleTimeString("fi-FI")}`;
};
