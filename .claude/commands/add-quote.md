# add-quote

Add a quote to the site's quote collection at `src/data/quotes.ts`.

## Input

The user provides a quote as the command argument. It may be:
- The full quote text only (author unknown or unspecified)
- The quote text and a name that may be incomplete, misspelled, or informal
- A rough paraphrase that needs tightening

## Steps

1. **Polish the text** — fix punctuation, capitalisation, and grammar. Do not change the meaning or words beyond what is clearly a typo or formatting issue. Keep the voice of the original.

2. **Verify the author** — from your training knowledge, confirm the attribution:
   - If the provided name is correct, keep it as-is but normalise the spelling (e.g. "einstien" → "Albert Einstein").
   - If the quote is commonly misattributed, use the correct author.
   - If the author is genuinely unknown or disputed, use `"Unknown"`.
   - If no author was given, try to identify the source. If you cannot, use `"Unknown"`.

3. **Check for duplicates** — read `src/data/quotes.ts` and check whether the same quote (or a near-identical variant) already exists. If it does, tell the user and stop.

4. **Append the entry** — add the new `{ text, author }` object at the end of the `quotes` array in `src/data/quotes.ts`. Match the existing formatting exactly (2-space indent, trailing comma, single quotes replaced by double quotes if inconsistent).

5. **Report back** — confirm what was added, and note any corrections made to text or author attribution.

## Rules

- Never truncate or paraphrase a quote that the user provided in full.
- Do not invent attributions. When unsure, use `"Unknown"`.
- Do not add the quote if it is already present.
- Do not touch any other file.
