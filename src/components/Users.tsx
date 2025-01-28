import {
	List,
	Datagrid,
	TextField,
	EmailField,
	Edit,
	Create,
	SimpleForm,
	TextInput,
} from 'react-admin';

export const UserList = () => (
	<List>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="name" />
			<EmailField source="email" />
		</Datagrid>
	</List>
);

export const UserEdit = () => (
	<Edit>
		<SimpleForm>
			<TextInput source="name" />
			{/* <EmailInput source="email" /> */}
		</SimpleForm>
	</Edit>
);

export const UserCreate = () => (
	<Create>
		<SimpleForm>
			<TextInput source="name" />
			{/* <EmailInput source="email" /> */}
		</SimpleForm>
	</Create>
);
