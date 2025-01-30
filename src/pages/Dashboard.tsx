import React from 'react';
import { useGetList, useTheme } from 'react-admin';
import Barchart from '../components/BarChart';
import PostStatusPieChart from '../components/PieChart';

// Déclaration du type pour un composant fonctionnel avec TypeScript
const Dashboard: React.FC = () => {
	const {
		data: userData,
		isPending: isPendingUser,
		error: errorUser,
	} = useGetList('users');
	const {
		data: postData,
		isPending: isPendingPost,
		error: errorPost,
	} = useGetList('posts');
	const [theme, setTheme] = useTheme();

	return (
		<main className={`p-6 min-h-screen `}>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
				{/* Carte Utilisateurs */}
				<div
					className={`flex items-center p-4 shadow-lg rounded-lg mr-2 ${
						theme == 'dark' ? 'bg-gray-800' : ''
					}`}
				>
					<div
						className={`p-2 rounded-full bg-blue-100
						
						`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="size-12 text-blue-950"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
							/>
						</svg>
					</div>
					<div className="flex  flex-col justify-center ml-6 items-center">
						<p className="text-3xl  ml-4">
							{userData && userData.length}
						</p>
						<p className="text-sm">Utilisateurs</p>
					</div>
				</div>

				{/* Carte Posts */}
				<div
					className={`flex items-center p-4 shadow-lg rounded-lg mr-2 ${
						theme == 'dark' ? 'bg-gray-800' : ''
					}`}
				>
					<div className="bg-blue-100 p-2 rounded-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="size-12 text-blue-950"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
							/>
						</svg>
					</div>
					<div className="flex  flex-col justify-center ml-6 items-center">
						<p className="text-3xl  ml-4">
							{postData && postData.length}
						</p>
						<p className="text-sm">Posts</p>
					</div>
				</div>
			</div>
			{/* charts */}
			<div className="flex flex-col space-y-3 mt-5">
				<Barchart />
				<PostStatusPieChart />
			</div>
		</main>
	);
};

export default Dashboard;
