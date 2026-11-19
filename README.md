<p align="center">
 <img width="1500" height="500" alt="giphy (2)" src="https://github.com/user-attachments/assets/ded0c400-1c05-4910-abc8-42133b21e05d" />
</p>

# MASTER MERGED SCRIPT V5 
[Access Here](./src-V5/)

## Changelog

<details>
<summary><b>(click to expand)</b></summary>

### 5.4.6
- Simpler controls and cleaner MCP Story Card
- Easier character relationships: Set the same relationship for several characters at once, and give more of the cast a chance in the spotlight.
- Clearer Auto-Cards updates: See which card is being created or summarized. If a summary fails, the original memories are kept. Auto-Cards also leaves Story Arc settings alone.
- More reliable story arcs: If the AI can’t make a usable new outline, the game keeps the last good one.
- Fewer NPCs knowing things they shouldn’t: The optional Information Firewall helps keep private conversations private. Mentioning someone no longer counts as them being there, and removed dialogue is less likely to be remembered as part of the story.
- More character stats: The Stats card adds Strength, Dexterity, Vitality, Endurance, Willpower, and Wisdom without changing how your existing stats work.
- Separate wallets and inventories: A change to one wallet or inventory no longer gets copied into another.
- Better pacing and recall: Finished events get a break before they can return, repeated lore is skipped, and scene guidance stays focused on what’s happening now.
- More relevant updates: Characters in the scene can get more attention, companion relationships are less likely to change because of unrelated events, and meters can explain why a value went up or down.
- Gentler story cleanup: Less story text gets cut, and important updates take priority over optional cleanup when several features are running.

### 5.4.0
- All 16 scripts work together more smoothly, with fewer conflicts.
- Resolved an issue that could prevent Auto-Cards from working alongside certain scripts.
- Improved how scripts share processing time to reduce slowdowns.
- Fixed conflicts where one script could accidentally interfere with another script's commands.
- Added a helpful warning when gambling is not enabled for RealmHeart
- Improved how scripts share story information without overwriting each other.
- Scripts are less likely to miss important updates when several are running.
- Added better ways to identify and troubleshoot problems.
  
### 5.3.9.1
- Updated Character Continuity to v2.02
- Fixed ```/AC``` routing Auto-Cards commands
- Fixed bad ```state.message``` causing the wrong module to claim slash commands. 

### 5.3.8
- Added Dice-Roll Script
- Added Coin Toss Script
- Implemented the missing SlowBurn (for some reason, I forgot to add it, Sowwy.)
- Updated MMS Story Card
- Attributed the appropriate credit to Original Creators

### 5.3.7
- Updated Character Continuity to version 2.01
- Implemented bug fixes for RealmHeart to avoid displaying [Current World State] information within viewable context

### 5.3.6
- Several QoL changes
- Fixed a few issues of compression with Auto Cards
- Re-added USC and added AR (Anti-Repetition) scripts

### 5.3.1
- Updated Living Characters to version 2.63
- Updated Character-Continuity (CC) to Stable version 1.0.74

### 5.3.0
- Version 5.3.0 is now in the src-V5 folder for testing. 

</details>

# MASTER MERGED SCRIPT V4

</details>

## Changelog

<details>
<summary><b>(click to expand)</b></summary>

### ALL CODE FOR VERSION 4 CAN BE FOUND IN THE 'src' FOLDER

### 4.0.3
- Updated Character Continuity to v1.0.80
- Added Living Meters v1
- Added Story Card Extender
- Attributed the appropriate credit to Original Creators

### 4.0.2
- Added World Time Generator (WTG) script
- Added Utility Scripts Collection (USC) script
- Attributed the appropriate credit to Original Creators

### 4.0.1
- Added Calendar & Event System to the Collection
- Attributed the appropriate credit to Original Creator

### 4.0
- Full Release

</details>

---

## WHAT IS MASTER MERGED SCRIPT?

Master Merged Script V4 is a collection of some of the best scripts in AI Dungeon to grace us with awesome capabilities and game changing mechanics. MMSv4 serves as a 'Glass Case Museum' by gathering them all and presenting them, to YOU, for easy use of your 1 choice. However, they're not meant to be enabled all at once. It could cause conflicts and game breaking issues. 

MMS Version 5 is the remedy to version 4. V5 aims to merge all current scripts into 1 seamless script providing all functions without the conflicts but does require modifcation of the original scripts. It will look the same, Story Cards and Functionality wise, but the backend will be greatly reconfigured.

---

## Original Creators

| Script | Creator (Discord) |
|:--------|:------------|
| **Inner Self (IS+AC)** | @LewdLeah |
| **Living Characters** | @nerdgirl450 |
| **Anti Omniscience (Information Firewall)** | @nerdgirl450 |
| **True Auto Stats (TAS)** | @Yi1i1i |
| **Story Arc Engine (SAE)** | @Yi1i1i |
| **Slow Burn (SB)** | @R3QUI3M |
| **Stackable Inventory System** | @bottledfox |
| **Narrative Guidance Overhaul (NGO)** | @Purplejump |
| **Realmheart** | @itsBrazyy |
| **Character-Continuity (CC)** | @AzuretheWitch |
| **Calendar & Event System (CES)** | @LeCroc |
| **World Time Generator (WTG)** | @Aness (helpfulduckie) |
| **Utility Scripts Collection (USC)** | @Intask |
| **Living Meters** | @mahesvara.1337 |
| **Story Card Extension (SCE)** | @kenflesh |
| **Dice Roll** | @p0isontea |
| **Coin Toss** | @grenith |


## Install Guide for Scenarios
1. Use the [AI Dungeon website](https://aidungeon.com/) on PC (or view as desktop if mobile-only)
2. [Create a new scenario](https://help.aidungeon.com/faq/what-are-scenarios) or edit an existing scenario
3. Open the `DETAILS` tab at the top while editing your scenario
4. Scroll down to `Scripting` and toggle ON → `Scripts Enabled`
5. Select `EDIT SCRIPTS`
6. Select the `Input` tab on the left
7. Delete all code within said tab
8. Copy and paste the following code into your empty `Input` tab:
```javascript
// MASTER SCRIPT V5.4.6 — Input
const modifier = (text) => {
  const original = (
    typeof text === "string" && text.length
  ) ? text : "\u200B";

  try {
    const result = MCPV5Run("input", original);
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
    log("MCP V5.4.6 input error:", error);
    return { text: original };
  }
}

modifier(text)
```
9. Select the `Context` tab on the left
10. Delete all code within said tab
11. Copy and paste the following code into your empty `Context` tab:
```javascript
// MASTER SCRIPT V5.4.6 — Context
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
    log("MCP V5.4.6 context error:", error);
    return { text: original };
  }
}

modifier(text)
```
12. Select the `Output` tab on the left
13. Delete all code within said tab
14. Copy and paste the following code into your empty `Output` tab:
```javascript
// MASTER SCRIPT V5.4.6 — Output
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
    log("MCP V5.4.6 output error:", error);
    return { text: withLeadingSpace(original) };
  }
}

modifier(text)
```
15. Select the `Library` tab on the left
16. Delete all code within said tab
17. DOWNLOAD the full Library code (hyperlink below) and open it in Notepad or Notepad ++
- [Library code](./src-V5/library.js)
18. Copy the full code from the notepad via by downloading or the 'view raw' format, (Ctrl + A) -> (Ctrl + C) -> (Ctrl + V) is a shortcut, and paste into your empty `Library` tab
19. Click the big yellow `SAVE` button in the top right corner

### *That's it*

All adventures played from your scenario will now include Master Merged Script Version 4.


## Useful Links

### Discussion Thread
- [Master Merged Script Thread](https://discord.com/channels/903327676884979802/1526025190243307702)
- [AI Dungeon official Discord server invite](https://discord.gg/MXNqpSbuZT) (required to access the first link)

### Links to Original Creators Threads
- [Inner Self](https://discord.com/channels/903327676884979802/1455232694379221165)
- [Living Characters](https://discord.com/channels/903327676884979802/1518769557102133309)
- [Anti Omniscience](https://discord.com/channels/903327676884979802/1526763518114664448)
- [True Auto Stats (TAS)](https://discord.com/channels/903327676884979802/1394478059381592194)
- [Story Arc Engine (SAE)](https://discord.com/channels/903327676884979802/1380303329405440062)
- [Slow Burn (SB)](https://discord.com/channels/903327676884979802/1496380663077797928)
- [Stackable Inventory System (SIS)](https://discord.com/channels/903327676884979802/1523206368167854110)
- [Narrative Guidance Overhaul (NGO)](https://discord.com/channels/903327676884979802/1380157986709962772)
- [RealmHeart](https://discord.com/channels/903327676884979802/1493354358476242971)
- [Character-Continuity (CC)](https://discord.com/channels/903327676884979802/1525990165166686218)
- [Calendar & Event System (CES)](https://discord.com/channels/903327676884979802/1521702669381533766)
- [World Time Generator (WTG)](https://discord.com/channels/903327676884979802/1493069771170775049)
- [Utility Scripts Collection (USC)](https://discord.com/channels/903327676884979802/1380196316382236827)
- [Living Meters](https://discord.com/channels/903327676884979802/1534133778807652382)
- [Story Card Extender (SCE)](https://discord.com/channels/903327676884979802/1498673595893682217)
- [Dice Roll & Coin Toss](https://discord.com/channels/903327676884979802/1400616390389403709)
- 
<p align="center"><i>Top Image is from @dualvoidanima at giphy.com</i> </p>

<p align="center"><i>Please show the original creators much love and appreciation</i> </p>
