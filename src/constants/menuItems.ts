import type { MenuCategory } from "../types/menu";


export const MENU_ITEMS: MenuCategory[] = [
  {
    category: "Encoding",
    items: [
      {
        label: "Base64",
        children: [
          { label: "Base64 Encode", path: "/base64/encode" },
          { label: "Base64 Decode", path: "/base64/decode" },
        ],
      },
    ],
  },
  {
    category: "Hash",
    items: [
      {
        label: "SHA",
        children: [
          { label: "SHA-256", path: "/sha256" },
        ],
      },
    ],
  },
  // {
  //   category: "Cryptography",
  //   items: [
  //     {
  //       label: "AES",
  //       children: [
  //         { label: "AES Encrypt", path: "/aes/encrypt" },
  //         { label: "AES Decrypt", path: "/aes/decrypt" },
  //       ],
  //     },
  //   ],
  // },
];