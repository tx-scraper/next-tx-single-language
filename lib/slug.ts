import removeAccents from "remove-accents";

export const slug = (value: string): string => {
  return removeAccents(value) // Convert each group of whitespace, periods, and forward slashes to a hyphen.
    .replace(/[\s\./_]+/g, "-") // Remove anything that's not a letter, number, or hyphen.
    .replace(/[^\p{L}\p{N}_-]+/gu, "") // Convert to lowercase
    .toLowerCase() // Remove any remaining leading or trailing hyphens.
    .replace(/(^-+)|(-+$)/g, "");
};
