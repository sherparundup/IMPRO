import { Poppins, Syne, Jost, Mitr, Waterfall } from "next/font/google";

const normal_poppins = Poppins({ subsets: ["latin"], weight: "500" });
const thin_poppins = Poppins({ subsets: ["latin"], weight: "400" });

const semi_poppins = Poppins({ subsets: ["latin"], weight: "600" });
const bold_poppins = Poppins({ subsets: ["latin"], weight: "700" });

const syne = Syne({ subsets: ["latin"], weight: ["400", "700"] });
const jost = Jost({ subsets: ["latin"], weight: "500" });
const mitr = Mitr({ subsets: ["latin"], weight: "400" });
const waterfall = Waterfall({ subsets: ["latin"], weight: "400" });

export {
  normal_poppins,
  semi_poppins,
  bold_poppins,
  thin_poppins,
  syne,
  jost,
  mitr,
  waterfall,
};