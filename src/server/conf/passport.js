const appConf = require('./server');

module.exports = {
    strategies: {
        vk: {
            clientID: '5360165',
            clientSecret: '765utMWmnVn9CS1kOuLB',
            callbackURL: process.env.VK_CALLBACK_URL || `${appConf.protocol}://${appConf.host}:${appConf.port}/auth/vk/callback`,
        },

        fb: {
            clientID: '1208431049220025',
            clientSecret: '39bf839eeb8805fd32f77dd70fac3604',
            callbackURL: process.env.FB_CALLBACK_URL || `${appConf.protocol}://${appConf.host}:${appConf.port}/auth/fb/callback`,
        },
    },
};
