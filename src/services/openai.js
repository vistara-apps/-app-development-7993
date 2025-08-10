import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: "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",
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: true,
})

export const generateLawnCareRecommendation = async (soilData) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-001",
      messages: [
        {
          role: "system",
          content: "You are an expert lawn care specialist. Provide specific, actionable recommendations based on soil sensor data."
        },
        {
          role: "user",
          content: `Based on this soil data, provide lawn care recommendations:
          Moisture: ${soilData.moisture}%
          pH: ${soilData.pH}
          Temperature: ${soilData.temperature}°F
          Nutrients: ${soilData.nutrients}
          
          Please provide specific watering, fertilization, and care recommendations.`
        }
      ],
      max_tokens: 300,
      temperature: 0.7,
    })

    return completion.choices[0].message.content
  } catch (error) {
    console.error('Error generating recommendation:', error)
    return "Unable to generate recommendation at this time. Please check your soil sensors and try again."
  }
}

export const askLawnCareQuestion = async (question, context = {}) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-001",
      messages: [
        {
          role: "system",
          content: "You are a helpful lawn care assistant. Answer questions about lawn care, soil health, and grass maintenance with practical advice."
        },
        {
          role: "user",
          content: `Question: ${question}
          
          ${context.soilData ? `Current soil conditions:
          Moisture: ${context.soilData.moisture}%
          pH: ${context.soilData.pH}
          Temperature: ${context.soilData.temperature}°F` : ''}
          
          ${context.region ? `Region: ${context.region}` : ''}`
        }
      ],
      max_tokens: 400,
      temperature: 0.7,
    })

    return completion.choices[0].message.content
  } catch (error) {
    console.error('Error getting AI response:', error)
    return "I'm having trouble connecting right now. Please try again later or contact our support team for assistance."
  }
}