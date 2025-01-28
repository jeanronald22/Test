import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './components/Posts';
import { UserList, UserEdit, UserCreate } from './components/Users';
import { dataProvider } from './dataProvider';
import { Layout } from './Layout';
import Dashboard from './pages/Dashboard';

const App = () => (
	<Admin dataProvider={dataProvider} layout={Layout} dashboard={Dashboard}>
		<Resource
			name="posts"
			list={PostList}
			edit={PostEdit}
			create={PostCreate}
		/>
		<Resource
			name="users"
			list={UserList}
			edit={UserEdit}
			create={UserCreate}
		/>
	</Admin>
);

export default App;
