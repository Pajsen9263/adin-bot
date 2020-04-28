// get role by ID
let myRole = message.guild.roles.get("264410914592129025");

// get role by name
let myRole = message.guild.roles.find(role => role.name === "Moderators");
{% hint style="info" %} To get the ID of a role, you can either mention it with a \ before it, like \@rolename, or copy it from the role menu. If you mention it, the ID is the numbers between the <>. To get the ID of a role without mentioning it, enable developer mode in the Appearance section of your user settings, then go to the role menu in the server settings and right click on the role you want the ID of, then click "Copy ID". {% endhint %}

Check if a member has a role
In a message handler, you have access to checking the GuildMember class of the message author:

// assuming role.id is an actual ID of a valid role:
if(message.member.roles.has(role.id)) {
  console.log(`Yay, the author of the message has the role!`);
} else {
  console.log(`Nope, noppers, nadda.`);
}
// Check if they have one of many roles
if(message.member.roles.some(r=>["Dev", "Mod", "Server Staff", "Proficient"].includes(r.name)) ) {
  // has one of the roles
} else {
  // has none of the roles
}
{% hint style="info" %} To grab members and users in different ways see the FAQ Page. {% endhint %}

Get all members that have a role
let roleID = "264410914592129025";
let membersWithRole = message.guild.roles.get(roleID).members;
console.log(`Got ${membersWithRole.size} members with that role.`);
Add a member to a role
Alright, now that you have roles, you probably want to add a member to a role. Simple enough! Discord.js provides 2 handy methods to add, and remove, a role. Let's look at them!

let role = message.guild.roles.find(r => r.name === "Team Mystic");

// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
let member = message.mentions.members.first();

// or the person who made the command: let member = message.member;

// Add the role!
member.addRole(role).catch(console.error);

// Remove a role!
member.removeRole(role).catch(console.error);
Alright I feel like I have to add a little precision here on implementation:

You can not add or remove a role that is higher than the bot's. This should be obvious.
The bot requires MANAGE_ROLES permissions for this. You can check for it using the code further down this page.
Because of global rate limits, you cannot do 2 role "actions" immediately one after the other. The first action will work, the second will not. You can go around that by using <GuildMember>.setRoles([array, of, roles]). This will overwrite all existing roles and only apply the ones in the array so be careful with it.
Permission code
Check specific permission of a member on a channel
To check for a single permission override on a channel:

// Getting all permissions for a member on a channel.
let perms = message.channel.permissionsFor(message.member);

// Checks for Manage Messages permissions.
let can_manage_chans = message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES", false);

// View permissions as an object (useful for debugging or eval)
message.channel.permissionsFor(message.member).serialize(false)
Note: We pass false for the checkAdmin parameter because Administrator channel overwrites don't implicently grant any permissions, unlike in Roles or when you are the Guild Owner. (The API will allow you to create an overwrite with Administrator, and even tell D.JS that a channel overwrite has had Administrator permissions set. Discord devs have stated this is intended behavior.)

Get all permissions of a member on a guild
Just as easy, wooh!

let perms = message.member.permissions;

// Check if a member has a specific permission on the guild!
let has_kick = perms.has("KICK_MEMBERS");