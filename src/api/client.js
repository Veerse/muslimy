
const axios = require('axios').default;

async function getAllPodcasts () {
    try {
        const response = await axios.get('/podcasts')

    } catch (e) {
        console.log(e)
    }
}