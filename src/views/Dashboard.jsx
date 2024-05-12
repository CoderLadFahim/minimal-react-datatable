import Table from '../components/Table/Table.jsx'
import data from '../data/data.json';
const Dashboard = () => {
	const handleAction = (row, name) => {
        console.log(row, name)
	}
	const options = {
	    data: data,
	    columns:
        [
		    {
			    label: 'Name',
			    key: 'name',
			    type: 'link',
			    route: '/details'
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
	            modifier: (value) => value === true
	        },
	        {
	            label: '2+ years of exp',
	            key: 'years_of_experience',
	            modifier: (value) => value > 2
	        },
	        {
	            label: 'Is Over 24',
	            key: 'age',
	            modifier: (value) => value > 24
	        },
	    ],
	    actions: [{name: 'delete', label: 'Delete'}, {name: 'edit', label: 'Edit'}]
	}
    return (
        <div className="grid place-items-center">
			<Table
			    options={options}
			    actionHandler={handleAction}
			/>
        </div>
    )
}

export default Dashboard
