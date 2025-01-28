// import { create, router as _router, defaults } from 'json-server';
// import { create, router as _router, defaults } from 'json-server';
import pkg from 'json-server';
const { create, router: _router, defaults } = pkg;
const server = create();
const router = _router('db.json');
const middlewares = defaults();

// Configuration détaillée des CORS
server.use((req, res, next) => {
	// Autorise tous les origines en développement
	res.header('Access-Control-Allow-Origin', '*');

	// Autorise tous les headers nécessaires pour React Admin
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization, range'
	);

	// Expose les headers nécessaires
	res.header(
		'Access-Control-Expose-Headers',
		'Content-Range, X-Total-Count, Content-Length, Range'
	);

	// Autorise les méthodes HTTP
	res.header(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	);

	// Gestion de la requête OPTIONS
	if (req.method === 'OPTIONS') {
		return res.sendStatus(200);
	}

	next();
});

server.use(middlewares);

// Ajout des headers pour la pagination
server.use((req, res, next) => {
	if (req.method === 'GET') {
		const collection = req.url.split('?')[0].split('/')[1];
		if (collection) {
			const data = router.db.get(collection).value();
			if (data) {
				const totalCount = data.length;
				res.header('X-Total-Count', totalCount.toString());
				res.header(
					'Content-Range',
					`${collection} 0-${totalCount}/${totalCount}`
				);
			}
		}
	}
	next();
});

server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
	console.log(`JSON Server is running on port ${PORT}`);
});
