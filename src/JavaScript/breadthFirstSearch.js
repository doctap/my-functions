'use strict';

const friendsAlice = [
	{ name: 'Pop', isAim: false, friends: [] },
	{ name: 'Rico', isAim: false, friends: [] },
	{ name: 'Alma', isAim: false, friends: [] },
];

const friendsNik = [
	{ name: 'Юля', isAim: false, friends: [] },
	{ name: 'Кто-то', isAim: false, friends: [] },
	{ name: 'Тигран', isAim: false, friends: [] },
];

const friendsPrice = [
	{ name: 'John', isAim: false, friends: [] },
	{ name: 'Peter', isAim: false, friends: [] },
	{ name: 'Jas', isAim: false, friends: [] },
];

const you = [
	{ name: 'Alice', isAim: false, friends: friendsAlice },
	{ name: 'Nik', isAim: false, friends: friendsNik },
	{ name: 'Price', isAim: false, friends: friendsPrice },
];

/**
 * Поиск в ширину (Прогугли)
 * @param {array} your массив ваших друзей
 * @returns найденный человек подходящий под условие
 */
function getPerson(your) {
	let queue = [...your];
	const checked = [];

	while (queue.length !== 0) {
		let person = queue.shift();
		if (!checked.some(p => p === person)) {
			if (person.isAim) {
				return person;
			} else {
				checked.push(person);
				queue.push(...person.friends)
			}
		}
	}
	return 'person not found';
}

console.log(getPerson(you))