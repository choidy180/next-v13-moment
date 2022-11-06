export const lightTheme = {
    bgColor: "#fff",
    menuColor: "blueviolet",
    textColor: "#000",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    name: "light",
};
  
export const darkTheme = {
    bgColor: "#252525",
    menuColor: "#D391FA",
    textColor: "#fff",
    shadowColor: "#000",
    name: "dark",
};

const customMediaQuery = (maxWidth: number): string =>
    `@media (max-width: ${maxWidth}px)`;

export const media = {
    custom: customMediaQuery,
    pc: customMediaQuery(1440),
    tablet: customMediaQuery(768),
    mobile: customMediaQuery(576),
};