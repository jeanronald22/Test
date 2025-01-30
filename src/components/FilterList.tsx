import CategoryIcon from '@mui/icons-material/LocalOffer';
import Person2Icon from '@mui/icons-material/Person2';
import { Card, CardContent } from '@mui/material';
import {
	AutocompleteInput,
	FilterLiveForm,
	FilterList,
	FilterListItem,
	FilterListSection,
	ReferenceInput,
} from 'react-admin';

const PostFilter = () => (
	<Card sx={{ order: -1, mr: 2, mt: 6, width: 250, height: 'fit-content' }}>
		<CardContent>
			<FilterList label="Status" icon={<CategoryIcon />}>
				<FilterListItem
					label="published"
					value={{ Status: 'published' }}
				/>
				<FilterListItem label="draft" value={{ status: 'draft' }} />
			</FilterList>

			<FilterListSection label="Author" icon={<Person2Icon />}>
				<FilterLiveForm>
					<ReferenceInput source="Author" reference="users">
						<AutocompleteInput helperText={false} />
					</ReferenceInput>
				</FilterLiveForm>
			</FilterListSection>
		</CardContent>
	</Card>
);
export default PostFilter;
