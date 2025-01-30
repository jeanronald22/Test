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
	DateInput,
	ReferenceInput,
	SelectInput,
} from 'react-admin';
import ColoredStatusField from './ColoredStatusField';
import PostFilter from './FilterList';

export const PostList = () => (
	<List title="List of posts" aside={<PostFilter />}>
		<Datagrid>
			<TextField source="id" label="ID" />
			<ReferenceField source="userId" reference="users" label="USER" />
			<TextField source="title" label="TITLE" />
			<DateField source="publishedDate" label="PUBLICATION DATE" />
			<ColoredStatusField source="status" label="STATUS" />
		</Datagrid>
	</List>
);

export const PostEdit = () => (
	<Edit title="Edit post">
		<SimpleForm>
			<TextInput source="title" />
			<ReferenceInput source="userId" reference="users" />
			<DateInput source="publishedDate" />
			<TextInput source="status" />
			<TextInput source="body" multiline rows={5} />
		</SimpleForm>
	</Edit>
);

export const PostCreate = () => (
	<Create title="Create post">
		<SimpleForm>
			<TextInput source="title" />
			<ReferenceInput source="userId" reference="users" />
			<DateInput source="publishedDate" />
			<SelectInput
				source="status"
				choices={[
					{ id: 'draft', name: 'draft' },
					{ id: 'published', name: 'published' },
				]}
			/>
			<TextInput source="body" multiline rows={5} />
		</SimpleForm>
	</Create>
);
