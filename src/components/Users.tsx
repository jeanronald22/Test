import {
	List,
	Datagrid,
	TextField,
	EmailField,
	Edit,
	Create,
	SimpleForm,
	TextInput,
	SelectInput,
} from 'react-admin';
import UserStatus from './UserStatus';
import UserBulkAction from '../Actions/UserBulkActionBtn';

export const UserList = () => (
	<List title="List of users">
		<Datagrid rowClick="show" bulkActionButtons={<UserBulkAction />}>
			<TextField source="id" label="ID" />
			<TextField source="name" label="NAME" />
			<TextField source="username" label="USER NAME" />
			<EmailField source="email" label="EMAIL" />
			<TextField source="phone" label="PHONE" />
			<UserStatus source="status" label="STATUS" />
		</Datagrid>
	</List>
);

export const UserEdit = () => (
	<Edit title="Edit user">
		<SimpleForm>
			<TextInput source="name" />
			<TextInput source="email" />
			<TextInput source="username" />
			<TextInput source="phone" />
			<SelectInput
				source="status"
				choices={[
					{ id: 'active', name: 'active' },
					{ id: 'disabled', name: 'disabled' },
				]}
			/>
		</SimpleForm>
	</Edit>
);

export const UserCreate = () => (
	<Create title="Create user">
		<SimpleForm>
			<TextInput source="name" />
			<TextInput source="email" />
			<TextInput source="username" />
			<TextInput source="phone" />
		</SimpleForm>
	</Create>
);
