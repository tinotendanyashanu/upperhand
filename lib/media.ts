type MediaType = "image" | "video";

const encodePath = (folder: string, file: string) => {
  const encodedFolder = folder
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  return `/Images/${encodedFolder}/${encodeURIComponent(file)}`;
};

type MediaItem = {
  src: string;
  alt: string;
  category: string;
  type?: MediaType;
  poster?: string;
};

const solarFiles = [
  "WhatsApp Image 2025-12-13 at 18.43.43 (1).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.44 (2).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.44.jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.45 (1).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.45 (2).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.45 (3).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.45.jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.46 (1).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.46.jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.47 (1).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.47 (3).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.47.jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.54 (2).jpeg",
];

const boreholeFiles = [
  "WhatsApp Image 2025-12-13 at 18.43.53 (1).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.53.jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.54 (1).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.54.jpeg",
];

const boreholeVideo = "WhatsApp Video 2025-12-13 at 18.43.53.mp4";

const ceilingFiles = [
  "WhatsApp Image 2025-12-13 at 18.43.48 (1).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.49 (1).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.49.jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.50 (1).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.50.jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.51 (2).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.51 (3).jpeg",
];

const electricFiles = [
  "WhatsApp Image 2025-12-13 at 18.43.43.jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.44 (1).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.46 (2).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.47 (2).jpeg",
];

const paintingFiles = [
  "WhatsApp Image 2025-12-13 at 18.43.51.jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.52 (1).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.52.jpeg",
  "WhatsApp Image 2025-12-13 at 19.03.56.jpeg",
  "WhatsApp Image 2025-12-13 at 19.04.20.jpeg",
];

const roofingFiles = [
  "WhatsApp Image 2025-12-13 at 18.43.48.jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.49 (2).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.50 (2).jpeg",
  "WhatsApp Image 2025-12-13 at 18.43.51 (1).jpeg",
];

const withFolder = (folder: string, files: string[], category: string): MediaItem[] =>
  files.map((file, index) => ({
    src: encodePath(folder, file),
    alt: `${category} project ${index + 1}`,
    category,
    type: "image" as const,
  }));

export const solarMedia = withFolder("solar projects/solar projects", solarFiles, "Solar");
export const boreholeMedia = withFolder("borehole projects", boreholeFiles, "Borehole");
export const ceilingMedia = withFolder("ceiling projects", ceilingFiles, "Ceiling");
export const electricMedia = withFolder("electric projects", electricFiles, "Electrical");
export const paintingMedia = withFolder("painting projects", paintingFiles, "Painting");
export const roofingMedia = withFolder("roofing projects", roofingFiles, "Roofing");

export const projectMedia: MediaItem[] = [
  ...solarMedia,
  ...boreholeMedia,
  ...ceilingMedia,
  ...electricMedia,
  ...paintingMedia,
  ...roofingMedia,
  {
    src: encodePath("borehole projects", boreholeVideo),
    alt: "Borehole drilling video",
    category: "Borehole",
    type: "video",
    poster: encodePath("borehole projects", boreholeFiles[3]),
  },
];

export const serviceMedia = {
  solar: {
    hero: solarMedia[0]?.src,
    gallery: solarMedia.map((item) => item.src),
  },
  electrical: {
    hero: electricMedia[0]?.src,
    gallery: electricMedia.map((item) => item.src),
  },
  boreholes: {
    hero: boreholeMedia[1]?.src ?? boreholeMedia[0]?.src,
    gallery: boreholeMedia.map((item) => item.src),
    video: encodePath("borehole projects", boreholeVideo),
    poster: encodePath("borehole projects", boreholeFiles[3]),
  },
  roofing: {
    hero: roofingMedia[0]?.src,
    gallery: roofingMedia.map((item) => item.src),
  },
  ceilings: {
    hero: ceilingMedia[0]?.src,
    gallery: ceilingMedia.map((item) => item.src),
  },
  painting: {
    hero: paintingMedia[3]?.src ?? paintingMedia[0]?.src,
    gallery: paintingMedia.map((item) => item.src),
  },
};

export type { MediaItem };
