import React from 'react'
import app_config from '../../config'

const ManageAsset = () => {

  const url = app_config.backend_url;

  const fetchData = () => {
    fetch()
  }

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-body'>
          <label>Upload File Here</label>
          <input className="form-control" type="file" />
        </div>
      </div>
    </div>
  )
}

export default ManageAsset;
