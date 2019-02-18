const Suggestion = require('../models/suggestion');

function showSuggestions(req, res) {
	const suggestions = Suggestion.getAll();
	res.render('suggestions', {
		suggestions
	});
}

function showSuggestion(req, res) {
	const suggestion = Suggestion.getOne(req.params.id);
	
	// Показать предложение
	res.render('suggestion', {
		suggestion
	})
}

function createSuggestion(req, res) {
	const title = req.body.title;

	Suggestion.add(title);

	req.session.message = 'Suggestion approved'

	res.redirect('/suggestions');
}

function toggleVote(req, res) {
		// Добавить голос и перенаправить на предложение
		const username = req.username;
		const suggestion = Suggestion.getOne(req.params.id);
		
	
		if(suggestion.voters.has(username)) {
			suggestion.voters.delete(username);
			req.session.message = 'Vote changed';
		} else {
			suggestion.voters.add(username);
			req.session.message = 'Vote approved';
	}
	
		res.redirect('back')
}

module.exports = {
	showSuggestions,
	showSuggestion,
	createSuggestion,
	toggleVote
}