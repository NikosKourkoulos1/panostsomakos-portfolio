module.exports = function(eleventyConfig) {
    eleventyConfig.addCollection("commissioned", function(collectionApi) {
      return collectionApi.getFilteredByTag("commissioned").sort((a, b) => a.data.order - b.data.order);
    });
  
    return {
      dir: {
        input: "src",
        includes: "_includes",
        output: "_site"
      }
    };
  };
  