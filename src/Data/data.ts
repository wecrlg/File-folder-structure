export const explorer = {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 3,
          name: "images",
          isFolder: true,
          items: [
            {
              id: 4,
              name: "random1.png",
              isFolder: false,
              items: [],
            },
            {
              id: 5,
              name: "random2.jpg",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "src",
      isFolder: true,
      items: [
        {
          id: 8,
          name: "context",
          isFolder: true,
          items: [
            {
              id: 9,
              name: "ThemeContext.ts",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: 10,
          name: "hooks",
          isFolder: true,
          items: [
            {
              id: 11,
              name: "useLocalStorage.ts",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: 12,
          name: "pages",
          isFolder: true,
          items: [
            {
              id: 13,
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id: 14,
              name: "style.css",
              isFolder: false,
              items: [],
            },
            {
              id: 15,
              name: "script.jsx",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
  ],
};
