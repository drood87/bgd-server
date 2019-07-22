const { default: axios } = require('axios');

const handleGameDetailsPost = async (req, res) => {
  const { id } = req.body;
  const urlGame = 'https://api-v3.igdb.com/games/';
  const getDataGame = async () => {
    try {
      const response = await axios({
        url: urlGame,
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'user-key': 'cc9c2b79c9b903c7e5c5dd721c77fb17'
        },

        // Request body
        data: `fields *; where id = ${id};`
      });

      const data = await response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  res.json(await getDataGame());
};

module.exports = {
  handleGameDetailsPost: handleGameDetailsPost
};
