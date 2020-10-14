// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require('node-fetch');

exports.handler = async (event) => {
    const { city, units } = JSON.parse(event.body);

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=${units}`,
    )
        .then((results) => results.json())
        // eslint-disable-next-line no-console
        .catch((error) => console.error(error));

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(response),
    };
};
