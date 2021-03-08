const sanityClient = require('@sanity/client');
const client = sanityClient({
    projectId: 'psyt4ffv',
    dataset: 'production',
    useCdn: true
});

module.exports = client;