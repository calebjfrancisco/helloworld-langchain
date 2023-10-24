import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "langchain/llms/openai";

const llm = new OpenAI({
  openAIApiKey: process.env.OPEN_AI_API_KEY,
});

// To handle a POST request to /api
export async function POST(request: NextRequest) {
  const body = await request.json();
  const message = await llm.predict(body.prompt);
  return NextResponse.json({ message }, { status: 200 });
}
