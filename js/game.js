document.addEventListener('DOMContentLoaded', function () {
    var roleDescriptions = {
        'role-1': "An assassin is an agile hero that specializes in killing or disabling roaming targets picking them of as they try to replenish HP. Focused on infiltration, deception, and mobility, assassins are opportunistic hunters who find favorable moments within a fight before jumping into the fray. Regardless of the size of the enemy team, assassins specialize in positioning and artful killing. They strike when the time is right – no sooner, no later. Assassins are more suitable to be played by experienced players as they have low HP and high burst damage. They are ideal for taking out opponents easily, but are easier to be killed due to bad positioning and wrong timing.\n\n" +
            "Assassin is a type of role that has high burst damage, specializing in timing their attacks. This role has low durability but is agile in killing the main damage dealer of the enemy. They often wait in striking their attacks to avoid getting killed because their weakness is crowd control skills. It is recommended for most assassin heroes to have lifesteal to increase their sustainability during team fights.\n\n" +
            "The typical assets that they may have include:\n" +
            "<ul>" +
            "<li>Being nimble, low HP</li>\n" +
            "<li>Skillsets that allow them to chase enemies and have a good set of blink skills</li>\n" +
            "<li>Agile and quick</li>",
        'role-2': "<p>Tank heroes are the most durable among all in mobile legends. These front-line giants help in attacking enemies. They're usually found leading the charge, choosing the right times and situations to initiate aggression.</p>" +
            "<p>Many tanks can also protect their more fragile teammates by stunning or pushing around dangerous foes and limiting their damage potential.</p>" +
            "<p>In mobile legends, most classes of heroes are really versatile in terms of abilities and with the item crafting variations a 'tank' can be played as a DPS if you choose the right equipment.</p>" +
            "<p>Usually, tanks are laning on the bottom tower. Tank has high defense and hit point, but low damage.</p>" +
            "<p>When used properly, a tank could be the strongest hero in the game.</p>" +
            "<p>A tank is a type of role that has high HP and high defense while having a very low attack. This position is always at the front by acting as a shield against enemies, taking the damage.</p>" +
            "<p>With their durability, they're very good for dividing the enemy formation and allowing the damage dealers to poke the opponents while you absorb damage for them, thus they are really useful in assisting teammates.</p>" +
            "<p>They will typically have these assets:</p>" +
            "<ul>" +
            "<li>Naturally bulky, higher natural HP, Magic Resistance, and Armor.</li>" +
            "<li>Some form of crowd control (CC), usually a stun, slow, or taunt.</li>" +
            "<li>Great synergy (due to abilities) with certain defensive items, making it very desirable to get them.</li>" +
            "<li>Most tanks have some sort of initiation; an ability to open up the fight giving their team an advantage.</li>" +
            "</ul>",
        'role-3': "<p>Fighters are close-range combatants that possess a mix of offensive and defensive capabilities.</p>" +
            "<p>While they don't have as much utility as a tank or as much damage as an assassin, a fighter's damage will add up over time to make it a major threat.</p>" +
            "<p>Each fighter has a unique blend of mobility, damage, disruption, and durability.</p>" +
            "<p>Fighter is an intermediate melee heroes, between Tank durability or Assassin damage, hence make fighter serve as multi-purpose combatant, such as Semi Tank, Crowd Controller, or Tank and Assassin.</p>" +
            "<p>A fighter is a type of role that can act as a semi-tank and a damage dealer because of their durability and damage.</p>" +
            "<p>This role is versatile depending on the team lineup. They're sometimes used in soloing a lane or in accompanying an ally. They usually shine during the late game.</p>",
        'role-4': "<p>Marksman are ranged heroes whose power is almost entirely based on their basic attacks: by using their reach to land massive continuous damage from a distance, marksmen are capable of taking down even the most difficult opponents when positioned behind the safety of their team, and perform better at securing objectives such as the Lord and turrets.</p>" +
            "<p>Marksman is a type of role that has a high basic attack, dealing damage at a distance. This type is commonly referred to as carry/ADC [Attack Damage Carry].</p>" +
            "<p>This role usually has low durability and mobility, thus playing safe is recommended by keeping your distance from your enemies or by being accompanied by allies.</p>" +
            "<p>Most marksmen deal damage through basic attacks, so they can take down turrets quickly. They shine during the late game.</p>",
        'role-5': "<p>A magician (abbreviated as mage) is a hero with a longer range, ability-based area of effect damage, and crowd control that they may utilize to strike from a distance.</p>" +
            "<p>Mages primarily focus on magic skills that deal magic damage, usually burst damage, and as a consequence, they spend a lot of gold on equipment that allows them to do more damage and have shorter skill cooldowns.</p>" +
            "<p>Mage is a type of role that has high magic power and high CD in skills, specializing in dealing with magic damage with their skills. This role usually has low durability, thus is often the target in team fights, needing protection.</p>" +
            "<p>Most heroes in this role have crowd control abilities or have high burst damage.</p>",
        'role-6': "<p>The support role is to aid and help protect your allies in any situation. Your role is to shield or heal them, to tank some damage or sacrificing yourself to keep others alive. You are often giving up the glorious kills in the game to support others, but in the end, it's usually the support who secures the true MVP award.</p>" +
            "<p>Support heroes usually lane with the marksman in the top lane or at mid lane to be able to travel quickly where they are needed.</p>" +
            "<p>Support is a type of role that provides some kind of benefit to their team. These benefits provide sustainability through healing or giving shields or dealing some form of CC like stunning enemies.</p>" +
            "<p>They often accompany carry heroes to help them level up faster and are recommended to participate in team fights to help teammates in accomplishing objectives and not solo a lane.</p>" +
            "<h5>Playing Support</h5>" +
            "<p>The most important thing that support does is to support their team. That often means sticking with your allies and being there when they need you. Pairing a support hero with a high damage dealer hero like a marksman is the current meta.</p>" +
            "<p>Keeping the damage dealers alive so they can do the fighting is your job. Things you can do to support them would be:</p>" +
            "<ul>" +
            "<li>Help your ally to farm gold and experience as fast as possible without subtracting from their income by dealing the final blow.</li>" +
            "<li>Keep them healthy by utilizing heals or shielding them from damage.</li>" +
            "<li>Always look at the mini-map and note where your allies are and where the threat to your ally may come from.</li>" +
            "<li>Stuns onto enemies are beloved by ADC champions almost as much as heals are. Whether it's to prevent a kill from escaping, to change the tide of engagement, or to secure an escape for yourself and an ally.</li>" +
            "</ul>",
    };

    var roles = document.querySelectorAll('.roles');
    var roleDescription = document.getElementById('role-description');

    function updateRoleDescription(roleId) {
        roleDescription.innerHTML = roleDescriptions[roleId];
    }

    roles.forEach(function (role) {
        role.addEventListener('click', function () {
            var roleId = role.classList[1];
            updateRoleDescription(roleId);
        });
    });

    updateRoleDescription('role-1');
});