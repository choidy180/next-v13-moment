import { atom } from "recoil";

export const isThemeAtom = atom<string>({
    key: `isTheme`,
    default: '#0be881'
})