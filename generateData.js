import fs from 'fs';
import { faker } from '@faker-js/faker';
const generateUsers = (count) => {
	const users = [];
	for (let i = 0; i < count; i++) {
		users.push({
			id: i + 1,
			name: faker.person.firstName(),
			username: faker.internet.displayName(),
			email: faker.internet.email(),
			phone: faker.phone.number(),
		});
	}
	return users;
};

const generatePosts = (count, users) => {
	const posts = [];
	for (let i = 0; i < count; i++) {
		posts.push({
			id: i + 1,
			title: faker.lorem.sentence(),
			body: faker.lorem.paragraph(),
			userId: users[faker.number.int({ min: 0, max: users.length - 1 })]
				.id,
			publishedDate: faker.date.past(),
			status: faker.helpers.arrayElement([
				'draft',
				'published',
				'archived',
			]),
		});
	}
	return posts;
};

// nombre d'utilisateurs et de posts à générer par defaut

const usersCount = 10;
const postsCount = 20;

// génération des données
const users = generateUsers(usersCount);
const posts = generatePosts(postsCount, users);

// création de l'objet JSON
const data = {
	users,
	posts,
};
fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
console.log('fichier genere avec sucess');
