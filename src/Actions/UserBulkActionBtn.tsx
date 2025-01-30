import {
	BulkDeleteButton,
	BulkExportButton,
	BulkUpdateButton,
	useListContext,
	useNotify,
	useRefresh,
	useUpdateMany,
	useUnselectAll,
	Button,
	Confirm,
} from 'react-admin';
import { VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
const DesableUser = () => {
	const { selectedIds } = useListContext();
	const refresh = useRefresh();
	const [open, setOpen] = useState(false);
	const notify = useNotify();
	const unselectAll = useUnselectAll();
	const [updateMany, { isPending }] = useUpdateMany(
		'users',
		{
			ids: selectedIds,
			data: { status: 'disabled' },
		},
		{
			onSuccess: () => {
				notify('Status updated');
				unselectAll();
			},
			onError: () => {
				notify('Error: status not updated', { type: 'error' });
				refresh();
			},
		}
	);
	const toogleDialog = () => setOpen(!open);
	const handleClick = () => {
		updateMany();
		setOpen(false);
	};
	return (
		<>
			<Button label="desabled" onClick={toogleDialog} />
			<Confirm
				isOpen={open}
				loading={isPending}
				title="Update View"
				content="are your sure you want to disabled these items ?"
				onConfirm={handleClick}
				onClose={toogleDialog}
			/>
		</>
	);
};
const UserBulkAction = () => {
	return (
		<>
			<BulkUpdateButton
				label="Reset Views"
				data={{ views: 0 }}
				icon={<VisibilityOff />}
			/>
			<BulkDeleteButton />
			<BulkExportButton />
			<DesableUser />
		</>
	);
};
export default UserBulkAction;
