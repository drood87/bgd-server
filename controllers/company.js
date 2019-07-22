const { default: axios } = require('axios');

const handleCompanyGet = async (req, res) => {
  return await getData();
};

const urlCompany = 'https://api-v3.igdb.com/companies/';
const getData = async () => {
  try {
    const response = await axios({
      url: urlCompany,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'user-key': process.env.API_KEY
      },

      // Request body
      data:
        'fields name,published.name,published.cover.url,published.cover.image_id,published.screenshots.image_id,published.slug;where id = 51;'
    });

    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  handleCompanyGet: handleCompanyGet
};
