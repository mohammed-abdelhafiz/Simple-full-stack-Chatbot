import type { Request, Response } from "express";
import { chatService } from "../services/chat.service";
import { z } from "zod";

const ChatRequestSchema = z.object({
  prompt: z
    .string()
    .trim()
    .min(1, "Prompt is required")
    .max(1000, "Prompt is too long (max 1000 characters)"),
  conversation_id: z.uuid(),
});

export const chatController = {
  chat: async (req: Request, res: Response) => {
    const result = ChatRequestSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json(z.treeifyError(result.error));
    }

    const { prompt, conversation_id } = result.data;
    const output_text = await chatService.chat(prompt, conversation_id);
    res.json({ message: output_text });
  },
};
