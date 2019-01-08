import React, { Component } from 'react';
import './App.css';
import swal from 'sweetalert';

const list = [
  { id: "1", employee_name: "yu", employee_salary: "3333", employee_age: "22" },
  { id: "2", employee_name: "fff", employee_salary: "33", employee_age: "22" },
  { id: "3", employee_name: "ramesh ", employee_salary: "4", employee_age: "30" },
  { id: "4", employee_name: "artha", employee_salary: "2", employee_age: "28" },
  { id: "5", employee_name: "kumar", employee_salary: "3", employee_age: "28" },
  { id: "6", employee_name: "kumar", employee_salary: "3", employee_age: "29", }
];
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      email: "",
      password: "",
      login: false,
      current_index: list.length,
      EmployeeName: '',
      EmployeeSalary: '',
      EmployeeAge: '',
    };

    this.getEmail = this.getEmail.bind(this);
    this.getPass = this.getPass.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.getEmployeeName = this.getEmployeeName.bind(this);
    this.getEmployeeSalary = this.getEmployeeSalary.bind(this);
    this.getEmployeeAge = this.getEmployeeAge.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
  }

  getEmail(event) {
    this.setState({ email: event.target.value })
  }

  getPass(event) {
    this.setState({ password: event.target.value })
  }

  onLogin(event) {
    if (!this.state.email && !this.state.password) {
      swal("Someething Wrong", "Bahiya Form ki Entry Khali Chor di hai, dobarah fill karo", "error")
    } else {
      if (this.state.email === "admin@example.com" && this.state.password === "admin") {
        this.setState({ login: true });
        swal("", "آپ کو لاگ ان کردیا ہے", "success")
      } else {
        swal("آپ لاگ ان نہیں کرسکتے", "آپ ہمارے ڈیٹا بیس میں نہیں ہیں", "error")
      }
    }
    event.preventDefault();
  }

  onDismiss(id) {
    const isNotId = item => item.id !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  getEmployeeName(event) {
    this.setState({ EmployeeName: event.target.value })
    console.log(this.state.EmployeeName);
  }

  getEmployeeSalary(event) {
    this.setState({ EmployeeSalary: event.target.value })
    console.log(this.state.EmployeeSalary);

  }

  getEmployeeAge(event) {
    this.setState({ EmployeeAge: event.target.value })
    console.log(this.state.EmployeeAge);
  }

  add(event) {
    const { current_index, EmployeeSalary, EmployeeName, EmployeeAge, list } = this.state;
    this.setState({ current_index: current_index + 1 });
    list.push({ id: current_index + 1, employee_name: EmployeeName, employee_salary: EmployeeSalary, employee_age: EmployeeAge });
    this.setState({ list });
    event.preventDefault();
  }

  onEdit(id) {
    const { list } = this.state;

    console.log('mien yaha hoon')

    this.setState({ EmployeeName: list[id].employee_name, EmployeeSalary: list[id].employee_salary, EmployeeAge: list[id].employee_age, current_index: id })
    console.log(this.state.current_index)
  }

  update(event) {
    const { current_index, EmployeeSalary, EmployeeName, EmployeeAge, list } = this.state;
    //this.setState({current_index: current_index + 1});
    list[current_index] = { id: current_index, employee_name: EmployeeName, employee_salary: EmployeeSalary, employee_age: EmployeeAge }
    this.setState({ list, current_index: list.length });
    this.setState({ EmployeeAge: "", EmployeeName: "", EmployeeSalary: "" });
    event.preventDefault();
  }

  cancel() {
    this.setState({ current_index: list.length });
  }

  render() {
    const { email, login, list } = this.state;
    return (
      <div className="App">
        {!login && <form>
          <input type="email" placeholder="Type Your Email" onChange={this.getEmail} />
          <input type="password" placeholder="Type Your Password" onChange={this.getPass} />
          <input type="submit" onClick={this.onLogin} value="Login" />
        </form>}

        {!login && <div>
          <p>Employ Data</p>
          <form>
            <input type="text" placeholder="Employee Name" onChange={this.getEmployeeName} value={this.state.EmployeeName} />
            <input type="text" placeholder="Salary" onChange={this.getEmployeeSalary} value={this.state.EmployeeSalary} />
            <input type="text" placeholder="age" onChange={this.getEmployeeAge} value={this.state.EmployeeAge} />
            {this.state.current_index === this.state.list.length
              ?
              <input type="submit" onClick={this.add} value="Add" />
              :
              <div>
                <input type="submit" onClick={this.update} value="Udate" />
                <input type="submit" onClick={() => this.cancel.bind(this)} value="Cancel" />
              </div>
            }
          </form>

          <table className="mx-auto" style={{ width: 1000 }} border="1">
            <tbody>
              <tr>
                <th>S.no</th>
                {/* <th>id</th> */}
                <th>name</th>
                <th>salary</th>
                <th>age</th>
                <th>Edit</th>
                <th>Del</th>
              </tr>
              {list.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    {/* <td>{item.id}</td> */}
                    <td>{item.employee_name}</td>
                    <td>{item.employee_salary}</td>
                    <td>{item.employee_age}</td>
                    <td><button onClick={this.onEdit.bind(this, index)}>Edit</button></td>
                    <td><button onClick={() => this.onDismiss(item.id)}>Delete</button></td>
                  </tr>
                );
              })}</tbody>
          </table>
        </div>}
      </div>
    );
  }
}

export default App;
