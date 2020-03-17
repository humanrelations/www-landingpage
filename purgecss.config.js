module.exports = {
    content: ['index.html'],
    css: ['assets/css/styles.css'],
    whitelist: ['overflow-auto', 'overflow-hidden', 'hidden', 'block'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
}