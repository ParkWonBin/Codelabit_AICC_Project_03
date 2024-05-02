const router = require('express').Router();
const axios = require('axios')

router.get('/', async (req, res) => {
    const url = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_API_KEY}&libraries=services,clusterer`;
    
    try {
        const response = await axios.get(url);
        // 해당 파일 바로 전달
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching address:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;