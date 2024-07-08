import {
  Bree_Serif as HeadFont,
  Outfit,
  Bona_Nova as TitleFont,
  Great_Vibes as QuoteFont,
} from "next/font/google";
// import { Inder as Be_Vietnam_Pro } from "next/font/google";

const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
});
const headFont = HeadFont({
  weight: ["400"],
  subsets: ["latin"],
});
const titleFont = TitleFont({
  weight: ["400"],
  subsets: ["latin"],
});
const quoteFont = QuoteFont({
  weight: ["400"],
  subsets: ["latin"],
});

const fonts = {
  MainFont: outfit.className,
  HeadFont: headFont.className,
  TitleFont: titleFont.className,
  QuoteFont: quoteFont.className,
};
export default fonts;
