const months = [
	{
		"abb": "Jan",
		"name": "January"
	},
	{
		"abb": "Feb",
		"name": "February"
	},
	{
		"abb": "Mar",
		"name": "March"
	},
	{
		"abb": "Apr",
		"name": "April"
	},
	{
		"abb": "May",
		"name": "May"
	},
	{
		"abb": "Jun",
		"name": "June"
	},
	{
		"abb": "Jul",
		"name": "July"
	},
	{
		"abb": "Aug",
		"name": "August"
	},
	{
		"abb": "Sep",
		"name": "September"
	},
	{
		"abb": "Oct",
		"name": "October"
	},
	{
		"abb": "Nov",
		"name": "November"
	},
	{
		"abb": "Dec",
		"name": "December"
	}
]

export const CalenderDisplay = ({data}) => {
  const { date } = data
  
  const [y,m,d] = date.split('-')
  
  return(
  <div 
  style={{width:'100px',aspectRatio:'1'}} 
  className="container bg-danger rounded d-flex flex-column justify-content-center"
  >
  <p style={{fontSize:'2rem'}} className="m-0 mt-auto text-center text-white fw-bold">{d}</p>
  <p className="m-0 mt-auto text-center text-white">{`${months[m-1].abb.toUpperCase()} ${y}`}</p>
  </div>
)
}