import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useState } from "react";

function Employee() {
  const [eId, setEId] = useState("");
  const [eName, setEName] = useState("");
  const [eAddress, setEAddress] = useState("");
  const [eHobbies, setEHobbies] = useState("");
  const [eDate, setEDate] = useState("");
  const [gender, setGender] = useState("Male");

  function handleId(e) {
    setEId(e.target.value);
    e.preventDefault();
  }

  function handleName(e) {
    setEName(e.target.value);
    e.preventDefault();
  }

  function handleAddress(e) {
    setEAddress(e.target.value);
    e.preventDefault();
  }

  function handleHobbies(e) {
    setEHobbies(e.target.value);
    e.preventDefault();
  }

  function handledate(e) {
    setEDate(e.target.value);
    e.preventDefault();
  }

  let [employee, setEmployee] = useState([]);

  let data = {};
  data = {
    Id: eId,
    Name: eName,
    Address: eAddress,
    Hobbbies: eHobbies,
    Gender: gender,
    Date: eDate,
  };

  function submit() {
    let olddataEmployee = employee;
    
    olddataEmployee.push(data);
    setEmployee([...olddataEmployee]);
  }

  let value = employee.map((item) => {
    return (
      <tr>
        <td>{item.Id}</td>
        <td>{item.Name}</td>
        <td>{item.Address}</td>
        <td>{item.Hobbbies}</td>
        <td>{item.Gender}</td>
        <td>{item.Date}</td>
      </tr>
    );
  });

  let employeeData = value;
  let filters = employee.map((items) => {
    const d = new Date();
    let get_dates = new Date(items.Date);
    if (get_dates.getMonth() === d.getMonth()) {
      return (
        <tr>
          <td>{items.Id}</td>
          <td>{items.Name}</td>
          <td>{items.Address}</td>
          <td>{items.Hobbbies}</td>
          <td>{items.Gender}</td>
          <td>{items.Date}</td>
        </tr>
      );
    }
  });


  return (
    <div>
      <div className="container">
        <h4 className="text-center text-uppercase text-secondary">
          Employee Details
        </h4>{" "}
        <hr />
        <div className="row">
          <div className="col-md-6">
            <button
              className="btn btn-primary"
              type="button"
              value="filter"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
             Employee of this Month
            </button>

            <div
              class="modal fade bd-example-modal-xl"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Employee Whose Joining This Month
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <table
                      className="table table-responsive table-striped"
                      aria-label="Employee"
                    >
                      <thead>
                        <tr>
                          <th>Employee Id</th>
                          <th>Employee Name</th>
                          <th>Employee Address</th>
                          <th>Employee Gender</th>
                          <th>Employee Hobbies</th>
                          <th>Employee Joining Date</th>
                        </tr>
                      </thead>
                      <tbody>{filters}</tbody>
                    </table>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <table
              className="table table-responsive table-striped"
              aria-label="Employee"
            >
              <thead>
                <tr>
                  <th>Employee Id</th>
                  <th>Employee Name</th>
                  <th>Employee Address</th>
                  <th>Employee Gender</th>
                  <th>Employee Hobbies</th>
                  <th>Employee Joining Date</th>
                </tr>
              </thead>
              <tbody>{employeeData}</tbody>
            </table>
          </div>
          <div className="col-md-6">
            <div className="form-row">
              <div className="mb-3 form-group">
                <label for="employeeId">Employee Id</label>
                <input
                  type="text"
                  className="form-control"
                  id="employeeId"
                  placeholder="Employee Id"
                  value={eId}
                  autocomplete="off"
                  onChange={handleId}
                />
              </div>
              <div className="mb-3 form-group">
                <label for="name">Employee Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Employee Name"
                  value={eName}
                  autocomplete="off"
                  onChange={handleName}
                />
              </div>
            </div>

            <div className="mb-3 form-group">
              <label for="inputAddress">Employee Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Employee Address"
                value={eAddress}
                autocomplete="off"
                onChange={handleAddress}
              />
            </div>

            <div className="mb-3">
              Employee Gender :&nbsp;
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="Male"
                  onClick={() => setGender("Male")}
                  checked={gender === "Male"}
                />
                <label className="form-check-label" for="male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="Female"
                  onClick={() => setGender("Female")}
                  checked={gender === "Female"}
                />
                <label className="form-check-label" for="female">
                  Female
                </label>
              </div>
            </div>

            <div className="mb-3">
              <div className="mb-3 form-group">
                <label for="inputHobbies">Employee Hobbies</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputHobbies"
                  placeholder="Employee Hobbies"
                  value={eHobbies}
                  autocomplete="off"
                  onChange={handleHobbies}
                />
              </div>
            </div>

            <div className="mb-3 form-group">
              <label for="date">Employee Joining Date</label>
              <input
                type="date"
                className="form-control"
                value={eDate}
                onChange={handledate}
              />
            </div>

            <br />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submit}
              value="isSubmit"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
