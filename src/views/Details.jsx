import {useSearchParams, Link} from 'react-router-dom'
import Table from '../components/Table/Table.jsx'
import data from '../data/data.json';

const Details = () => {
	const [queryParams] = useSearchParams()
	const detailsQueryValue = queryParams.get('data')
	const details = detailsQueryValue ? JSON.parse(detailsQueryValue) : null
	const handleAction = (row, name) => {
		console.log(row, name)
	}
	const options = {
		data: data,
		columns: [
			{
				label: 'Name',
				key: 'name',
			},

			{
				label: 'Married',
				key: 'is_married',
			},
			{
				label: 'Age',
				key: 'age',
			},
			{
				label: 'Years of Experience',
				key: 'years_of_experience',
			},
		],
		filters: [
			{
				label: 'Married',
				key: 'is_married',
				modifier: (value) => value === true,
			},
			{
				label: '2+ years of exp',
				key: 'years_of_experience',
				modifier: (value) => value > 2,
			},
			{
				label: 'Is Over 50',
				key: 'age',
				modifier: (value) => value > 50,
			},
		],
		actions: [
			{name: 'delete', label: 'Delete'},
			{name: 'edit', label: 'Edit'},
		],
	}

	return (
		<div>
			<Link className="text-teal-500 inline-block pb-5 underline" to="/">
				Go Back
			</Link>
			{details ? (
				<div className="flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-10 border-b border-gray-700 pb-10">
					<div className="card h-[12rem] w-[15rem] bg-teal-500 rounded-xl flex flex-col justify-between py-5 pl-5">
						<span className="label text-white text-2xl opacity-75">
							Name:
						</span>
						<h3 className="value text-5xl text-white">
							{details?.name}
						</h3>
					</div>
					<div className="card h-[12rem] w-[15rem] bg-teal-500 rounded-xl flex flex-col justify-between py-5 pl-5">
						<span className="label text-white text-2xl opacity-75">
							Age
						</span>
						<h3 className="value text-5xl text-white">
							{details?.age}
						</h3>
					</div>
					<div className="card h-[12rem] w-[15rem] bg-teal-500 rounded-xl flex flex-col justify-between py-5 pl-5">
						<span className="label text-white text-2xl opacity-75">
							Years of exp.
						</span>
						<h3 className="value text-5xl text-white">
							{details?.years_of_experience}
						</h3>
					</div>
				</div>
			) : (
				''
			)}

			<Table options={options} actionHandler={handleAction} />
		</div>
	)
}

export default Details
