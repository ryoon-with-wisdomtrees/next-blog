import localFont from "next/font/local";
export const NanumSquare = localFont({
  src: [
    {
      path: "/NanumSquareRoundL.ttf",
      weight: "400",
      style: "light",
    },
    {
      path: "/NanumSquareRoundR.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "/NanumSquareRoundB.ttf",
      weight: "400",
      style: "bold",
    },
  ],
});
