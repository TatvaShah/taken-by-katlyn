import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Taken by Katlyn",
  tagline: "Family, couples, and portrait photography, based in Mississauga and available across the GTA.",
  category: "Family and couples photography",
  schemaType: "LocalBusiness",
  area: "Mississauga, ON",
  siteUrl: "https://taken-by-katlyn.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#8a6a55" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Mississauga based photographer",
    headline: "Capturing the moments that feel most like you",
    subhead: "Family, couples, and life's special moments, photographed in a relaxed, natural way. Send a DM with your session idea to get started.",
    images: [
      { src: "/images/post-3.jpg", alt: "Mother lifting her daughter in a fall family session" },
      { src: "/images/post-2.jpg", alt: "Father and daughter outdoors among fall trees" },
      { src: "/images/post-6.jpg", alt: "Siblings sitting on a blanket in the autumn leaves" },
    ],
    secondaryCta: { label: "See the photos", href: "#gallery" },
  },

  highlights: ["Family and couples sessions", "Fall mini sessions", "Baptism and event candids", "Mississauga, Oakville and the GTA"],

  about: {
    title: "Natural, relaxed sessions",
    body: [
      "Taken by Katlyn is Katlyn Chensue's photography, based in Mississauga and available across the GTA. Families, couples, and life's special moments, from the little moments to the big milestones.",
      "Sessions are meant to feel like you. Katlyn encourages everyone to play around, move, and be themselves so the photos feel organic, and she loves breaking off from group photos to give each parent a special one on one moment with their little ones.",
    ],
    image: { src: "/images/post-4.jpg", alt: "Mother and daughter smiling together in fall" },
  },

  menu: {
    label: "Sessions",
    title: "Session types",
    variant: "list",
    showPrices: false,
    priceNote: "Message for details on your session and date.",
    groups: [
      {
        title: "Sessions",
        items: [
          { name: "Family sessions", description: "Group photos plus one on one moments with your little ones." },
          { name: "Couples sessions", description: "Relaxed, playful, and full of movement." },
          { name: "Fall mini sessions", description: "Crisp air, leaves on the ground, and warm sunshine." },
          { name: "Baptism and event candids", description: "The little moments and the big milestones." },
          { name: "Portrait sessions", description: "Outdoor portraits in beautiful natural light." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent sessions",
    items: [
      { src: "/images/post-3.jpg", width: 1080, height: 1432, alt: "Mother and daughter in a fall session", caption: "Fall family session", href: "https://www.instagram.com/p/De-xnedOxfO/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1432, alt: "Father and daughter in fall colours", caption: "Fall mini session", href: "https://www.instagram.com/p/DfILt0ZhJNi/" },
      { src: "/images/post-1-3.jpg", width: 1080, height: 1440, alt: "Family portrait on baptism day", caption: "Baptism candids", href: "https://www.instagram.com/p/DfN7y51jr1U/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1432, alt: "Mother and daughter one on one", caption: "Moments like these", href: "https://www.instagram.com/p/De7zbHvOGBW/" },
      { src: "/images/post-6.jpg", width: 1080, height: 886, alt: "Siblings in autumn leaves", caption: "Fall fun", href: "https://www.instagram.com/p/De0LwIEjvAj/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1440, alt: "Toddler walking outdoors in fall", caption: "Outdoor fall session", href: "https://www.instagram.com/p/De2Huv0ICmx/" },
      { src: "/images/post-7.jpg", width: 1080, height: 720, alt: "Little girl with mums and pumpkins", caption: "Sweater weather", href: "https://www.instagram.com/p/DezsXnpn89M/" },
      { src: "/images/post-1.jpg", width: 1080, height: 1440, alt: "Father holding his baby son", caption: "The little moments", href: "https://www.instagram.com/p/DfN7y51jr1U/" },
      { src: "/images/post-8-2.jpg", width: 1080, height: 1440, alt: "Golden hour outdoor portrait", caption: "Golden hour portrait", href: "https://www.instagram.com/p/DeyIEFJDngH/" },
      { src: "/images/post-9.jpg", width: 1080, height: 1350, alt: "Smiling outdoor portrait in a field", caption: "Outdoor portrait", href: "https://www.instagram.com/p/Ch5UzihJ-0d/" },
    ],
  },

  instagram: {
    handle: "takenbykatlyn",
    embeds: [],
  },

  order: {
    label: "How to book",
    title: "Book in a quick DM",
    intro: "Bookings are made through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Katlyn! I would love to book a session.\nSession type (family, couples, mini, event):\nNumber of people:\nPreferred date:\nLocation idea:",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book a session?", a: "Send a DM on Instagram with your session type, number of people, preferred date, and location idea." },
    { q: "Where are sessions held?", a: "Taken by Katlyn is based in Mississauga and available across the GTA, including Oakville." },
    { q: "What kinds of sessions do you offer?", a: "Family, couples, fall mini sessions, portraits, and baptism and event candids." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Mississauga, Ontario",
    socials: [],
  },

  seo: {
    title: "Taken by Katlyn | Family and couples photographer in Mississauga",
    description: "Family, couples, portrait, and fall mini session photography based in Mississauga, available across the GTA and Oakville. Book by Instagram DM.",
    keywords: ["family photographer Mississauga", "couples photographer Oakville", "fall mini sessions Mississauga", "GTA photographer"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
