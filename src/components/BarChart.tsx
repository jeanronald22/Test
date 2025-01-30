import { useEffect, useState } from 'react';
import { useDataProvider, useTheme } from 'react-admin';
import { ResponsiveBar } from '@nivo/bar';

const UserPostChart = () => {
	const [theme, setTheme] = useTheme();
	const dataProvider = useDataProvider();
	const [chartData, setChartData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Récupérer les utilisateurs
				const { data: users } = await dataProvider.getList('users', {
					pagination: { page: 1, perPage: 100 },
					sort: { field: 'id', order: 'ASC' },
				});

				// Récupérer les posts
				const { data: posts } = await dataProvider.getList('posts', {
					pagination: { page: 1, perPage: 1000 },
					sort: { field: 'id', order: 'ASC' },
				});

				// Calculer le nombre de posts par utilisateur
				const userPostCounts = users.map((user) => ({
					user: user.name,
					posts: posts.filter((post) => post.userId === user.id)
						.length,
				}));

				setChartData(userPostCounts);
			} catch (error) {
				console.error('Erreur de récupération des données', error);
			}
		};

		fetchData();
	}, [dataProvider]);

	return (
		<div
			style={{ height: 400 }}
			className={`shadow-lg rounded-lg ${
				theme == 'dark' ? 'bg-gray-800' : ''
			}`}
		>
			<ResponsiveBar
				data={chartData}
				keys={['posts']}
				theme={{
					text:
						theme == 'dark'
							? {
									fill: 'white',
									fontWeight: 'bold',
									fontSize: 12,
									fontFamily: 'Roboto',
							  }
							: {
									fill: '#1e2939',
									fontWeight: 'bold',
									fontSize: 12,
									fontFamily: 'Roboto',
							  },
				}}
				indexBy="user"
				margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
				padding={0.3}
				colors={{ scheme: 'category10' }}
				borderColor={{ from: 'color', modifiers: [['brighter', 1.6]] }}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Utilisateur',
					legendPosition: 'middle',
					legendOffset: 32,
				}}
				axisLeft={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Nombre de posts',
					legendPosition: 'middle',
					legendOffset: -40,
				}}
				labelSkipWidth={12}
				labelSkipHeight={12}
				labelTextColor={{
					from: 'color',
					modifiers: [['darker', 1.6]],
				}}
				legends={[
					{
						dataFrom: 'keys',
						anchor: 'bottom-right',
						direction: 'column',
						justify: false,
						translateX: 120,
						itemsSpacing: 2,
						itemWidth: 100,
						itemHeight: 20,
						itemDirection: 'left-to-right',
						itemOpacity: 0.85,
						symbolSize: 20,
						effects: [{ on: 'hover', style: { itemOpacity: 1 } }],
					},
				]}
			/>
		</div>
	);
};

export default UserPostChart;
