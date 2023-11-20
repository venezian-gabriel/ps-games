import assassins from "../../public/global/games/ps5/assassins.jpg";
import mk1 from "../../public/global/games/ps5/mk1.jpg";
import ufc5 from "../../public/global/games/ps5/ufc5.jpg";
import spiderman2 from "../../public/global/games/ps5/spiderman2.jpg";
import fc24 from "../../public/global/games/ps5/fc24.jpg";
import gow from "../../public/global/games/ps4/gow.jpg";
import rdr2 from "../../public/global/games/ps4/rdr2.jpg";
import tw3wh from "../../public/global/games/ps4/tw3wh.jpg";
import got from "../../public/global/games/ps4/got.jpg";
import oppw4 from "../../public/global/games/ps4/oppw4.jpg";
import tesvs from "../../public/global/games/ps3/tesvs.jpg";
import ssss from "../../public/global/games/ps3/ssss.jpg";
import gowa from "../../public/global/games/ps3/gowa.jpg";
import dbzuk from "../../public/global/games/ps3/dbzuk.jpg";
import gtav from "../../public/global/games/ps3/gtav.jpg";

const gameCatalog = [
  {
    link: "/ps5/assassins-creed-mirage",
    label: "PRÉ-VENDA",
    img: assassins,
    originalPrice: 267,
    price: 240,
    title: "Assassin’s Creed Mirage",
    platform: "PS5",
  },
  {
    link: "/ps5/mortal-kombat-1",
    img: mk1,
    price: 230,
    title: "Mortal Kombat 1",
    platform: "PS5",
  },
  {
    link: "/ps5/ufc-5",
    img: ufc5,
    originalPrice: 210,
    price: 180,
    title: "UFC 5",
    platform: "PS5",
  },
  {
    link: "/ps5/spider-man-2",
    label: "SEMINOVO",
    originalPrice: 275,
    img: spiderman2,
    price: 215,
    title: "Spider-Man 2",
    platform: "PS5",
  },
  {
    link: "/ps5/fc-24",
    label: "PRÉ-VENDA",
    img: fc24,
    originalPrice: 300,
    price: 270,
    title: "FC 24",
    platform: "PS5",
  },
  {
    link: "/ps4/god-of-war",
    originalPrice: 99,
    img: gow,
    price: 80,
    title: "God Of War",
    platform: "PS4",
  },
  {
    link: "/ps4/red-dead-redemption-2",
    label: "SEMINOVO",
    img: rdr2,
    originalPrice: 190,
    price: 145,
    title: "Red Dead Redemption 2",
    platform: "PS4",
  },
  {
    link: "ps4/the-witcher-3-wild-hunt",
    img: tw3wh,
    price: 99.9,
    title: "The Witcher 3: Wild Hunt",
    platform: "PS4",
  },
  {
    link: "/ps4/ghost-of-tsushima",
    label: "SEMINOVO",
    img: got,
    originalPrice: 170,
    price: 120,
    title: "Ghost of Tsushima",
    platform: "PS4",
  },
  {
    link: "/ps4/one-piece-pirate-warriors-4",
    img: oppw4,
    originalPrice: 90,
    price: 79.99,
    title: "Pirate Warriors 4",
    platform: "PS4",
  },
  {
    link: "/ps3/the-elder-scrolls-v-skyrim",
    img: tesvs,
    price: 80,
    title: "Skyrim",
    platform: "PS3",
  },
  {
    link: "/ps3/saint-seiya-soldiers-soul",
    label: "SEMINOVO",
    img: ssss,
    originalPrice: 90,
    price: 65,
    title: "Saint Seiya: Soldiers' Soul",
    platform: "PS3",
  },
  {
    link: "/ps3/god-of-war-ascension",
    label: "SEMINOVO",
    img: gowa,
    originalPrice: 85,
    price: 40,
    title: "God Of War: Ascension",
    platform: "PS3",
  },
  {
    link: "/ps3/dragon-ball-z-ultimate-tenkaichi",
    label: "SEMINOVO",
    img: dbzuk,
    originalPrice: 70,
    price: 50,
    title: "Ultimate Tenkaichi",
    platform: "PS3",
  },
  {
    link: "/ps3/grand-theft-auto-v",
    img: gtav,
    originalPrice: 75,
    price: 60.99,
    title: "Grand Theft Auto V",
    platform: "PS3",
  },
];

export default gameCatalog;
