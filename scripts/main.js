import {World} from 'Minecraft';
World.events.chat.subscribe((e) => {
	var str = e.message;
	console.log('[Chat] <'+e.sender.name+'> '+str);
});
console.log('---Chat Logger activated!---');