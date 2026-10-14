// MASTER SCRIPT V5.4.0 — Output
const modifier = (text) => {
  const original = (
    typeof text === "string" && text.length
  ) ? text : "\u200B";

  // Final presentation boundary only. No module sees this added space.
  const withLeadingSpace = (value) => {
    const safe = (
      typeof value === "string" && value.length
    ) ? value : original;
    return safe.startsWith(" ") ? safe : ` ${safe}`;
  };

  try {
    const result = MCPV5Run("output", original);
    if (
      result &&
      typeof result === "object" &&
      typeof result.text === "string" &&
      result.text.length
    ) {
      const finalText = withLeadingSpace(String(result.text));
      return result.stop === true
        ? { text: finalText, stop: true }
        : { text: finalText };
    }
    return { text: withLeadingSpace(original) };
  } catch (error) {
    log("MCP V5.4.0 output error:", error);
    return { text: withLeadingSpace(original) };
  }
}

modifier(text)
