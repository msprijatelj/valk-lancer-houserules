# Documentation (Version 0.0.6)

This is a living document detailing my personal house rules for the [player-facing side of the Lancer RPG](https://massif-press.itch.io/corebook-pdf-free). It contains both rules that I have used and rules I want to test, and it should be treated as highly experimental. Feel free to pilfer rules and ideas from this document and make them your own. I cannot guarantee that they will improve the experience for all Lancer tables, but with luck, maybe they'll prove useful to a few.

# Rules

## Actions

### Aid

* Add a new Quick Action, Aid (adapted from an idea by Acatalepsy on Pilot NET). Allows allied characters to split the action cost of Stabilize so effects like Stunned, Jammed, and Immobilized are less frustrating to manage. Future iterations may restrict the Stabilize so that it can only clear a self-inflicted condition, but for now it'll work the following way:
    > "When you AID, you assist a mech so it can STABILIZE more easily. Choose an adjacent character. On their next turn, they may STABILIZE as a quick action. They can choose to take this action even if they normally would not be able to take actions (for example, by being affected by the STUNNED condition)."

### Brace

* Change the "1/round" tag to "1/scene".
* Replace the Trigger with:
    > "You take damage, burn, or heat from a source other than yourself."
* Replace the first sentence of the Effect with:
    > "You gain RESISTANCE to all damage, burn, and heat from the triggering source."
  * Changes Brace to be triggered off of any single instance of damage, burn, or heat. This admittedly eliminates some player-beneficial edge cases when protecting against some Tech Attacks (e.g., Tear Down, Predatory Logic) but also opens up use cases for protecting against damaging saves (e.g., Atlas Missiles) or deterministic damage (e.g., Javelin Rockets).
* Remove the last paragraph.
  * Replace the heavy action drawback of Brace with a 1/scene usage drawback instead. Makes this more akin to D&D 4e's Second Wind (which was 1/encounter). Effectively prevents spamming the reaction while also making the "this is situational" intent of the reaction clear.

### Overcharge

* Replace the second paragraph with:
    > "After you make an attack roll, skill check, or save and know the result you can OVERCHARGE your mech, allowing you to reroll the attack roll, skill check, or save once and use the new result. This free action can be taken even when it is not your turn."
* Replace the last sentence with:
    > "A rest or FULL REPAIR resets this counter."

  * Default Overcharge is frustrating for several reasons: Tactical RPGs live and die by action economy, usually because "more actions" means "more chances to kill something." In Lancer's case, Overcharge is tied to Heat, which then highly incentivizes Strikers and Artillery to take Engineering, Nuclear Cavalier, and HA licenses to avail themselves of this added economy. From a table play perspective, since a PC mech can always Overcharge as long as they have a mech, there's the perpetual question of "will this player Overcharge or not this turn." This uncertainty, as well as other complications of how to order the Overcharge with the rest of the PC's actions, can slow combat to a halt if the player is indecisive. Therefore, I take a page out of Pathfinder 2e's book to transform Overcharge into something akin to Hero Points: It's still tied to Heat (for better or for worse), but it instead focuses upon improving the Quality of a given action instead of the Quantity of those actions. Superheavy and Full Tech users will likely benefit from this, and Overcharge Loop builds will likely suffer; the question is whether these ripples will be manageable or intractable. At the very least, all builds with Overcharge will now have an additional defensive measure against dangerous saves, like those forced by Structure Damage/Overheating and many Stun effects from NPCs. Playtesting will tell if this change yields more benefits than drawbacks.

### Search

* Revised to:
    > "When you SEARCH, you attempt to identify hidden characters. To SEARCH in a mech, make a SYSTEMS contested by the AGILITY checks of all HIDDEN characters within SENSORS.<br>To SEARCH as a pilot on foot, make a contested skill check, adding bonuses from triggers as normal. This can be used to reveal characters within RANGE 5.<br>Any HIDDEN character who loses the contested check immediately loses HIDDEN and can be located again by any character."

  * This change makes Search easier to perform and smooths over homebrew cases where a GM doesn't reveal a Hidden NPC on the map.

### Stabilize

* Modify the first bullet point for the first set of options for Stabilize to the following:
    > "Cool your mech, clearing all heat, EXPOSED, and OVERHEATED."

  * This references a new status, OVERHEATED, which can be cleared via Stabilizing to clear heat (see "Statuses").

## Statuses

### Dazed

* Add a new Condition called "Dazed", with the following effects:
    > "DAZED mechs can only take one quick action – they cannot OVERCHARGE, move normally, nor take full actions, reactions, or free actions."
  * This codifies the downsides of the Brace reaction, while also opening the floor to replacing some "Stunned" effects with the less punishing "Dazed."

### Drained

* Add a new Condition called "Drained", with the following effects:
    > "Characters become DRAINED when they’re rebalancing their power draw due to high reactor heat – their weapons are spinning down and their motor servos become sluggish. DRAINED mechs deal half damage, heat, or burn on all attacks."
  * This pulls from the revised Structure & Overheating tables from Maria's [GMS Crisis Catalog](https://esbionarshadow.itch.io/gms-crisis-catalogue), for potential use in future changes.

### Overheated

* Add a new Status, Overheated:
    > "Mechs become OVERHEATED when their reactor begins emergency venting protocols, locking down the mech's ability to generate heat. When a mech would become EXPOSED by overheating, they additionally become OVERHEATED. An OVERHEATED mech cannot take any actions or activate abilities that would inflict heat upon themselves, including using OVERCHARGE and activating systems with the HEAT X (SELF) tag. Weapons with the OVERKILL tag instead lose the tag while OVERHEATED. A mech can clear OVERHEATED by taking the STABILIZE action."

  * This is part of a larger experiment with inflicting Heat as a stronger control tool. One of my undocumented NPC house rules adds the Heat (Self) tag to all NPC features with the Recharge tag. The intent is that when a mech becomes Exposed via exceeding their Heat Cap, they also become Overheated and unable to use their limited-use abilities until they Stabilize to clear Heat and Exposed. Playtesting will tell if this is an interesting or necessary change!

## Movement

### Lifting and Dragging

* Add the following sentence to the start of the first paragraph:
    > "As a **quick action**, a character may start to **handle** an adjacent object or willing character by **lifting** or **dragging** them. A character may choose to stop **handling** an object as a **free action**."
  * Codify lifting and dragging with a unified action. "Protocol" and "No Action" are also valid initiation actions, I'm just starting with "Quick Action" to start. Part of a larger push to make "object-like objectives" for Escort and Extraction that behave like any other object.

* Add the following paragraph:
    > “If a character starts to **handle** an object handled by a hostile character, the object does not move until it is only handled by characters allied with each other. If a character **handling** an object is involuntarily moved such that they are no longer adjacent to the object, they cease to **handle** the object.”
  * Ensure that objects can be contested by other characters.

### Flight

#### Carrying Objects and Flight

* Add the following sentence to the end of the paragraph:
    > "Outside of zero-g environments, when carrying a character or **handling** an object object while flying, a mech cannot fly higher than **1 space over any surface**."
  * Allow limited flight while carrying something, but prevent escape into the stratosphere.

### Teleportation

* Add the following sentence to the end of the second paragraph:
    > "If a character teleports, they stop grappling any characters or **handling** any objects prior to teleporting."
  * End "teleport kidnapping" and edge cases where objects can teleport with someone (preventing Sunzi shenanigans).

## Wear and Tear

### Structure Damage Table

Replace the rules for Structure Damage with the following:
  > "When a character takes structure damage, instead of making a structure damage check, the affected character chooses to either be DAZED until the end of their next turn, or to suffer the System Trauma effect from the STRUCTURE DAMAGE TABLE (Lancer, p. 80)."

* Structure damage in Lancer is a strange mechanic that feels more at home among Old-School Revival-style Wound Tables than a modern tactical RPG. Most of the time, it's not the NPCs that are killing PCs, but the Structure Damage table! On the NPCs' side, if they don't die outright to a Direct Hit, System Trauma may instead ruin their entire gameplan as the Artillery's singular gun breaks. All that said, I have a soft spot in my heart for System Trauma and the aesthetic of mech parts getting blown off. So, I offer a compromise: Remove all chances of instant death, and instead offer a choice between long term loss of action *quality* (System Trauma) or short term loss of action *quantity* (Dazed). This lets players feel badass as they power through the loss of a system anyway, and allows NPCs to keep essential pieces of their kit while still suffering a penalty for losing Structure. Bonus points: No complicated nested table results to worry about!

### Overheating Table

I am adapting this rule from [Stormtalus](https://stormtalus.itch.io/)'s house rules discussed on Pilot Net. Replace the rules for Overheating and Reactor Stress with the following:
  > "All characters with a HEAT CAP – PC or NPC – only have 1 STRESS and cannot gain more. When a character would take that would put them over their HEAT CAP, they become EXPOSED and OVERHEATED. Any they take beyond their HEAT CAP is instead taken as energy damage that cannot be reduced."

* This change removes the potential for a reactor meltdown, but unifies the rules for multi-Stress and single-Stress characters in a way that prevents outright heatgunning from killing a PC or NPC. Mechs generally twice as much HP than their Heat Cap, and safety from "overheating damage" is a single Stabilize away, so this ensures that inflicting Heat is more of a control effect (through Overheated and encouraging Stabilize) than just a second health bar for both PCs and NPCs.

## Sitreps

### Escort

#### Objective

* Replace everything after the third sentence with the following:
    > "The Objective can be lifted and dragged like any other object."
  * Start treating Objectives like objects by using the revamped Lifting and Dragging rules.

### Extraction

#### Objective

* Replace everything after the third sentence with the following:
    > "The Objective can be lifted and dragged like any other object."
  * Start treating Objectives like objects by using the revamped Lifting and Dragging rules.

### Holdout

#### Scoring

* Replace "Scoring" with the following:
    > "The PCs start with 0 points. At the end of each round, they gain points equal to the number of PCs in the CZ minus the number of enemies in the CZ (minimum 0)."

#### Victory Conditions

* Replace "Victory Conditions" with the following:
    > * PC Victory: The PCs score points equal to 3 times the number of PCs.
    > * Enemy Victory: The PCs gain no points for 2 consecutive rounds. If there are any PCs remaining on the field when this takes place, they are captured or overrun.
  * Again, I'm not a huge fan of round timers. In addition, I want to incentivize hunkering down on the CZ. So, if the PCs hold the point and fend off their aggressors, they'll win at a much quicker rate. If their points stall, they're routed.

### Recon

#### Control Zones

* Replace "Four CZs (typically 4 spaces on each side)..." with "One CZ per PC (typically 4 spaces on each side, maximum 4 zones)..."
  * Provide minor scaling for lower PC counts. Most relevant for 3 PCs.

* Replace the second and third sentences with:
    > "While inside a CZ, PCs may take a quick action to survey the CZ; each CZ can only be surveyed once, and a given PC can only survey one CZ per round. Once all CZs have been surveyed, the GM randomly determines the True CZ."

# Talents

### Exemplar

* In Rank 3, "To the Death", replace "this effect ceases for them until the start of your next turn" with "this effect ceases for them until the end of the current turn".
  * This improves uptime on "To The Death" when dealing with off-turn attacks.

### Gunslinger

* In Rank 3, "I Kill With my Heart", replace "Each time you hit with" with "Each time you hit a hostile character with".
  * This prevents players from exploiting Gunslinger by hitting objects, terrain, allies, or themselves.

### Hacker

* Add the following sentence to Rank 1, "SNOW_CRASH": "If possible, the target cannot choose an option to which they would be IMMUNE."
  * This ensures that SNOW_CRASH will always have some effect on a given character, such as a character with Heavy Frame who would normally choose to be pushed (but be IMMUNE to that push).

### Stormbringer

* Upon suggestion from [Kai Tave](https://kaitave.itch.io/): In Rank 3, "Torrent", add the following sentence to the end of the first paragraph: "If you consumed Lock On as part of using Stormbending, lower the value by 2 instead."
  * This synergizes with Rank 1's Lock On benefits and makes the Massive Attack more accessible in an average fight.

# Mech Equipment

## GMS

### GMS Core Bonuses

#### Auto-Stabilizing Hardpoints

* Replace the effect with the following:
  > "Choose one mount. If the weapons on the mount deal any Kinetic, Energy, or Explosive damage and don't already have the Reliable tag, they gain Reliable 1 if they are Auxiliary or Main or Reliable 2 if they are Heavy or Superheavy."
  * The free accuracy from Auto-Stabilizing Hardpoints too easily solves the problem of the Inaccurate tag. I want to make generic Accuracy more precious and harder to achieve, but I also see the appeal of improving weapon reliability. Therefore, I want to try replacing AutoStab's accuracy with the Reliable tag, just to see what happens.

#### Overpower Caliber

* Replace the effect with the following:
  > "Choose one weapon. It gains Knockback 1. In addition, on a Critical Hit with this weapon, the target must pass a Hull save or be knocked Prone."
  * Overpower Caliber is one of many generic Bonus Damage abilities in the game. It's fiddly to track 1/round and contributes to Lancer's "damage stacking" DPS meta. I replace the Bonus Damage with Knockback and the occasional Prone to shift it away from a selfish damage tool and more towards a utility/support tool that can both help play the objective and assist allies through leaving a target vulnerable.

### GMS Equipment

#### GMS Nexus (Hunter-Killer)

* Add the "Accurate" tag.
  * HK Nexus doesn't get a lot of love from Centimane users since Flex and Aux/Aux mounts can fish for more crits with the Light Nexus. This should hopefully make the HK Nexus a little more competitive and satisfying.

#### GMS Heavy Machine Gun

* Replace damage with `1d6+4 Kinetic`. Add `Reliable 3` tag.
  * HMG stands head and shoulders above many other Heavy mount options, with minimal investment to overcome its Inaccurate tag. This change lets it stay competitive in the Heavy Gunner department whilst reducing its damage ceiling.

#### GMS Heavy Melee

* Increase Threat from 1 to 2.
  * Taking notes from [Lancers in the Dark](https://docs.google.com/document/d/19LcfVsvo9u5FaaDMvSytB2YQhnBGcSRMrsAEKRnRVdI/edit), adding some extra Threat to the Heavy Melee helps keep it competitive with other raw statsticks like Raleigh's Kinetic Hammer.

### GMS Everest

#### Everest Frame

This came from a suggestion from Perijove on the PilotNET Discord server:

* Remove the Initiative trait, and replace "Power Up" with the following:
    > Power Up - Active (1CP), Protocol, Efficient - On this turn, you may take 1 quick action as a free action. Until the start of your next turn, gain +1 accuracy to all your attack rolls, checks, and saves.
  * This variant aims to dial back the Everest for one-shot and playtesting purposes. When there's only one or two combats before a Full Repair, consider using this variant to keep one of the combats from getting steamrolled by a normal Everest.

### GMS Sagarmatha

#### Sagarmatha Frame

* Increase the frame's base HP to 10.
  * The basic defender mech with Guardian should not have the same HP/armor statline as the damage-oriented Metalmark and Monarch— Replacement Parts and (marginally) higher Repair Cap be damned.

* Replace the effect of Heroism with:
    > "The Sagarmatha may Brace 2/scene."
  * This change reflects the modification made to the Brace action while preserving the intent of Heroism (getting a "free Brace").

## IPS-N

### IPS-N Core Bonuses

#### Briareos Frame

* Replace "When it's reduced to 0 HP and 0 Structure" with "1/scene, when it would be destroyed".
  * This change makes Briareos more reliable when faced with effects that instantly destroy a mech.

### IPS-N Drake

#### Drake Frame

* Replace the third bullet point of Fortress Protocol with:
    > "You gain an additional use of Brace during this scene."
  * This change reflects the modification made to the Brace action. One could argue that the Drake could spam Brace better with Fortress Protocol up (since the Drake would already be Immobilized), but I feel that getting an extra New Brace is more than reasonable.

### IPS-N Lancaster

#### Latch Drone

* Change the original "On Hit" effect into an "On Attack" effect.
  * This makes healing with the Lancaster much more consistent.
* Add the following "On Hit" effect: "The target clears one condition that was not self-inflicted."
  * This allows Lancaster to play in more of a "cleric" space by providing an avenue of condition removal (a rare ability on the Players' side of Lancer).

#### Cable Winch System

* At the end of the second paragraph, add the following sentence: "The cables snap if the affected target Teleports."
  * This brings the Cable Winch System in line with Atlas's Kraul Rifle, at least in-universe.
* Add the following sentence before the last sentence of the last paragraph:
    > "The cable snaps if you involuntarily move more than 5 spaces from an attached object."
  * This covers an edge case of involuntary movement when attached to an object. Paired with my updated Lifting and Dragging rules, this adds some flexibility to the Cable Winch by letting it explicitly used for moving "Escort Objectives." It avoids most pitfalls of extra movement since it inflicts "Slowed" on the user (as per lifting and dragging) and breaks if the user is further than 5 spaces away from the Objective.

#### Restock Drone

* Reduce the action cost to activate the Restock Drone to a Free Action.
  * By adding the "Aid" Quick action, it seemed prudent to show a little love to the Restock Drone. Since the NPC Restock Drone doesn't require an action to activate, reducing the Lancaster's Restock Drone activation cost to a Free Action seemed fair, especially since it's innately Limited 2.

#### MULE Harness

* Replace "non-Immobilized characters" with "non-Immobilized allied characters".
  * This prevents odd cases where hostile characters can climb the MULE Harness.

### IPS-N Zheng

#### Total Strength Suite I

* Add the following sentence prior to the last sentence:
    > "If an object with HP is moved in this way, it takes 1 AP Kinetic Damage for each space moved."
  * Prevent abuse of moving object-like objectives by tying a cost to TSS1's use.

## SSC

### SSC Core Bonuses

#### Full Subjectivity Sync

* Add the following:
    > "In addition, you gain IMMUNITY to all damage and effects from missed attacks."

  * Inspired by a conversation on Pilot NET that mentioned that Orchis's Perfect Parry would be a great Core Bonus for SSC, as well as conversation on how to make Full Subjectivity Sync more appealing. Orchis is still the only one that can confer this benefit to allies, so I am relatively okay with this "selfish" effect as-is.  If Orchis needs more juice after this, maybe I'll give it something extra (or tone down this core bonus).

#### Integrated Nerveweave

* Replace the effect with the following:
    >Gain +1 Speed. In addition, you may move an additional 1 space when you Boost.

  * Another one inspired from conversations with Pilot NET, this provides Nerveweave a more reliable speed bonus while effectively maintaining the original benefit.

### SSC Atlas

#### Atlas Frame

* Replace the last sentence of Giantkiller with the following: "While occupying the same spaces as any character, that character treats the Atlas as if it is Hidden, and all other characters treat the Atlas as though it has soft cover."
  * This improves the Atlas's ability to single out targets by conferring additional defense through Hidden. It's easily counteracted by moving out of the Atlas's space, at the risk of provoking Overwatch (and, if the target was originally Prone, it may potentially require inefficient action use, such as using Boost or crawling while Prone).

### SSC Death’s Head

#### Death’s Head Frame

* Replace Neural Shunt with the following:
    >"Neural Shunt, Active (1CP), Full Action, Efficient. As a Full Action, make an attack using a weapon mounted on your mech. On a hit, the attack deals the maximum possible damage. One target of this attack is automatically hit, and the attack is treated as a critical hit against them. Against that target, this attack cannot miss or be redirected in any way."
  * This is an experimental change for the Death’s Head, intended to focus on the mech's reliability when landing attacks. What it loses in massive damage, it makes up for in guaranteed damage.

#### Tracking Bug

* After the first sentence, add the following sentence: "This tech attack ignores Invisible and does not require line of sight."
  * This allows easier use of Tracking bug against foes that are typically always Invisible or positioned outside of Line of Sight, though it still cannot target Hidden characters.

### SSC Mourning Cloak

#### Mourning Cloak Frame

* Increase the frame's Tech Attack from +0 to +1.
  * The frame has an Invade system in-license. If Monarch can have +1 Tech Attack, so can the Mourning Cloak.
* Replace the last sentence of Blinkspace Jump with the following: "If you roll the same number on all three dice, you become Intangible until the end of your next turn."
  * The original version of Blinkspace Jump has a 1 in 36 chance of preventing a player from playing for the rest of the combat, odds high enough to justify never using the action. This reduces the penalty for triples to instead play off of Intangible, similar to FADE Cloak. In addition, this use of Intangible still confers defensive benefits at the cost of offensive pressure.

#### FADE Cloak

* Replace "intangible" with the keyword "Intangible". From the first paragraph, remove all but the first sentence.
  * This is a simple clarification post-KTB that the rules text in FADE Cloak are simply reiterating the rules for Intangible. This prevents odd RAW interpretations where the FADE Cloak user can't actually interact with Intangible characters.

### SSC Swallowtail

#### Markerlight

* After "cannot benefit from soft cover", add "or Invisible".
  * This expands the anti-Invisible options available to the Swallowtail.
* Replace the first sentence and "On a success" from the second sentence with:
    > "Choose a character within Sensors and line of sight. They must make an Agility save: On a success, they receive Lock On. On a failure..."

  * One of the problems I had with my original Markerlight change was that while it played into the Swallowtail license's anti-Invisible niche, it still required the user to _hit_ the target, which may already be Invisible. Changing the effect from a tech attack to an inflicted save was inspired partly from the Spite's save-based toolkit and partly from some recent play as a Wizard in Pathfinder 2E. The Agility save reflects the target's attempt to evade the markerlight; even if they succeed on the save, the user is still guaranteed Lock On as a consolation prize. On a failure, they'll suffer Markerlight's full effect (including my anti-Invisible change) as normal. This may have less synergy with the Hacker talent, but more with Lesson of the Open Door.

### SSC White Witch

#### White Witch Frame

* Reduce the cap for Ferroreactive Armor's passive to +3 Armor. Reduce the active's armor cap to +6 Armor.
  * White Witch is a polarizing (pun obligatory) frame due to its massive amounts of Armor stacking. Reducing the passive cap to match a Drake's base armor and the active cap to match an Ultra's Argus Armor feels appropriate.

#### Sympathetic Shield

* Add the "Unique" tag.
  * Addressing an easy fix from the [Lancer FAQ](https://lancer-faq.netlify.app/#c5138d).

## HORUS

### HORUS Core Bonuses

#### The Lesson of Disbelief

* Add the following:
    > "In addition, tech attacks made against adjacent allied characters receive +1 difficulty."

  * In a world where the Gorgon and //SCORPION V70.1 exist, this should be a welcome benefit to anti-tech defenders.

### HORUS Balor

Cycle licensed options to gate more powerful options behind a higher license investment.

#### Hive Drone

* Increase `license_level` from 1 to 2.
  * A solid system, but worth moving up to Balor 2 to make space for Swarm/Hive Nanites.

#### Nanocomposite Adaptation

* Increase `license_level` from 2 to 3.
  * Seeking is an inherently powerful tag, as it permits ranged combatants to ignore the primary drawbacks of ranged combat (cover and line of sight). Being able to apply it to any ranged weapon simply demands a higher license investment than Balor 2.

#### Swarm/Hive Nanites

* Reduce `license_level` from 3 to 1.
  * A solid Main Nexus that never gets picked due to being sequestered in Balor 3. Simply making this more accessible.

### HORUS Gorgon

#### Gorgon Frame

* Replace the effect of Extrude Basilisk with the following:
    > "You project a horrifying basilisk, a visual data-pattern that is incredibly harmful to NHPs and electronic systems, and hard to look at even for humans. For the rest of the scene, hostile characters must succeed on a Systems save before attacking you or any allied characters within Range 3. On a failure, they don’t lose the attack, but they must select a different target for the attack. The target cannot be you or any allied character within Range 3 of you. If the attack was an area of effect, the attacker must position it such that it no longer targets you or any of your allies within Range 3. If no valid targets exist, the attack and action to use it are lost."
  * This effect prevents attacks against the Gorgon's allies without aggressively Stunning the rest of the enemy forces. This is intended to make Gorgon more manageable in one-shot contexts where only one or two combats occur before a Full Repair.

### HORUS Lich

#### Wandering Nightmare

* Add the "Unique" tag.
  * Addressing an easy fix from the [Lancer FAQ](https://lancer-faq.netlify.app/#f4b496).

### HORUS Minotaur

#### Minotaur Frame

Most of these changes were cribbed from [Kai Tave](https://kaitave.itch.io/), a Lancer content creator.

* Via Kai: Add the following sentence to the start of "Localized Maze": "The Minotaur is Immune to Immobilize from hostile sources."
  * Give the Minotaur resilience against Grapples and other effects that hinder its positioning.
* Via Kai: At the end of the "Metafold Maze" Quick Action, add the following sentence: "If you hit with a tech attack from a source with the Full Tech tag, you may instead activate this ability as a free action."
  * Minotaur's kit heavily revolves around Full Tech systems. This rewards the Minotaur for using its own systems and committing to Full Tech actions.
* At the end of "Maze" Full Action, add the following: "If this Stunned condition would be cleared in any way besides passing this save, it is instead replaced with Dazed under the same circumstances. This Dazed condition cannot be cleared in any other way."
  * This improves the stickiness of Maze's control effect, leveraging Dazed (see [Statuses](#statuses)) to create a "middle ground" that reduces enemy action economy without completely shutting them out of the fight.

#### Aggressive System Sync

* Add the "Accurate" tag.
  * Quick Techs can be used twice a turn without penalty — and often carry impactful effects, like Eject Power Cores. In comparison, Full Tech actions that make tech attacks are incredibly risky to use, as they are often all-or-nothing attacks with no consolation prize on a miss. In my opinion, if there isn't an easy way to apply a "miss" effect, it's better to simply make the attack easier to hit.

#### Metafold Carver

* On Ophidian Trek, add "up to" before "1d6+1 spaces".
  * Small quality of life update to make Ophidian Trek more appealing and reliable. Now it won't fizzle on a bad d6 roll!

#### Law of Blades

* Add the "Accurate" tag.
  * See Aggressive System Sync.
* Rename "Slave Systems" to "Daemon Possession".
  * Replacing a problematic name with a tongue-in-cheek reference to software daemons.
* Replace the second sentence of newly-renamed Daemon Possession with the following:
    > "On a hit, they immediately take a tech action or tech attack – chosen by you – as a reaction."

  * The original Slave Systems let the user perform basically every non-weapon-related action in the game. Unfortunately, none of those actions are particularly useful to force as a Reaction — especially Stabilize, when targeting is restricted to hostile characters. This change tears out the less useful options and replaces them with a spicier "Predator/Prey Concepts, but for Tech Actions". If giving players access to NPC tech actions is too powerful — even if that access is gated behind a License 3 Full Tech Attack, often against targets with higher E-Defense — then I think the Lancer system has bigger problems.

## HA

### HA Core Bonuses

#### Adaptive Reactor

* Change so that when a character Stabilizes, they may pick a second option from the second group of options.
  * With the change to Overheating, Adaptive Reactor needs a new job. Broadening what a Stabilize can do seems like a decent utility option.

### HA Barbarossa

#### Flak Launcher

* Replaces the Flak Launcher system, using the following profile, mostly taken from a suggestion from [Kai Tave](https://kaitave.itch.io/):
    > Flak Launcher - Main Cannon, Smart, Range 15, 3 Explosive Damage - On Attack: If the target if flying, they must succeed on a Hull save or immediately land (this counts as falling without any damage), and additionally become Slowed and can’t fly until the end of their next turn.
  * This replacement provides the Barbarossa with a utility option for its Main mounts, while also making the effect more consistent by always occurring on attack and targeting a different save than Agility, which is typically the strongest HASE skill for flying NPCs. Kai's original design had the "landing effect" only occur on a hit; I changed the landing effect to "On Attack" to bypass the common "you miss" effects that flying NPCs typically have (like Ace's Barrel Roll).

### HA Sherman

#### Reactor Stabilizer

* Replace the effect with the following:
    > "If an instance of Heat would make you Overheat, you gain Immunity to any damage that would be caused by that instance of Heat."
  * With the removal of Overheating checks, Reactor Stabilizer has an opportunity to be more than a simple reroll to avoid Exposed. This change means that a mech equipped with this system could use a risky, high self-heat option, overheat themselves, and not take excessive overheating damage as a result.

### HA Tokugawa

#### Tokugawa Frame

* Only allow melee attacks to deal Limit Break's bonus damage.
  * Artillery Tokugawa oftentimes performs better than Melee or CQB Tokugawa, since it can camp out of range of punishment while using Overclock. This change reduces the damage returns on Artillery Tokugawa, letting players decide between leveraging the Tokugawa's supreme range bonuses, or gambling with higher damage in melee ranges.

### HA Sunzi

#### Sunzi Frame

* Change Safe Harbor to be limited to the Sunzi's Sensors and Line of Sight.
  * Sunzi is a warping teleportation presence on the battlefield. This will require Sunzi to position itself sensibly to maximize its potential.
* Change Blink Anchor to always consume a charge, and require a reaction to activate. Unwilling characters may ignore this on a successful Engineering save.
  * Blink Anchor carries guaranteed, immense power for very little cost. This change forces Sunzi to be particular about when to activate Blink Anchor and gives NPCs a chance to resist its effect.

#### Accelerate

* Add the following sentence prior to the last sentence:
    > "If an object with HP is moved in this way, it takes 1 AP Kinetic Damage for each space moved."
  * Prevent abuse of moving object-like objectives by tying a cost to Accelerate's use.

#### Blink Charges

* Change Warp Grenade to only affect one character in the blast. That character must be completely within the Blast before and after the teleport.
  * Undo the Word of Tom to limit the amount of chaos one Warp Grenade can cause.

#### Blinkspace Tunneler

* Change so that the effect ends as soon as one character enters the blink tear.
  * As written, Blinkspace Tunneler allows a quick character to get their whole team instantaneously across a map, trivializing movement in many sitreps. This keeps the effect toned down while still allowing a buddy to come along for the ride.

### HA Enkidu

#### Enkidu Frame

* In Bloodsense, replace "half of their maximum HP" with "7 HP".
  * This changes Bloodsense to more strongly synergize with Bifurcate, without directly strengthening Bifurcate.

### HA Gilgamesh

#### Emergency Repair Module

* Replace the second sentence with:
    > "If the target took structure damage as a result of the triggering attack while at maximum structure, they do not suffer from System Trauma or Dazed from that loss of structure."
  * Change ERM to mesh better with the new Structure Damage rules. This preserves the spirit of the original while supporting the lack of a Structure Damage Table.