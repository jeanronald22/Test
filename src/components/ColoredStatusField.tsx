import React from 'react';
import { FieldProps, useRecordContext } from 'react-admin';
type status = 'draft' | 'published' | string;

interface ColoredStatusFieldProps extends FieldProps {
	source: string;
}
const ColoredStatusField: React.FC<ColoredStatusFieldProps> = ({ source }) => {
	const record = useRecordContext();

	if (!record) return null;
	const status = record[source] as status; // typer le status
	let color: string;
	switch (status) {
		case 'published':
			color = 'green';
			break;
		case 'draft':
			color = 'gray';
			break;
		default:
			color = 'black';
	}

	return (
		<span
			style={{
				backgroundColor: color,
				fontWeight: 700,
				color: 'white',
				padding: '0.2em 0.6em',
				borderRadius: 10,
			}}
		>
			{status}
		</span>
	);
};
export default ColoredStatusField;
