module.exports = {
    content: ['index.html'],
    css: ['assets/css/styles.css'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
}