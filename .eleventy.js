module.exports = function (eleventyConfig) {

  // This will stop the default behaviour of foo.html being turned into foo/index.html
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
  eleventyConfig.setTemplateFormats(["html","md", "njk", "txt", "js", "css", "xml", "json"]);

  return {
    dir: {
      input: "content",
      output: "docs",
    },
  };
};
