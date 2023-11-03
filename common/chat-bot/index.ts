import { OpenAI } from "langchain/llms/openai";

export interface IChatBot {
  respondTo: (message: string) => Promise<string>;
}

class OpenAiChatBot implements IChatBot {
  constructor(private readonly model: OpenAI) {}

  async respondTo(message: string): Promise<string> {
    return this.model.predict(message);
  }
}

export class ChatBot {
  private constructor() {}
  public static openAi(): IChatBot {
    const model = new OpenAI({
      openAIApiKey: process.env.OPEN_AI_API_KEY,
    });
    return new OpenAiChatBot(model);
  }
}
