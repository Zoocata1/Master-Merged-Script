<a id="top"></a>
<div align="center">
  <img width="100%" height="400" alt="Master Merged Script animated banner" src="https://github.com/user-attachments/assets/ded0c400-1c05-4910-abc8-42133b21e05d" />
  <h1>◈ MASTER MERGED SCRIPT ◈</h1>
  <p><strong>One collection. Seventeen scripts. Your adventure, your rules.</strong></p>
  <p>Characters with their own lives · Persistent worlds · RPG mechanics · Cleaner stories</p>
  <p>
    <a href="./src-V5/"><img alt="Version 5.6.0" src="https://img.shields.io/badge/VERSION-5.6.0-6759D1?style=for-the-badge" /></a>
    <img alt="17 integrated scripts" src="https://img.shields.io/badge/SCRIPTS-17-2E8B80?style=for-the-badge" />
    <img alt="AI Dungeon" src="https://img.shields.io/badge/PLATFORM-AI%20DUNGEON-252A34?style=for-the-badge" />
  </p>
  <p><a href="./src-V5/"><strong>⬇ Get V5</strong></a> &nbsp;·&nbsp; <a href="#installation">Installation</a> &nbsp;·&nbsp; <a href="#how-to-use">Script guides</a> &nbsp;·&nbsp; <a href="#changelog">Changelog</a> &nbsp;·&nbsp; <a href="#credits">Credits</a></p>
  <p><sub>Created and maintained by Zoocata · Built upon the work of the AI Dungeon scripting community.</sub></p>
</div>

---

## What is MMS?

**Master Merged Script (MMS)** brings together some of AI Dungeon's most creative community scripts into one integrated collection. Instead of installing and configuring each script separately, install MMS once and choose the features you want from a single Master Script Control Panel.

Version 4 was a collection of largely independent scripts. Version 5 takes a different approach: it adapts the original scripts to share a compatibility host that coordinates their work, protects important data, and reduces conflicts while retaining their familiar functionality and Story Cards wherever possible.

| 🎭 Characters | 🌍 Worlds | ⚔️ Gameplay | ✨ Output |
|:--|:--|:--|:--|
| Inner Self | Story Card Extension | Living Meters | AR |
| Auto-Cards | Story Arc Engine | True Automatic Stats | USC-E |
| Living Characters | Narrative Governor | Stackable Inventory | Dice Roll |
| Character Continuity | | RealmHeart | Coin Flip |
| Slow Burn | | | |
| Information Firewall | | | |

> [!NOTE]
> Every module is optional. You don't need to enable everything to enjoy MMS. The host automatically manages compatibility and overlapping responsibilities. 'All On' enables all toggles, but the host may defer optional work or select one of two overlapping features.

## What's new in V5.6.0?

| Improvement | What it means for you |
|:--|:--|
| 🛡️ **Stability** | Better protection against freezes, script errors, and accidental changes to adventure data. |
| ⚡ **Performance** | More efficient Story Card processing, memory handling, and prioritization. |
| ◈ **Control Panel** | A cleaner, compact panel with presets. Compatibility settings are handled behind the scenes. |
| 🧠 **Character intelligence** | Better recognition of names and aliases, scene awareness, and NPC spotlight selection. |
| 💞 **Slow Burn** | Separate relationship progression for multiple characters. |
| 🔐 **Memory and knowledge** | Stronger memory protection and improved Information Firewall tracking. |
| 🎒 **Inventory and stats** | Safer inventory requests, resource checks, and stat updates. |
| 📖 **Story progression** | Improved recall, pacing, and evidence-assisted arc advancement. |
| 🔄 **Retries and recovery** | Reduced duplicate effects on retries, with new troubleshooting commands. |

## Installation

### 1. Prepare your scenario

1. Open [AI Dungeon](https://aidungeon.com/) in a desktop browser (or request the desktop site on mobile).
2. [Create a scenario](https://help.aidungeon.com/faq/what-are-scenarios) or edit an existing one you own.
3. Open **Details**, find **Scripting**, enable **Scripts Enabled**, and choose **Edit Scripts**.
4. Back up existing code and duplicate your scenario or adventure before replacing it. MMS is a complete collection; do not paste it over another script collection without removing the old code.

### 2. Install the four script files

Open the [V5 source folder](./src-V5/). Replace the contents of each corresponding scripting tab with the matching **V5.6.0** code. Do not mix versions.

| AI Dungeon tab | What to paste |
|:--|:--|
| **Library** | [Full Library code](./src-V5/library.js) — use **Raw** or download it, then copy the entire file. |
| **Input** | The Input script from the V5 folder, or the exact V5.6.0 code below. |
| **Context** | The Context script from the V5 folder, or the exact V5.6.0 code below. |
| **Output** | The Output script from the V5 folder, or the exact V5.6.0 code below. |

> [!IMPORTANT]
> The Library contains all 17 modules. The other three scripts call the Library; they are not standalone installations. Paste each file into the correct tab, then press **Save**.

<details>
<summary><b>Input — V5.6.0 code (click to expand)</b></summary>

```javascript
// MASTER SCRIPT V5.6.0 — Input
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
      return { text: String(result.text) };
    }
    return { text: original };
  } catch (error) {
    log("MCP V5.6.0 input error:", error);
    return { text: original };
  }
}

modifier(text)
```

</details>

<details>
<summary><b>Context — V5.6.0 code (click to expand)</b></summary>

```javascript
// MASTER SCRIPT V5.6.0 — Context
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
    log("MCP V5.6.0 context error:", error);
    return { text: original };
  }
}

modifier(text)
```

</details>

<details>
<summary><b>Output — V5.6.0 code (click to expand)</b></summary>

```javascript
// MASTER SCRIPT V5.6.0 — Output
const modifier = (text) => {
  const original = (
    typeof text === "string" && text.length
  ) ? text : "\u200B";

  // Final presentation boundary only. No module sees this added space.
  const withLeadingSpace = (value) => {
    const safe = (
      typeof value === "string" && value.length
    ) ? value : original;
    return /^\s/.test(safe) ? safe : ` ${safe}`;
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
      return { text: finalText };
    }
    return { text: withLeadingSpace(original) };
  } catch (error) {
    log("MCP V5.6.0 output error:", error);
    return { text: withLeadingSpace(original) };
  }
}

modifier(text)
```

</details>

### 3. Enable your scripts

Start or resume a test adventure and take a turn. Open the **⚙️ Master Script Control Panel** in your Story Cards. Fresh installations start with all 17 toggles off.

Change a script's `false` to `true`, save/close the card, and perform another action to apply the changes. Individual modules may create their own settings or status cards when scheduled.

<details>
<summary><b>◈ Preview the actual V5.6.0 control panel</b></summary>

```text
╭── ◈ MASTER SCRIPT ◈ ──╮
  V5.6.0  •  0/17 enabled
╰────────────────────────╯
Enable All: false
Disable All: false
Preset: Custom

◆ CHARACTERS
Inner Self: false
Auto-Cards: false
Living Characters: false
Character Continuity: false
Slow Burn: false
Information Firewall: false

◆ WORLD & STORY
Story Card Extension: false
Story Arc Engine: false
Narrative Governor: false

◆ GAMEPLAY
Living Meters: false
True Automatic Stats: false
Stackable Inventory: false
RealmHeart: false

◆ OUTPUT
AR: false
USC-E: false
Dice Roll: false
Coin Flip: false

◆ PERFORMANCE
Workload Guard: true
Hook Budget Milliseconds: 1450
Hook Safety Margin Milliseconds: 180
Diagnostics: false

◆ STATUS
No scripts enabled.
More: Notes or /mms help
```

</details>

### 4. Quick-start presets

Set `Preset:` in the control panel to one of the following, or use `/mms profile Roleplay` (substitute the preset name). The field resets to `Custom` after the selection is applied.

| Preset | Best for | What it enables |
|:--|:--|:--|
| **Roleplay** | Character-driven storytelling | Inner Self, Auto-Cards, Living Characters, CC, Slow Burn, Information Firewall, SCE, AR, USC-E |
| **RPG** | Stats, resources, economy and adventures | CC, SCE, Living Meters, TAS, RealmHeart, Dice Roll, AR |
| **Lightweight** | Minimal overhead | SCE, AR, USC-E |
| **All On** | Experimenting with the full collection | All 17 toggles; compatibility rules still apply |
| **All Off** | Disabling the collection's features | All 17 toggles off |

You can change individual toggles after applying any preset. `Enable All` and `Disable All` are one-shot switches that reset after use. Keep performance settings at their defaults unless troubleshooting.

---

## How to use

Each guide assumes MMS is installed. **Enable the named module in the Master Script Control Panel first.** Save the card, take a turn, and follow the module-specific instructions. Some cards and automatic behaviors appear only once that module has executed or its trigger conditions are met.

### 🎭 Characters, relationships & memory

<details>
<summary><b>01 · Inner Self — Give NPCs a mind of their own</b></summary>

NPCs can learn, plan, remember and revise their private thoughts as the story develops.

**How to use**
1. Enable `Inner Self` and take a turn.
2. Open **Configure Inner Self** (its title may be split across two lines).
3. Set the player character's first name and the correct first-, second-, or third-person perspective.
4. In the card's **Notes**, list the first names of the NPCs you want to simulate, one per line below the roster instructions. You can also mark a suitable NPC card title with `@` to register it through Inner Self.
5. Continue the story and mention those NPCs by name. Brain cards are created as characters are triggered.

**Tip:** Adjust thought formation chance and recent turns searched in the configuration card. The Brain card's Entry is an operation log; Notes holds the character's thoughts. You can edit them, but retain the expected format.

[Original creator thread](https://discord.com/channels/903327676884979802/1455232694379221165)

</details>

<details>
<summary><b>02 · Auto-Cards — Let the story build its own lore</b></summary>

Automatically identifies relevant named entities and creates Story Cards. It can also maintain and compress memories for cards configured to receive updates.

**How to use**
1. Enable `Auto-Cards`. Inner Self can be on or off; MMS coordinates the shared package.
2. Take a turn and open **Configure Auto-Cards** when it appears.
3. Adjust creation cooldown, maximum entry length, bullet formatting, and whether newly created cards receive memory updates.
4. Play normally. For manual creation, enter `/ac Mira`. Follow the on-screen prompts; a card generation or memory compression can require more than one Continue.

| Example command | Purpose |
|:--|:--|
| `/ac Mira` | Request a card about Mira |
| `/ac Mira / Focus on her background` | Add generation instructions |
| `/ac redo Mira` | Regenerate an existing automatic card |
| `/ac redo Mira / She joined the royal guard` | Regenerate with updated information |

**Tip:** Check generated lore for accuracy. Auto-Cards is model-driven and can introduce unsupported details. A generation or compression task is not necessarily a narrative turn. Do not edit the target card during a pending task unless necessary.

[Original creator thread](https://discord.com/channels/903327676884979802/1455232694379221165)

</details>

<details>
<summary><b>03 · Living Characters — NPCs with lives beyond the player</b></summary>

Creates independent character activities, interpersonal pressures and plot threads through Life Cards. Optional Thought Cards provide a separate journal.

**How to use**
1. Enable `Living Characters` and open **LIVING CHARACTERS CONFIG** after it appears.
2. Set `PROTAGONIST_NAME` in Entry. List other characters one per line in Notes under `Characters:`.
3. Adjust the pressures, optional world events, `LIFE_CARD_INTERVAL`, and `MAX_ACTIVE_CARDS` as desired.
4. Play normally and allow NPCs to pursue their own activities. Use the optional **LIVING CHARACTERS RELATIONSHIPS** card to steer targets.
5. To use the optional Thought Cards, open **THOUGHT CARDS CONFIG**, set `THOUGHTS_ENABLED` to `true`, and configure the character list, interval, and chance.

**Tip:** Thought Cards are a player-facing journal, not the same thing as Inner Self's Brain cards.

[Original creator thread](https://discord.com/channels/903327676884979802/1518769557102133309) · [Upstream documentation](https://github.com/LivingNarratives/LivingCharacters)

</details>

<details>
<summary><b>04 · Character Continuity (CC) — Keep characters consistent over time</b></summary>

Tracks character appearance, identity, personality, relationships, beliefs, experiences and other evolving details in managed Story Cards.

**How to use**
1. Enable `Character Continuity` and take a turn.
2. Review **CC — Settings** and **CC — Status**. Configure a Story Card titled **Player's Identity** if one is not already present, with the player's `Name:` and `Pronouns:` fields.
3. Open **CC — Active NPCs**. Enter the canonical names of the NPCs you want tracked in the existing `N1:` through `N5:` slots; keep the surrounding structure intact.
4. For a new NPC with onboarding cards, complete the six setup cards (Outer, Inner, Names, Views, Relationships and Experiences). Then set `Ready: Yes` in that NPC's Outer card. Check CC — Status for validation messages.
5. Continue playing. Let CC update supported changes using story evidence.

**Tip:** Keep card field names, braces, and structure intact. Changing the active roster does not mean all other character history should be deleted. Use Status to troubleshoot incomplete onboarding. `/mms cast Mira` is a separate shared scene-awareness command, not a substitute for CC's roster setup.

[Original creator thread](https://discord.com/channels/903327676884979802/1525990165166686218)

</details>

<details>
<summary><b>05 · Slow Burn — Let relationships develop naturally</b></summary>

Tracks character-specific progression from 0 to 100 and supplies stage-based guidance for the AI. V5.6.0 supports independent progression for multiple NPCs.

**How to use**
1. Enable `Slow Burn`.
2. Create a separate Story Card for each NPC you want to track. Give it a unique title (for example, `Mira Evolution`) and paste an Entry like the example below.
3. Change the character name, rates, maximum change, and stages to suit your story. Repeat with a different name for another NPC.
4. Play normally. Explicit, directed interactions such as `Mira trusts you.` or `Mira rejects you.` can affect that NPC's progression.

```text
Evolution Stages
Character Name: Mira
Gain Rate: 0.5
Drain Rate: 0.3
Max Change Per Turn: 5
0: Cautious and distant
25: Comfortable around the player
50: Growing trust
75: Strong emotional connection
100: Deep and established bond
```

**Tip:** Lower gain rates produce slower development. The module uses heuristic language matching, not perfect emotional understanding.

[Original creator thread](https://discord.com/channels/903327676884979802/1496380663077797928)

</details>

<details>
<summary><b>06 · Information Firewall — Keep private knowledge private</b></summary>

Helps reduce NPC omniscience by tracking scene presence, conversations and established knowledge. A character being mentioned is not automatically proof that they were present.

**How to use**
1. Enable `Information Firewall`.
2. Create clear character Story Cards with canonical names and meaningful aliases.
3. Describe who is present, who leaves, who hears a conversation, and who is told a secret. Use clear attribution such as `Mira says, "The artifact is hidden in the cellar."`
4. If scene recognition needs help, enter `/mms cast Mira` to add a manually present NPC; use `/mms uncast Mira` to remove the manual override when they leave.

[Original creator thread](https://discord.com/channels/903327676884979802/1526763518114664448)

</details>

### 🌍 World, lore & story

<details>
<summary><b>07 · Story Card Extension (SCE) — Bring relevant lore back into focus</b></summary>

Recalls relevant existing cards and optionally introduces random cards or events, using configurable recall rules.

**How to use**
1. Enable `Story Card Extension` and open **SCE Config** after it appears.
2. Keep `contextRecallEnabled = true` for relevance-based recall. Adjust `contextRecallMaxCards`, `contextRecallThreshold`, and the recall window to balance coverage with available context.
3. Create useful lore Story Cards with descriptive titles, triggers, and concise entries. Optionally set `useOnlyAutouseCards = true` and add `autouse` to the triggers of cards you want considered for regular recall.
4. For random events, create a Story Card of type **Event** and adjust `randomEventChance` and `eventDuration` in SCE Config.
5. Use `alwaysIncludeCards` with comma-separated card titles for important cards you want the module to prioritize.

**Tip:** Chances are decimals from 0 to 1, e.g. `0.05` is 5%. Context is limited; an enabled module cannot guarantee that every requested card reaches the model. Keep machine/configuration cards out of ordinary lore/context.

[Original creator thread](https://discord.com/channels/903327676884979802/1498673595893682217)

</details>

<details>
<summary><b>08 · Story Arc Engine (SAE) — Give long stories a direction</b></summary>

Generates and maintains story outlines to guide future narrative developments. It can update arcs over time, with evidence-assisted advancement.

**How to use**
1. Enable `Story Arc Engine` and find **Story Arc Settings** and **Current Story Arc** after initialization.
2. Review `turnsPerAICall`, `attemptLimit`, `turnsPerElemRemoval` and the arc prompt. Keep the prompt's required `<< >>` markers.
3. Continue your adventure to let the engine create and use an outline. The model may require several attempts.
4. Use `/redo arc` to request a new outline, `/mms advance arc` to advance a supported numbered plot beat, or `/help sae` for the original in-game guide.

**Tip:** Setting `turnsPerElemRemoval` to `0` disables that timer-based removal behavior. Arc suggestions are guidance, not a fixed quest script. Review the outline if it gets ahead of the actual story.

[Original creator thread](https://discord.com/channels/903327676884979802/1380303329405440062)

</details>

<details>
<summary><b>09 · Narrative Governor — Better tension and pacing</b></summary>

Based on Narrative Guidance Overhaul, this module manages the story's tension, quieter moments, rising action and conflict guidance.

**How to use**
1. Enable `Narrative Governor`.
2. Play as usual. Describe your current scene and actions clearly so the governor can respond to the narrative.
3. Let quiet scenes breathe and use explicit actions for genuine conflict. The script supplies pacing guidance behind the scenes.
4. If you prefer entirely manual pacing, turn the module off in the MCP.

**Tip:** With SAE enabled, the host coordinates story-level and scene-level guidance. Pacing remains heuristic and model-dependent.

[Original creator thread](https://discord.com/channels/903327676884979802/1380157986709962772)

</details>

### ⚔️ Gameplay, resources & inventory

<details>
<summary><b>10 · Living Meters — Track resources as the story changes</b></summary>

Maintains configurable meters that change with time, player actions and relevant words or phrases in the narrative.

**How to use**
1. Enable `Living Meters` and open **⚙️ Living Meters** when it appears.
2. The shipped resource definitions are themed around a deep-space scenario (Hull, Power, Fuel, Thermal, Oxygen, Rations, Water, Condition, Radiation, Morale, Spare Parts and Credits). Scenario creators can edit the `RM_CONFIG` preset and `resources` array in the Library before use to fit a different setting. The default preset is `none` with those custom resource definitions; changing the preset alone does not remove custom definitions.
3. Read current values in the card's Entry. Edit supported overrides in Notes, or use commands below. Use resource IDs that exist in your configured adventure.
4. Play normally; actions and elapsed turns adjust resources according to the definitions.

| Command | Purpose |
|:--|:--|
| `/status` | Show tracked meters and recent adjustment information |
| `/hp` | Query the configured `hp` resource (Condition in the shipped setup) |
| `/hp +10` | Increase that resource |
| `/hp =80` | Set that resource within its allowed bounds |
| `/set difficulty hard` | Change the difficulty |
| `/set hp.perTurn -2` | Change drift for that resource |
| `/reset` | Restore configured starting values |

**Tip:** The card's Entry is read-only status; Notes is where overrides belong. Avoid `/reset` unless you actually want to restore all meters. If the card is unavailable, the bundled script advises enabling the Memory Bank feature. Living Meters and TAS do not automatically synchronize HP, MP or EP.

[Original creator thread](https://discord.com/channels/903327676884979802/1534133778807652382)

</details>

<details>
<summary><b>11 · True Automatic Stats (TAS) — Turn your adventure into an RPG</b></summary>

Adds levels, health, mana, energy, skills, talents, inventory and character attributes. Stats change through recognized actions and progression.

**How to use**
1. Enable `True Automatic Stats` and take a turn. TAS starts unlocked by default; if it has been locked, enter `/start`.
2. Find your player Stats, Skills, Talents, Inventory, Modifiers and **TAS Settings** cards. Card titles may include your character's name.
3. Edit initial stats in the card's existing `STAT: current/max` format; preserve the existing fields and formatting. Read Notes for stat-change logs.
4. Use clear natural-language actions such as `You cast Fireball.`, `You practice lockpicking.`, or `You enter a deep sleep.` Name the actual skill, talent or item. Learn or use appropriate talents and skills as your character develops.
5. Turn `injectStatsToContext` on in TAS Settings if you want the model to receive the supported player-state information and have sufficient context space.

| Help command | Topic |
|:--|:--|
| `/help stats` | Stats and progression |
| `/help skills` · `/help talents` | Skills, talents and their costs |
| `/help inventory` | Storing and giving items |
| `/help actions` · `/help keywords` | Combat, resting and recognition patterns |
| `/help modifiers` | Race modifiers |
| `/help multiplayer` | Party setup and supported multiplayer commands |

**Tip:** Talents consume EP; skills consume MP. V5.6.0 uses stricter resource checks. `/end` locks TAS's internal gameplay system; `/start` unlocks it. TAS inventory remains independent of SIS and RealmHeart. Shared slash commands may be routed to another enabled module.

[Original creator thread](https://discord.com/channels/903327676884979802/1394478059381592194)

</details>

<details>
<summary><b>12 · Stackable Inventory System (SIS) — Manage items through commands</b></summary>

Maintains a stackable inventory and wallet, with model-assisted validation for supported acquisition requests.

**How to use**
1. Enable `Stackable Inventory` and take a turn. Find the **Inventory** card containing Wallet and Inventory sections.
2. Enter supported item commands as actions. Acquisition requests may be approved or rejected by the model; allow the request to finish before submitting another.
3. Check the Inventory card to confirm the actual result. Use `/mms cancel` if a supported request is stuck.

| Example | Purpose |
|:--|:--|
| `/take 3 Apples` | Attempt to acquire three apples |
| `/take Torch` | Attempt to acquire one torch |
| `/use Torch` | Use an available item |
| `/drop 2 Apples` | Drop items |
| `/give 1 Apple to Mira` | Give an item to an NPC |
| `/throw 1 Stone at the target` | Throw an available item |

**Tip:** The shipped item stack cap is 99. Check your quantities before using commands. SIS, TAS and RealmHeart are independent by default, so do not assume an item acquired in one automatically exists in the others.

[Original creator thread](https://discord.com/channels/903327676884979802/1523206368167854110)

</details>

<details>
<summary><b>13 · RealmHeart — A living economy, calendar and world</b></summary>

Adds inventory, currency, transactions, time, weather, bills, income, holidays, events, prices, bounties and optional gambling mechanics.

**How to use**
1. Enable `RealmHeart` and open **Configure Realmheart**. Select a suitable preset (fantasy, modern or sci-fi) and review which subsystems are active.
2. Use **Configure Time** to set calendar and clock options. Review **Bills** for recurring expenses and income, and **Prices & Goods** for the economy. The shipped default configuration is fantasy; check the default Inn Stay bill if you don't want it in your story.
3. Review **Inventory**, **Ledger**, **Holidays**, **Events**, **Seasons** and other module cards as needed.
4. Play normally or use direct commands for supported manual adjustments.

| Example command | Purpose |
|:--|:--|
| `/balance` | View wallet balance |
| `/inventory` | View the RealmHeart inventory |
| `/ledger` | Review transactions |
| `/time` · `/weather` | View time or weather |
| `/additem Apple 3` | Manually add three apples |
| `/removeitem Apple 1` | Manually remove one apple |
| `/pay 5 gold` | Deduct currency if that denomination exists in your preset |
| `/rh currency off` | Disable RealmHeart currency processing |

**Tip:** `/help` provides RealmHeart's full command guide when routed to RealmHeart. Optional gambling requires its own settings; leave it disabled if you don't want it. Time and bills can affect your balance as the story progresses. RealmHeart's wallet and inventory do not automatically mirror other modules.

[Original creator thread](https://discord.com/channels/903327676884979802/1493354358476242971)

</details>

### ✨ Output cleanup & outcomes

<details>
<summary><b>14 · AR (Anti-Repetition) — Less echoing and repeated prose</b></summary>

Attempts to remove unwanted repetition of the player's input and recent story text.

**How to use**
1. Enable `AR` in the MCP.
2. Continue playing normally. AR processes eligible AI narrative output automatically; no command or additional setup is required.
3. If troubleshooting a false positive, enable Diagnostics or temporarily turn AR off to compare the behavior.

**Tip:** Repetition can be intentional, so the module uses safeguards rather than blindly deleting every similar sentence. It is not an AI rewrite tool, and optional filtering can be deferred under load.

</details>

<details>
<summary><b>15 · USC-E — Remove unwanted clichés and phrases</b></summary>

Uses a built-in phrase list and a configurable Story Card to remove unwanted writing habits.

**How to use**
1. Enable `USC-E`, then generate a response.
2. Locate **[CONFIG] Banned words** (or the card with that trigger key).
3. Add unwanted phrases, separated by commas, under the appropriate section. Keep the exact section headers.
4. Take a turn and check the resulting prose.

```text
{AGGRESSIVE:}
well well well, unshed tears
{PRECISE:}
calloused, a flicker of amusement
```

`AGGRESSIVE` may remove the entire matching sentence. `PRECISE` removes the matched phrase. Use aggressive rules sparingly because they can remove important story information. Built-in defaults are also applied; removing an example from the editable card does not necessarily remove an internal default.

**Tip:** USC-E retains its existing position after AR in the normal cooperative cleanup pipeline, before gameplay and character-evidence processing. It preserves nonempty output and does not promise complete cliché removal.

[Original USC creator thread](https://discord.com/channels/903327676884979802/1380196316382236827)

</details>

<details>
<summary><b>16 · Dice Roll — Add chance to attempted actions</b></summary>

Adds success, partial success, failure or critical outcome indicators to recognized second-person action sentences.

**How to use**
1. Enable `Dice Roll`. Leave `Coin Flip` disabled if you prefer dice-only outcomes.
2. Try actions that encourage output such as `You attempt to pick the lock.` or `You confidently attack the training dummy.`
3. When the script recognizes an eligible generated sentence, it adds a roll result. Confidence or hesitation can affect the outcome distribution.

[Original discussion thread](https://discord.com/channels/903327676884979802/1400616390389403709)

</details>

<details>
<summary><b>17 · Coin Flip — A more unpredictable alternative</b></summary>

Adds a critical success or critical failure result to recognized second-person action sentences.

**How to use**
1. Enable `Coin Flip` and disable `Dice Roll` if you want the coin to be the outcome authority.
2. Play naturally, using attempts such as `You try to jump across the gap.`
3. When eligible generated narration matches the module's rules, the result is displayed alongside the action.

[Original discussion thread](https://discord.com/channels/903327676884979802/1400616390389403709)

</details>

---

## MMS commands

Enter these as in-game actions (plain slash commands). The `/mms` prefix is specifically for the collection, avoiding many conflicts with individual module commands.

| Command | What it does |
|:--|:--|
| `/mms help` | Show the MMS command reference |
| `/mms status` | Review the active configuration and recent execution |
| `/mms errors` | Show recent diagnostics |
| `/mms conflicts` | Explain active module overlaps |
| `/mms performance` | Review timing and module health |
| `/mms cancel` | Cancel supported pending tasks |
| `/mms recover` | Cancel supported tasks and reset selected transient host data |
| `/mms pause` · `/mms resume` | Pause/resume optional processing |
| `/mms profile Roleplay` | Apply a named preset |
| `/mms cast Mira` · `/mms uncast Mira` | Add/remove a manual scene-presence override |
| `/mms advance arc` | Advance a supported numbered story beat |

> [!TIP]
> Many modules have their own original commands. If `/help` or `/inventory` is ambiguous, consult the module's card or its specific help command, or test with only the intended module enabled. `/mms recover` is not a full save restore; back up before attempting repairs.

## Troubleshooting

| Problem | Try this |
|:--|:--|
| No MCP card | Verify all four script tabs contain matching V5.6.0 code, scripting is enabled, and you have taken a turn. Check console logs and Story Card availability. |
| A module's card hasn't appeared | Confirm its toggle, take a few ordinary turns, and use `/mms status`. The scheduler may defer optional work; some cards require triggers. |
| A model task seems stuck | Use `/mms cancel`, check `/mms errors`, then retry if appropriate. Some generation tasks legitimately take several Continue actions. |
| Unexpected inventory totals | Check which module owns the item; the inventories and wallets are separate by default. |
| Long turns or occasional deferral | Start with Lightweight or fewer modules, keep Workload Guard on, and use `/mms performance`. |
| A character is misidentified | Check canonical names, aliases, module rosters and scene presence. Use `/mms cast`/`uncast` where appropriate. |
| Thought Cards fail | Follow the bundled Living Characters warning about Optimized Context. |
| A filter removes something important | Review the banned-phrase list and use precise rather than aggressive rules; compare with the module disabled. |

---

## Changelog

### V5.6.0 — Stability, compatibility & quality of life

- Reduced the risk of errors, stuck tasks and unintended state changes.
- Improved how the collection shares processing time and context space.
- Redesigned the MCP with automatic compatibility settings and quick-start presets.
- Improved name recognition, character tracking and scene awareness.
- Added independent Slow Burn progression for multiple characters.
- Improved Information Firewall, memory protection and Auto-Cards processing.
- Improved TAS resource validation, inventory approval handling and transaction recovery.
- Improved recall, narrative pacing and evidence-assisted arc advancement.
- Added bounded retry protection and new troubleshooting commands.
- Retained all 17 scripts, with existing Story Card layouts preserved wherever practicable.

<details>
<summary><b>📜 Previous V5 releases</b></summary>

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

<details>
<summary><b>🏛️ V4 archive and changelog</b></summary>

[Access the legacy V4 source](./src/). V4 contains independent scripts that were not intended to all run together. The recommended version for new installations is V5.

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

## Credits

MMS would not exist without the community members who created the original scripts. Please support them, respect their work, and retain their original source notices and applicable licensing terms when redistributing the collection.

### V5 modules and their original creators

| Script | Creator / original attribution |
|:--|:--|
| Inner Self & Auto-Cards | @LewdLeah |
| Living Characters | @nerdgirl450 |
| Information Firewall / Anti Omniscience | @nerdgirl450 |
| True Automatic Stats (TAS) | @Yi1i1i |
| Story Arc Engine (SAE) | @Yi1i1i |
| Slow Burn | @R3QUI3M |
| Stackable Inventory System | @bottledfox |
| Narrative Governor / Narrative Guidance Overhaul | @Purplejump |
| RealmHeart | @itsBrazyy |
| Character Continuity | @AzuretheWitch |
| USC-E / Utility Scripts Collection | @Intask (original USC attribution) |
| Living Meters | @mahesvara.1337 (original README credit; bundled MIT notice credits Oratorian) |
| Story Card Extension | @kenflesh |
| AR (Anti-Repetition) | Original creator not identified in the supplied README; attribution to be confirmed |
| Dice Roll | @p0isontea (bundled script also credits grenith for modifications) |
| Coin Flip / Coin Toss | @grenith (original README credit; bundled script credits helpfulDuckie, based on PoisonTea's Dice Roll) |

### Legacy V4 credits

| Script | Creator |
|:--|:--|
| Calendar & Event System (CES) | @LeCroc |
| World Time Generator (WTG) | @Aness (helpfulduckie) |

<details>
<summary><b>Original creators' discussion threads</b></summary>

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

</details>

## Community

<div align="center">
  <p><a href="https://discord.com/channels/903327676884979802/1526025190243307702"><img alt="Master Merged Script discussion" src="https://img.shields.io/badge/MMS-DISCUSSION-5865F2?style=for-the-badge&logo=discord&logoColor=white" /></a>
  <a href="https://discord.gg/MXNqpSbuZT"><img alt="Join the AI Dungeon Discord" src="https://img.shields.io/badge/AI%20DUNGEON-DISCORD-5865F2?style=for-the-badge&logo=discord&logoColor=white" /></a></p>
  <p><sub>Join the AI Dungeon Discord to access the discussion threads.</sub></p>
  <hr />
  <p><strong>◈ Create. Explore. Evolve. ◈</strong></p>
  <p><em>Thank you for playing, and please show the original creators some love!</em></p>
  <p><sub>Header animation by @dualvoidanima on GIPHY.</sub></p>
  <p><a href="#top">Back to top ↑</a></p>
</div>
