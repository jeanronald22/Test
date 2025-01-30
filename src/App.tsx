import { Admin, Resource, ShowGuesser } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './components/Posts';
import { UserList, UserEdit, UserCreate } from './components/Users';
import { dataProvider } from './dataProvider';
import { Layout } from './Layout';
import Dashboard from './pages/Dashboard';
import { darkTheme, lightTheme } from './Theme';
import Person from '@mui/icons-material/Person';
import { Article } from '@mui/icons-material';

const App = () => {
	return (
		<Admin
			dataProvider={dataProvider}
			layout={Layout}
			dashboard={Dashboard}
			darkTheme={darkTheme}
			lightTheme={lightTheme}
		>
			<Resource
				name="users"
				list={UserList}
				edit={UserEdit}
				create={UserCreate}
				show={ShowGuesser}
				icon={Person}
			/>
			<Resource
				name="posts"
				list={PostList}
				edit={PostEdit}
				create={PostCreate}
				show={ShowGuesser}
				icon={Article}
			/>
		</Admin>
	);
};

export default App;
