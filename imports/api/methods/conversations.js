Meteor.methods({
	createConversation(){
		const _conversation = new Conversation();
		const conversation = _conversation.save();
		
		log(_conversation);
		log(conversation);
	}
});