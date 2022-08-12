import axios from 'axios';

const apiURL = "https://geo.ipify.org/api/v2/country?apiKey=at_bA6ZdqJM51ZS6JbCWSwgHhIa1bPFv";

const transformData = data => ({
    ipAddress: data.ip,
    location: `${data.location.region}, ${data.location.country}`,
    timezone: `${data.location.timezone} UTC`,
    isp: data.isp
});

export const getIpInformation = params => {
    return axios
        .get(apiURL, { params })
        .catch(error => console.log('error'))
        .then(res => transformData(res.data));
};
