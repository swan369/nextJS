// good idea for this shared file as it will be hosted as one instance when importing ..google or localFont rather than multiple instances created when they are imported in each file

import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  subsets: ["latin"], // only use latin character sets
  weight: "400",
  display: "swap", // during loading, show system fonts then switch to lusitana when done loading
});
