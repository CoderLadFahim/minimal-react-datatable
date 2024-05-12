import './Table.css'
import TableRow from './TableRow.jsx'
import {useState, useEffect} from 'react'

export default function Table({options, actionHandler}) {
	const {data, columns, actions, filters} = options
	const columnHeaders = columns.map(({label}) => label)
	const [filterStatus, setFilterStatus] = useState(
		filters
			.map((filter) => ({[filter.key]: false}))
			.reduce((a, v) => ({...a, ...v}), {})
	)

	const [filteredData, setFilteredData] = useState([...data])

	useEffect(() => {
		const activeFilters = filters.filter((filter) => {
			const activeFilterKeys = Object.keys(filterStatus).filter(
				(filterKey) => filterStatus[filterKey]
			)
			return activeFilterKeys.includes(filter.key)
		})

		const filteredData = data.filter((dataObj) =>
			activeFilters.every((filter) =>
				filter.modifier(dataObj[filter.key])
			)
		)
		setFilteredData(() => filteredData)
	}, [filterStatus])

	const handleFilterChange = (filter) => {
		setFilterStatus((prevState) => {
			return {
				...prevState,
				[filter.key]: !prevState[filter.key],
			}
		})
	}

	return (
		<div className="table-wrapper mt-14">
			<div className="filter-container flex space-x-6">
				{filters.map((filter) => (
					<div
						className="filter flex items-center space-x-2"
						key={filter.label}
					>
						<input
							onChange={(e) =>
								handleFilterChange(filter, e)
							}
							type="checkbox"
							id={filter.key}
						/>
						<label
							className="cursor-pointer"
							htmlFor={filter.key}
						>
							{filter.label}
						</label>
					</div>
				))}
			</div>
			<table className="content-table">
				<thead>
					<tr>
						{columnHeaders.map((header, i) => (
							<th key={i}>{header}</th>
						))}
						{(actions || actions?.length) && <th>Actions</th>}
					</tr>
				</thead>
				{filteredData.length ? (
					<tbody>
						{filteredData.map((rowData, i) => (
							<TableRow
								actions={actions}
								key={i}
								rowData={rowData}
								columns={columns}
								actionHandler={actionHandler}
							/>
						))}
					</tbody>
				) : (
					<p className='text-center text-gray-400'>Wow such empty</p>
				)}
			</table>
		</div>
	)
}
