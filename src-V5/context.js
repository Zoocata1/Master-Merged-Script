// MASTER SCRIPT V5.4.0 — Context
const modifier = (text) => {
  const original = (
    typeof text === "string" && text.length
  ) ? text : "\u200B";

  try {
    const result = MCPV5Run("context", original);
    if (
      result &&
      typeof result === "object" &&
      typeof result.text === "string" &&
      result.text.length
    ) {
      return result.stop === true
        ? { text: String(result.text), stop: true }
        : { text: String(result.text) };
    }
    return { text: original };
  } catch (error) {
    log("MCP V5.4.0 context error:", error);
    return { text: original };
  }
}

modifier(text)
