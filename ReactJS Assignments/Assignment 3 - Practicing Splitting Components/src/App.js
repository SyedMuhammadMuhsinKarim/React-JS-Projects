/* Imports Classes and Files */
import React, { Component } from 'react';
import './App.css';
import swal from 'sweetalert';
import Login from './Components/Login';
import EmployeeAdd from './Components/AddEmployee';
import SearchEmployee from './Components/SearchEmployee';
import EmployeeTable from './Components/EmployeeTable'

const list = [
  { id: "1", employee_name: "yu", employee_salary: "3333", employee_age: "22" },
  { id: "2", employee_name: "fff", employee_salary: "33", employee_age: "22" },
  { id: "3", employee_name: "ramesh ", employee_salary: "4", employee_age: "30" },
  { id: "4", employee_name: "artha", employee_salary: "2", employee_age: "28" },
  { id: "5", employee_name: "kumar", employee_salary: "3", employee_age: "28" },
  { id: "6", employee_name: "kumar", employee_salary: "3", employee_age: "29", }
];

const isSearched = searchTerm => item =>
  item.employee_name.toLowerCase().includes(searchTerm.toLowerCase());

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
      searchTerm: "",
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
    this.cancel = this.cancel.bind(this);
    // this.isSearched = this.isSearched.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onEdit = this.onEdit.bind(this)
  }

  /* Login Form Area Start*/
  getEmail(event) {
    this.setState({ email: event.target.value })
  }

  getPass(event) {
    this.setState({ password: event.target.value })
  }

  onLogin(event) {
    if (!this.state.email && !this.state.password) {
      swal("آپکا اندراج مکمل نہیں", " آپ نے پاسورڈ یاای میل نہیں لکھا تمام اندراج مکمل کریں ", "error")
    } else {
      if (this.state.email === "admin@gmail.com" && this.state.password === "admin") {
        this.setState({ login: true });
        swal("!لاگ ان کامیاب ہوگیا", " خوشامدید! آپ کو لاگ ان کردیا گیا ہے ", "success")
      } else {
        swal("آپ لاگ ان نہیں کرسکتے", "آپ ہمارے ڈیٹا بیس میں نہیں ہیں", "error")
      }
    }
    event.preventDefault();
  }
  /* Login Form Area Ends */

  /* Employe DataBase Control Starts Here*/
  //*Delete Item (Now Uses Filter)
  onDismiss(id) {
    const isNotId = item => item.id !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  onEdit(id) {
    const { list } = this.state;
    console.log("Mien chal raha hoon")
    this.setState({ EmployeeName: list[id].employee_name, EmployeeSalary: list[id].employee_salary, EmployeeAge: list[id].employee_age, current_index: id })
    console.log(this.state.current_index)
  }
  /* Employe DataBase Control Ends Here*/

  /* Add Employee Form Starts Here */
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
    if ((EmployeeAge >= 18 && EmployeeAge <= 60) && (EmployeeSalary >= 0 && EmployeeSalary <= 10000) && (EmployeeName !== "")) {
      this.setState({ current_index: current_index + 1 });
      list.push({ id: current_index + 1, employee_name: EmployeeName, employee_salary: EmployeeSalary, employee_age: EmployeeAge });
      this.setState({ list });
    } else if (!EmployeeAge || EmployeeAge < 18 || EmployeeAge > 60) {
      swal("غلط اندراج", " عمر کی حد 18 سے 60 سال تک ہے", "error");
      this.setState({ EmployeeAge: "" });
    } else if (EmployeeName === "" || EmployeeName !== '') {
      swal("غلط اندراج", " نام خالی مت چھوڑے  ", "error");
      this.setState({ EmployeeName: "" });
    } else if (EmployeeSalary !== '' || EmployeeSalary < 1 || EmployeeSalary > 10000) {
      swal("غلط اندراج", "تنخواہ کی حد 10000 ہے", "error");
      this.setState({ EmployeeSalary: "" });
    }
    event.preventDefault();
  }
  /* Add Employee Form Ends Here */

  /* Update Employee Form Starts Here */
  update(event) {
    const { current_index, EmployeeSalary, EmployeeName, EmployeeAge, list } = this.state;
    //this.setState({current_index: current_index + 1});
    list[current_index] = { id: current_index, employee_name: EmployeeName, employee_salary: EmployeeSalary, employee_age: EmployeeAge }
    this.setState({ list, current_index: list.length });
    this.setState({ EmployeeAge: "", EmployeeName: "", EmployeeSalary: "" });
    event.preventDefault();
  }

  cancel(event) {
    this.setState({ current_index: list.length });
    event.preventDefault();
  }
  /* Add Employee Form Ends Here */

  //Search Form Control
  onSearch = event => this.setState({
    searchTerm: event.target.value
  });

  render() {
    const {login, list, searchTerm, EmployeeName, EmployeeAge, EmployeeSalary, current_index} = this.state;
    return (
      <div className="App">
        {!login
          &&
          <Login
            onClick={this.onLogin}
            onChangeEmail={this.getEmail}
            onChangePass={this.getPass}
          />
        }

        {login
          &&
          <div>
            <p>ملازمین کا ڈیٹابیس</p>
            <EmployeeAdd
              onChangeName={this.getEmployeeName} EmployeeNameValue={EmployeeName}
              onChangeSalary={this.getEmployeeSalary} EmployeeSalaryValue={EmployeeSalary}
              onChangeAge={this.getEmployeeAge} EmployeeAgeValue={EmployeeAge}
              currentIndex={current_index} listLength={list.length}
              addItem={this.add} updateItem={this.update} cancelItem={this.cancel}
            />

            <SearchEmployee
              onSearch={this.onSearch}
              searchTerm={searchTerm}
            />

            <EmployeeTable
              pattern={searchTerm}
              onEdit={this.onEdit}
              onDismiss={this.onDismiss}
              list={list}
              isSearched={isSearched}
            />
          </div>}
      </div>
    );
  }
}

export default App;
