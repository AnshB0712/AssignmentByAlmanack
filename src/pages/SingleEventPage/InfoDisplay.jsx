

export const InfoDisplay = ({data}) => {
  return(
  <div className="container">
  
  <p className="m-0 fs-6 fw-bold text-white">YOU ARE INVITED TO JOIN</p>
  
  <h1 className="m-0 fw-bold text-white">{data.name}</h1>
  
  <p className="m-0 fs-6 fw-bold text-danger">{new Date(data.date).toString()}</p>
  
  </div>
  )
}