import {author} from "./author";

export const config = {
  siteMeta: {
    title: `${author.authorId} Post Hub`,
    author: author.authorId,
    description: `A comprehensive site to retrieve ${author.authorId} articles.`,
  },
  siteRoot:
      process.env.NODE_ENV === "production"
          ? "https://my-post-hub.vercel.app/"
          : "http://localhost:3000",
  googleTagManagerId: "",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "https://forms.gle/nrXyTGFiD1ApmUAu7",
    },
  ],
};
