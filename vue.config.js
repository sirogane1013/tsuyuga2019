module.exports = {
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/tsuyuga2019/'
        : '/',
};