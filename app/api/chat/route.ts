import { NextRequest, NextResponse } from "next/server";
import { ChatBot } from "../../../common/chat-bot";

// To handle a POST request to /api/chat
export async function POST(request: NextRequest) {
  const body = await request.json();
  const bot = ChatBot.openAi();
  const message = await bot.respondTo(body.prompt);
  return NextResponse.json({ message }, { status: 200 });
}
