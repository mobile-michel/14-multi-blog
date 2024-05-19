module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./assets");
    eleventyConfig.addPassthroughCopy("./assets");
    return {
        dir: {
            input: "content", // Set the source for 11ty
            layouts: "../_layouts", // Base page layouts
            includes: "../_includes", // All UI partials
            data: "../_data", // JSON datasets
            output: "_site" // This is the default
        }
    };
};
