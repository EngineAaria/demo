import type { NextApiRequest, NextApiResponse } from "next";
import { SYSTEM_PROMPT } from "../../lib/systemPrompt";

/*
  API /api/chat

  This route is a placeholder. By default it returns a safe, mocked reply.
  To enable a real LLM:
    - set OPENAI_API_KEY or ANTHROPIC_API_KEY in .env.local
    - implement the provider call inside the commented block below
    - ensure you apply the Infinka safety layers before returning text to the client:
        - intensity governor
        - risk detection (over-gifting, intimacy mismatch)
        - limit to 1-3 options + one structured moment + one message

  IMPORTANT: Do not log or store sensitive user data unless you have consent and proper privacy controls.

*/

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message } = req.body || {};
  if (!message) {
    return res.status(400).json({ error: "Missing message" });
  }

  // Simple reflective mock that demonstrates adaptive mirroring
  const mockReply = `It sounds like you want something thoughtful and low-pressure. Here are two calm ideas:
1) A short handwritten note paired with a quiet ritual — why it works: private, low-intensity, expresses meaning.
2) A shared memory letter — why it works: reconnects around a remembered moment.

Would you like a step-by-step for either option, or should I ask a few quick questions about the recipient?`;

  // TODO: Wire real LLM call here using SYSTEM_PROMPT + user message
  // Example (pseudocode for OpenAI):
  // const completion = await openai.chat.completions.create({
  //   model: "gpt-4o",
  //   messages: [{role: "system", content: SYSTEM_PROMPT}, {role: "user", content: message}],
  //   max_tokens: 500
  // });
  // const reply = completion.choices[0].message.content;

  return res.status(200).json({ reply: mockReply });
}
