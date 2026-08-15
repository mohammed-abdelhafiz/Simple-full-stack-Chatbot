export interface Message {
  id: string;
  sender: "user" | "chatbot";
  content: string;
}
