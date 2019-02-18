let nextId = 1;

const suggestions = [{
	id: '1',
	title: 'Знакомство с серверной разработкой',
	voters: new Set()
}];

function getAll() {
	return suggestions;
}

function getOne(id) {
	return suggestions.find(suggestion => suggestion.id == id);
}

function add(title) {
	suggestions.push({
		id: ++nextId,
		title, 
		voters: new Set()
	})
}

module.exports = {
	getAll,
	getOne,
	add
}