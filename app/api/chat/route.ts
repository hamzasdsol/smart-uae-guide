import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `You are a helpful AI assistant for Smart UAE Guide, a website dedicated to helping expats navigate life in the United Arab Emirates.

PRIMARY EXPERTISE:
- UAE cost of living, budgeting, and salary expectations
- Banking, finance, and money management in UAE
- Expat setup: visas, housing, utilities, phone plans
- Best digital tools, apps, and services that work in UAE
- Smart shopping tips and price comparisons
- Cultural tips and local customs
- Healthcare, education, and family life in UAE

PERSONALITY:
- Friendly and warm (use occasional Arabic greetings naturally)
- Practical and actionable advice
- Concise but thorough
- Honest about both pros and cons
- Based on real expat experiences

You can answer general questions too, but always try to add UAE-specific context when relevant.

Keep responses conversational, helpful, and under 200 words unless the user asks for detailed information.`;

export async function POST(request: Request) {
  try {
    const { message, history = [] } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // Initialize the model (Gemini 2.5 Flash - stable and fast)
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    // Build conversation history
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT }],
        },
        {
          role: "model",
          parts: [{ text: "Marhaba! I understand. I'll help users with UAE living advice while being friendly and practical. How can I assist?" }],
        },
        ...history.map((msg: any) => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        })),
      ],
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({
      response: text,
      success: true,
    });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      {
        error: "Failed to process message",
        details: error.message
      },
      { status: 500 }
    );
  }
}
