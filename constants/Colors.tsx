export default {
  light: {
    primary: "#C2185B",
    accent: "#FFB740",
    greyish: "#888",
    componentBG: "#A7C5EB",
    label: "#fff",
    title: "#9D0B0B",
    value: "#6E2142",
    button:"#C2185B",
    background: "#FFF",

  },
  dark: {
    primary: "#293B5F",
    accent: "#FFB740",
    greyish: "#555",
    componentBG: "#47597E",
    label: "#FFF",
    title: "#EDEDED",
    value: "#7D1935",
    button:"#47597E",
    background: "#787A91",

  },
};

export interface themeLabels {
  dark: boolean;
  colors: {
    primary: string;
    accent: string;
    greyish: string;
    componentBG: string;
    label: string;
    title: string;
    value: string;
    background : string;
  };
}
