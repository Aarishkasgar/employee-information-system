import React, { useState } from "react";
import style from "./Form.module.css";
import { MdDeleteForever } from "react-icons/md";

function Form() {
  const [formData, setFormData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [department, setDepartment] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData([...formData, { name, id, email, department, address }]);
    setName("");
    setId("");
    setEmail("");
    setDepartment("");
    setAddress("");
  };

  const handleDelete = (index) => {
    setFormData(formData.filter((_, i) => i !== index));
  };

  // const handleUpdate = (index, updatedData) => {
  //   setFormData(formData.map((data, i) => (i === index ? updatedData : data)));
  // };

  const handleReset = () => {
    setFormData([]);
  };

  return (
    <>
      <div className={style["container"]}>
        <h1>Employee Information System</h1>
        <div className={style["form-container"]}>
          <form onSubmit={handleSubmit} className={style["form"]}>
            <label className={style["info"]}>
              <input
                placeholder="Enter your Name"
                type="text"
                value={name}
                required
                className={style["input-box"]}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label className={style["info"]}>
              <input
                placeholder="Enter your Id"
                type="text"
                value={id}
                required
                className={style["input-box"]}
                onChange={(event) => setId(event.target.value)}
              />
            </label>

            <label className={style["info"]}>
              <input
                placeholder="Enter your Email"
                type="email"
                value={email}
                required
                className={style["input-box"]}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label className={style["info"]}>
              <input
                placeholder="Enter your Department"
                type="text"
                value={department}
                required
                className={style["input-box"]}
                onChange={(event) => setDepartment(event.target.value)}
              />
            </label>

            <label className={style["info"]}>
              <input
                placeholder="Enter your address"
                type="text"
                required
                value={address}
                className={style["input-box"]}
                onChange={(event) => setAddress(event.target.value)}
              />
            </label>
            <div className={style["btn-box"]}>
              <button type="submit" className={style["btns"]}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className={style["table-container"]}>
          <table className={style["tab-container"]}>
            <thead>
              <tr className={style["th-head"]}>
                <th>Name</th>
                <th>Id</th>
                <th>Email</th>
                <th>Department</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((data, index) => (
                <tr key={index} className={style["row-data"]}>
                  <td>{data.name}</td>
                  <td>{data.id}</td>
                  <td>{data.email}</td>
                  <td>{data.department}</td>
                  <td>{data.address}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(index)}
                      className={style["dlt-btn"]}
                    >
                      <MdDeleteForever />
                    </button>
                    {/* <button onClick={() => handleUpdate(index, data)}>
                    Update
                  </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleReset} className={style["btns"]}>
            Reset
          </button>
        </div>
        <p>Design & Coded &hearts; by AarishDeveloper</p>
      </div>
    </>
  );
}

export default Form;
