import { GoogleGenAI } from "@google/genai";
import { ConversationRepository } from "../repositories/conversation.repository";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const chatService = {
  chat: async (prompt: string, conversationId: string) => {
    const response = await ai.interactions.create({
      model: "gemini-flash-lite-latest",
      input: prompt,
      generation_config: {
        max_output_tokens: 100,
      },
      previous_interaction_id:
        ConversationRepository.getLastResponseId(conversationId),
    });
    if (response.id) {
      ConversationRepository.setLastResponseId(conversationId, response.id);
    }
    return response.output_text;
  },
};
