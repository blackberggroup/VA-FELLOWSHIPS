module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  // Define the Fellows collection
  eleventyConfig.addCollection("fellow", function (collectionApi) {
    return collectionApi.getFilteredByGlob("fellow/*.md");
  });

  let pathPrefix = "/";

  if (process.env.BASEURL) {
    pathPrefix = process.env.BASEURL;
  }

  return {
    pathPrefix: pathPrefix,
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dir: {
      input: ".", // Ensures Eleventy picks up content from the root
      layouts: "_layouts",
      data: "_data",
    },
  };
};
