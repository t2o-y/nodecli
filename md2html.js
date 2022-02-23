const marked = require("marked");

module.exports = (markdown, clipOptions) => {
    return marked.parse(markdown, {
        gfm: clipOptions.gfm,
    });
} 