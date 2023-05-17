const openai = require('../config/openai')

module.exports = {
  async sendText(req, res) {
    const openaiAPI = openai.configuration()

    try {
      const response = await openaiAPI.createCompletion(
        openai.textCompletion('Me diga o nome de uma escritora argentina'),
      )

      return res.status(200).json({
        success: true,
        data: response.data.choices[0].text,
      })
    } catch (error) {
      return res.status(400).json({
        sucess: false,
        error: error.response ?? 'there was an issue on the server',
      })
    }
  },
}
