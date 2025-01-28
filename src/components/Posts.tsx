import {
	List,
	Datagrid,
	TextField,
	Edit,
	Create,
	SimpleForm,
	TextInput,
	ReferenceField,
	DateField,
} from 'react-admin';

export const PostList = () => (
	<List>
		<Datagrid rowClick="edit">
			<TextField source="id" label="ID" />
			<ReferenceField source="userId" reference="users" label="User" />
			<TextField source="title" />
			<DateField source="publishedDate" />
		</Datagrid>
	</List>
);

export const PostEdit = () => (
	<Edit>
		<SimpleForm>
			<TextInput source="title" />
			<TextInput source="body" multiline rows={5} />
		</SimpleForm>
	</Edit>
);

export const PostCreate = () => (
	<Create>
		<SimpleForm>
			<TextInput source="title" />
			<TextInput source="content" multiline rows={5} />
		</SimpleForm>
	</Create>
);
