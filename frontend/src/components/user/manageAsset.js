import { CardContent } from '@mui/material'
import React from 'react'

const ManageAsset = () => {
  return (
    <div>ManageAsset</div>
  )
  
  
}

import React, { useState } from "react";
import app_config from "../../config";

const manageAsset = () => {
  const url = app_config.backend_url;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );


  const fetchData = () => {
    fetch(url + "/asset/getbyuser/" + currentUser._id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
        });
      }
    });
  };

  const addFile = (e) => {
    const file = e.target.files[0];
    const formdata = new FormData();
    formdata.append("myfile", file);

    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: formdata,
    }).then((res) => {
      if (res.status === 200) {
        fetch(url + "/asset/add", {
          method: "POST",
          body: {
            file: file.name,
            createdBy: currentUser._id,
            createdAt: new Date(),
          },
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.status === 200) {
            console.log("asset added");
          }
        });
      }
    });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <label>Upload File Here</label>
          <input className="form-control" type="file" onChange={addFile} />
        </div>
      </div>
    </div>
  );
};

export default ManageAsset;
