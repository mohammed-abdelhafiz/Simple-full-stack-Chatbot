const conversations = new Map<string, string>();

export const ConversationRepository = {
  setLastResponseId: (conversationId: string, responseId: string) => {
    conversations.set(conversationId, responseId);
  },
  getLastResponseId: (conversationId: string) => {
    return conversations.get(conversationId);
  },
};
