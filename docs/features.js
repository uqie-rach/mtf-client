// <!-- stacks -->
const stacks = {
  techStack: [
    {
      side: client,
      tech: [react, tailwindcss, vercel],
      deployment: "maliki-tech-fest.com",
    },

    // we're not using it for mvp
    // data contained in constant files
    {
      side: server,
      tech: [],
    },
  ],
};

// <!-- client side -->
const clientSide = {
  pages: [
    {
      homepage: {
        sections: [
          {
            name: hero,
            content: []
          },
          {
            name: about,
            content: []
          },
          {
            name: schedule,
            content: []
          },
          {
            name: pricing,
            content: []
          },
          {
            name: registration,
            content: []
          },
          {
            name: CTA,
            content: []
          },
        ],
        components: [
          {
            name: navbar,
            desc: "",
          },
          {
            name: footer,
            desc: "",
          },
        ],
      },
    },
    // another pages if exist ...
  ],
};
