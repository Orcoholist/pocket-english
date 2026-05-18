export default function sitemap() {
  const baseUrl = "https://pocket-english.ru";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}