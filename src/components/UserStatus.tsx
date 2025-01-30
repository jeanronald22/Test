import React from 'react';
import { FieldProps, useRecordContext } from 'react-admin';
type status = 'active' | 'disabled' | string;

interface ColoredStatusFieldProps extends FieldProps {
	source: string;
}
const UserStatus: React.FC<ColoredStatusFieldProps> = ({ source }) => {
	const record = useRecordContext();

	if (!record) return null;
	const status = record[source] as status; // typer le status
	let color: string;
	switch (status) {
		case 'active':
			color = 'green';
			break;
		case 'disabled':
			color = 'gray';
			break;
		default:
			color = 'black';
	}

	return (
		<span
			style={{
				backgroundColor: color,
				fontWeight: 'bold',
				color: 'white',
				padding: '0.2em 0.6em',
				borderRadius: 10,
			}}
		>
			{status}
		</span>
	);
};
export default UserStatus;
