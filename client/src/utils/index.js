import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const RandomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const RandomPrompt = surpriseMePrompts[RandomIndex];

  if (RandomPrompt === prompt) return getRandomPrompt(prompt);

  return RandomPrompt;
}
