import {
	List,
	Datagrid,
	TextField,
	Edit,
	Create,
	SimpleForm,
	TextInput,
} from 'react-admin';

export const PostList = () => (
	<List>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="title" />
			<TextField source="content" />
		</Datagrid>
	</List>
);

export const PostEdit = () => (
	<Edit>
		<SimpleForm>
			<TextInput source="title" />
			<TextInput source="content" multiline rows={5} />
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
