# 0.0.1 (2023-12-28)
## Features

Initial release. Each change is marked as either an "Addition", "Replacement", or "Removal". The following changes were made from the original source data:

### Actions

* **Search** (Replacement): Revised to: "When you SEARCH, you attempt to identify hidden characters. To SEARCH in a mech, make a SYSTEMS contested by the AGILITY checks of all HIDDEN characters within SENSORS.<br>To SEARCH as a pilot on foot, make a contested skill check, adding bonuses from triggers as normal. This can be used to reveal characters within RANGE 5.<br>Any HIDDEN character who loses the contested check immediately loses HIDDEN and can be located again by any character." 
    * This change makes Search easier to perform and smooths over homebrew cases where a GM doesn't reveal a Hidden NPC on the map.

* **Brace** (Replacement): Replace the last paragraph with: "Due to the stress of bracing, you are DAZED until the end of your next turn." 
    * This is functionally identical to the original, except it leverages the new **Dazed** condition (see [Statuses]).

### Core Bonuses

* **Briareos Frame** (Replacement): Replace "When it's reduced to 0 HP and 0 Structure" with "1/scene, when it would be destroyed". 
    * This change makes Briareos more reliable when faced with effects that instantly destroy a mech.

### Frames

* **Everest** (Replacement, Removal): This came from a suggestion from Perijove on the PilotNET Discord server. Remove the Initiative trait. Replace "Power Up" with the following: "Power Up, Active (1CP), Protocol, Efficient. On this turn, you may take 1 quick action as a free action. Until the start of your next turn, gain +1 accuracy to all your attack rolls, checks, and saves."
    * This variant aims to dial back the Everest for one-shot and playtesting purposes. When there's only one or two combats before a Full Repair, consider using this variant to keep one of the combats from getting steamrolled by a normal Everest.

* **Lancaster** (Addition, Replacement): See "Latch Drone" under [Weapons].

* **Death’s Head** (Replacement): Replace Neural Shunt with the following: "Neural Shunt, Active (1CP), Full Action, Efficient. As a Full Action, make an attack using a weapon mounted on your mech. On a hit, the attack deals the maximum possible damage. One target of this attack is automatically hit, and the attack is treated as a critical hit against them. Against that target, this attack cannot miss or be redirected in any way."
    * This is an experimental change for the Death’s Head, intended to focus on the mech's reliability when landing attacks. What it loses in massive damage, it makes up for in guaranteed damage.

* **Mourning Cloak** (Replacement):
    * Increase the frame's Tech Attack from +0 to +1.
        * The frame has an Invade system in-license. If Monarch can have +1 Tech Attack, so can the Mourning Cloak.
    * Replace the last sentence of Blinkspace Jump with the following: "If you roll the same number on all three dice, you become Intangible until the end of your next turn."
        * The original version of Blinkspace Jump has a 1 in 36 chance of preventing a player from playing for the rest of the combat, odds high enough to justify never using the action. This reduces the penalty for triples to instead play off of Intangible, similar to FADE Cloak. In addition, this use of Intangible still confers defensive benefits at the cost of offensive pressure.

* **Gorgon** (Replacement): Replace the effect of Extrude Basilisk with the following: "You project a horrifying basilisk, a visual data-pattern that is incredibly harmful to NHPs and electronic systems, and hard to look at even for humans. For the rest of the scene, hostile characters must succeed on a Systems save before attacking you or any allied characters within Range 3. On a failure, they don’t lose the attack, but they must select a different target for the attack. The target cannot be you or any allied character within Range 3 of you. If the attack was an area of effect, the attacker must position it such that it no longer targets you or any of your allies within Range 3. If no valid targets exist, the attack and action to use it are lost."
    * This effect prevents attacks against the Gorgon's allies without aggressively Stunning the rest of the enemy forces. This is intended to make Gorgon more manageable in one-shot contexts where only one or two combats occur before a Full Repair.

* **Minotaur** (Addition, Replacement): Most of these changes were cribbed from [Kai Tave](https://kaitave.itch.io/), a Lancer content creator.
    * Via Kai: Add the following sentence to the start of "Localized Maze": "The Minotaur is Immune to Immobilize from hostile sources."
        * Give the Minotaur resilience against Grapples and other effects that hinder its positioning.
    * Via Kai: At the end of the "Metafold Maze" Quick Action, add the following sentence: "If you hit with a tech attack from a source with the Full Tech tag, you may instead activate this ability as a free action."
        * Minotaur's kit heavily revolves around Full Tech systems. This rewards the Minotaur for using its own systems and committing to Full Tech actions.
    * At the end of "Maze" Full Action, add the following: "If this Stunned condition would be cleared in any way besides passing this save, it is instead replaced with Dazed under the same circumstances. This Dazed condition cannot be cleared in any other way."
        * This improves the stickiness of Maze's control effect, leveraging Dazed to create a "middle ground" that reduces enemy action economy without completely shutting them out of the fight.

* **Tokugawa** (Removal): Only allow melee attacks to deal Limit Break's bonus damage.
    * Artillery Tokugawa oftentimes performs better than Melee or CQB Tokugawa, since it can camp out of range of punishment while using Overclock. This change reduces the damage returns on Artillery Tokugawa, letting players decide between leveraging the Tokugawa's supreme range bonuses, or gambling with higher damage in melee ranges.

* **Atlas** (Replacement): Replace the last sentence of Giantkiller with the following: "While occupying the same spaces as any character, that character treats the Atlas as if it is Hidden, and all other characters treat the Atlas as though it has soft cover."
    * This improves the Atlas's ability to single out targets by conferring additional defense through Hidden. It's easily counteracted by moving out of the Atlas's space, at the risk of provoking Overwatch (and, if the target was originally Prone, it may potentially require inefficient action use, such as using Boost or crawling while Prone).

* **Sagarmatha** (Replacement): Increase the frame's base HP to 10.
    * The basic defender mech with Guardian should not have the same HP/armor statline as the damage-oriented Metalmark and Monarch— Replacement Parts and (marginally) higher Repair Cap be damned.

* **Enkidu** (Replacement): In Bloodsense, replace "half of their maximum HP" with "7 HP".
    * This changes Bloodsense to more strongly synergize with Bifurcate, without directly strengthening Bifurcate.

### Mods

* **Nanocomposite Adaptation** (Replacement): Increase `license_level` from 2 to 3. 
    * This is part of a larger adjustment to the Balor license to make more powerful options gated behind higher license investment.

### Statuses

* **Dazed** (Addition): Add a new Condition called "Dazed", with the following effects: "DAZED mechs can only take one quick action – they cannot OVERCHARGE, move normally, nor take full actions, reactions, or free actions." 
    * This codifies the downsides of the Brace reaction, while also opening the floor to replacing some "Stunned" effects with the less punishing "Dazed."

* **Drained** (Addition): Add a new Condition called "Drained", with the following effects: "DRAINED mechs deal half damage, heat, or burn on all attacks."
    * This pulls from the revised Structure & Overheating tables from Maria's [GMS Crisis Catalog](https://esbionarshadow.itch.io/gms-crisis-catalogue), for potential use in future changes.

### Systems

* **Cable Winch System** (Addition):
    * At the end of the second paragraph, add the following sentence: "The cables snap if the affected target Teleports."
        * This brings the Cable Winch System in line with Atlas's Kraul Rifle, at least in-universe.
    * Add the following paragraph to the end of the description: "Lastly, these cables can be attached to a movable Objective. For Objectives, follow the this system's attachment and dragging rules as those for characters; in addition, you may move an attached Objective without starting your turn adjacent to it. The cable snaps if you involuntarily move more than 5 spaces from the Objective."
        * This adds some flexibility to the Cable Winch by letting it explicitly used for moving "Escort Objectives." It avoids most pitfalls of extra movement since it inflicts "Slowed" on the user and breaks if the user is further than 5 spaces away from the Objective.

* **MULE Harness** (Replacement): Replace "non-Immobilized characters" with "non-Immobilized allied characters".
    * This prevents odd cases where hostile characters can climb the MULE Harness.

* **Tracking Bug** (Addition): After the first sentence, add the following sentence: "This tech attack ignores Invisible and does not require line of sight."
    * This allows easier use of Tracking bug against foes that are typically always Invisible or positioned outside of Line of Sight, though it still cannot target Hidden characters.

* **FADE Cloak** (Replacement, Removal): Replace "intangible" with the keyword "Intangible". From the first paragraph, remove all but the first sentence.
    * This is a simple clarification post-KTB that the rules text in FADE Cloak are simply reiterating the rules for Intangible. This prevents odd RAW interpretations where the FADE Cloak user can't actually interact with Intangible characters.

* **Markerlight** (Addition): After "cannot benefit from soft cover", add "or Invisible". 
    * This expands the anti-Invisible options available to the Swallowtail.

* **Hive Drone** (Replacement): Increase `license_level` from 1 to 2. 
    * This is part of a larger adjustment to the Balor license to make more powerful options gated behind higher license investment.

* **Flak Launcher** (Replacement): Replaced with a weapon version of the system. See [Weapons] for more information.

### Talents

* **Exemplar** (Replacement): In Rank 3, "To the Death", replace "this effect ceases for them until the start of your next turn" with "this effect ceases for them until the end of the current turn".
    * This improves uptime on "To The Death" when dealing with off-turn attacks.

* **Gunslinger** (Replacement): In Rank 3, "I Kill With my Heart", replace "Each time you hit with" with "Each time you hit a hostile character with". 
    * This prevents players from exploiting Gunslinger by hitting objects, terrain, allies, or themselves.

* **Hacker** (Addition): Add the following sentence to Rank 1, "SNOW_CRASH": "If possible, the target cannot choose an option to which they would be IMMUNE." 
    * This ensures that SNOW_CRASH will always have some effect on a given character, such as a character with Heavy Frame who would normally choose to be pushed (but be IMMUNE to that push).

* **Stormbringer** (Addition): Upon suggestion from [Kai Tave](https://kaitave.itch.io/): In Rank 3, "Torrent", add the following sentence to the end of the first paragraph: "If you consumed Lock On as part of using Stormbending, lower the value by 2 instead." 
    * This synergizes with Rank 1's Lock On benefits and makes the Massive Attack more accessible in an average fight.

### Weapons

* **Heavy Machine Gun** (Replacement): Replace damage with `2d6+2 Kinetic`. 
    * HMG stands head and shoulders above many other Heavy mount options, with minimal investment to overcome its Inaccurate tag. While reducing the damage may simply be a bandage on a larger wound, this may encourage looking investing in different Heavy options by lowering the theoretical damage ceiling.

* **Swarm/Hive Nanites** (Replacement): Reduce `license_level` from 3 to 1. 
    * This is part of a larger adjustment to the Balor license to make more powerful options gated behind higher license investment.

* **Flak Launcher** (Replacement): Replaces the Flak Launcher system, using the following profile, mostly taken from a suggestion from [Kai Tave](https://kaitave.itch.io/):
    * **Flak Launcher**: Main Cannon, Smart, Range 15, 3 Explosive Damage. On Attack: If the target if flying, they must succeed on a Hull save or immediately land (this counts as falling without any damage), and additionally become Slowed and can’t fly until the end of their next turn.
    * This replacement provides the Barbarossa with a utility option for its Main mounts, while also making the effect more consistent by always occurring on attack and targeting a different save than Agility, which is typically the strongest HASE skill for flying NPCs. Kai's original design had the "landing effect" only occur on a hit; I changed the landing effect to "On Attack" to bypass the common "you miss" effects that flying NPCs typically have (like Ace's Barrel Roll).

* **Latch Drone** (Addition, Replacement): Change the original "On Hit" effect into an "On Attack" effect. Add the following "On Hit" effect: "The target clears one condition that was not self-inflicted."
    * This makes healing with the Lancaster much more consistent, while providing an added bonus of potentially clearing a condition (a rare ability on the Players' side of Lancer).