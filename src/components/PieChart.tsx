import { useEffect, useState } from 'react';
import { useDataProvider, useTheme } from 'react-admin';
import { ResponsivePie } from '@nivo/pie';

const PostStatusPieChart = () => {
	const [theme, setTheme] = useTheme();
	const dataProvider = useDataProvider();
	type ChartData = {
		id: string;
		label: string;
		value: number;
		color: string;
	};

	const [chartData, setChartData] = useState<ChartData[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Récupérer tous les posts
				const { data: posts } = await dataProvider.getList('posts', {});

				// Compte du nombre de posts en fonction du statut
				const publishedCount = posts.filter(
					(post) => post.status === 'published'
				).length;
				const draftCount = posts.filter(
					(post) => post.status === 'draft'
				).length;

				// formatage les données pour le Pie Chart
				setChartData([
					{
						id: 'Published',
						label: 'Published',
						value: publishedCount,
						color: '#4CAF50',
					},
					{
						id: 'Draft',
						label: 'Draft',
						value: draftCount,
						color: '#F44336',
					},
				]);
			} catch (error) {
				console.error('Erreur de récupération des posts', error);
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
			<ResponsivePie
				theme={{
					text: {
						fontWeight: 'bold',
						fontFamily: 'Roboto',
						fontSize: 12,
					},
				}}
				data={chartData}
				margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
				innerRadius={0.5}
				padAngle={0.7}
				cornerRadius={3}
				colors={{ datum: 'data.color' }}
				borderWidth={1}
				borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
				arcLabelsSkipAngle={10}
				arcLabelsTextColor="#fff"
				arcLinkLabelsSkipAngle={10}
				arcLinkLabelsTextColor={{
					from: 'color',
					modifiers: [['darker', 1.6]],
				}}
				legends={[
					{
						anchor: 'bottom',
						direction: 'row',
						translateY: 50,
						itemWidth: 100,
						itemHeight: 14,
						itemTextColor: '#999',
						symbolSize: 14,
						symbolShape: 'circle',
					},
				]}
			/>
		</div>
	);
};

export default PostStatusPieChart;
