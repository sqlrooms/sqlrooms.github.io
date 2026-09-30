---
url: https://sqlrooms.org/api/ai-core/variables/SUB_AGENT_ERROR_MESSAGE.md
---
[@sqlrooms/ai-core](../index.md) / SUB\_AGENT\_ERROR\_MESSAGE

# Variable: SUB\_AGENT\_ERROR\_MESSAGE

> `const` **SUB\_AGENT\_ERROR\_MESSAGE**: `"The sub-agent request failed. See the browser console for the underlying error."` = `'The sub-agent request failed. See the browser console for the underlying error.'`

Message handed to the parent model when a sub-agent stream fails.

The raw exception goes to the console instead. A child agent may run on a
different provider than its parent, and callers serialize the thrown message
into a tool result the parent model receives, so a provider error carrying an
endpoint, account detail, or credential would cross that boundary. Pass
`formatError` to opt into the raw text once the trust boundary is known.
