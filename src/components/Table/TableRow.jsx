import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

function TableRow({rowData, actionHandler, actions, columns}) {
	const parseValueForDisplay = (value) => {
		if (typeof value === 'boolean') return value ? 'Yes' : 'No'
		return value.toString()
	}
	return (
		<tr>
			{columns.map((value, i) => {
				if (i !== columns.length - 1)
					return (
						<td key={i}>
							{value.type === 'link' ? (
								<Link
									to={
										'/details?data=' +
										encodeURIComponent(
											JSON.stringify(rowData)
										)
									}
									className="text-teal-600 underline"
								>
									{' '}
									{parseValueForDisplay(
										rowData[value.key.toString()]
									)}{' '}
								</Link>
							) : (
								parseValueForDisplay(
									rowData[value.key.toString()]
								)
							)}
						</td>
					)
				return (
					<React.Fragment key={i + 1}>
						<td>
							{rowData[value.key.toString()].toString()}
						</td>
						<td className="cursor-pointer space-x-3">
							{actions.map((act, i) => (
								<button
									key={i}
									onClick={() =>
										actionHandler(
											rowData,
											act.name
										)
									}
									className="bg-gray-400 p-2 rounded text-white"
								>
									{act.label}
								</button>
							))}
						</td>
					</React.Fragment>
				)
			})}
		</tr>
	)
}
export default TableRow
