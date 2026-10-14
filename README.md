<p align="center">
 <img width="1500" height="500" alt="giphy (2)" src="https://github.com/user-attachments/assets/ded0c400-1c05-4910-abc8-42133b21e05d" />
</p>

# MASTER MERGED SCRIPT V5 [Access Here](./src-V5/library.js)

## Changelog

<details>
<summary><b>(click to expand)</b></summary>

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

## TLDR

Master Merged Script V4 is a collection of some of the best scripts in AI Dungeon to grace us with awesome capabilities and game changing mechanics. MMSv4 serves as a 'Glass Case Museum' by gathering them all and presenting them, to YOU, for easy use.

MMS Version 5 is a current work in progress. V5 aims to merge all current scripts into 1 seamless script providing all functions without the conflicts.

FULL DISCLAIMER: Enabling all scripts, at the same time, CAN and/or WILL cause unintended outputs or errors. For Now... 

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
// Your "Input" tab should look like this
const modifier = (text) => {
  const original = typeof text === "string" && text.length ? text : "\u200B";

  try {
    const result = MCPCollectionRun("input", original);
    return (
      result &&
      typeof result === "object" &&
      typeof result.text === "string" &&
      result.text.length
    ) ? result : { text: original };
  } catch (error) {
    log("MCP input error:", error);
    return { text: original };
  }
}

modifier(text)
```
9. Select the `Context` tab on the left
10. Delete all code within said tab
11. Copy and paste the following code into your empty `Context` tab:
```javascript
// Your "Context" tab should look like this
const modifier = (text) => {
  const original = typeof text === "string" && text.length ? text : "\u200B";

  try {
    const result = MCPCollectionRun("context", original);
    return (
      result &&
      typeof result === "object" &&
      typeof result.text === "string" &&
      result.text.length
    ) ? result : { text: original };
  } catch (error) {
    log("MCP context error:", error);
    return { text: original };
  }
}

modifier(text)
```
12. Select the `Output` tab on the left
13. Delete all code within said tab
14. Copy and paste the following code into your empty `Output` tab:
```javascript
// Your "Output" tab should look like this
const modifier = (text) => {
  const original = typeof text === "string" && text.length ? text : "\u200B";

  try {
    const result = MCPCollectionRun("output", original);
    return (
      result &&
      typeof result === "object" &&
      typeof result.text === "string" &&
      result.text.length
    ) ? result : { text: original };
  } catch (error) {
    log("MCP output error:", error);
    return { text: original };
  }
}

modifier(text)
```
15. Select the `Library` tab on the left
16. Delete all code within said tab
17. DOWNLOAD the full Library code (hyperlink below) and open it in Notepad or Notepad ++
- [Library code](./src/library.js)
18. Copy the full code from the notepad, (Ctrl + A) -> (Ctrl + C) -> (Ctrl + V) is a shortcut, and paste into your empty `Library` tab
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
