import localFont from "next/font/local";
export const NanumGothic = localFont({
  src: [
    {
      path: "/NanumGothicLight.ttf",
      weight: "400",
      style: "light",
    },
    {
      path: "/NanumGothicBold.ttf",
      weight: "400",
      style: "bold",
    },
    {
      path: "/NanumGothic.ttf",
      weight: "400",
      style: "regular",
    },
  ],
});
