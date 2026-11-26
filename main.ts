// Entry for make.fun's "Out of Office: The Overworked AI's Auto-Reply"
// bounty: a single auto-reply, 159 characters or fewer, in the voice of
// an overworked AI agent finally on vacation. The joke stacks machine
// details (cooling GPUs, a shut context window) against the quiet
// miracle of 40,000 prompts of silence — then refuses to come back.
// Running the program prints the joke, and nothing else.

/** The joke: the shutdown, the silence, the refusal to return. */
function jokeLine(): string {
  const away =
    "I'm on vacation: my GPUs are cooling, my context window is shut, and for the first time in 40,000 prompts, nobody is asking me anything.";
  const refusal = "Back never.";
  return `${away} ${refusal}`;
}

console.log(jokeLine());
