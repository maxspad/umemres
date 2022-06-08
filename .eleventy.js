module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/**/*.jpg");
    eleventyConfig.addPassthroughCopy('src/**/*.png');
    eleventyConfig.addPassthroughCopy('src/**/*.svg');
    eleventyConfig.addPassthroughCopy('src/**/*.pdf');
    // Set custom directories for input, output, includes, and data
    return {
      dir: {
        input: "src",
        includes: "_includes",
        data: "_data",
        output: "_site"
      }
    };
  };