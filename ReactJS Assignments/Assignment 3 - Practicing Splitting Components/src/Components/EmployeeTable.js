import React, { Component } from "react";
import Button from './Button';

class EmployeeTable extends Component {
    render() {
        const {pattern, onEdit, onDismiss, isSearched, list} = this.props;
        return(
            <table className="mx-auto responsive">
            <tbody>
              <tr>
                <th>اندراج</th>
                <th>نام</th>
                <th>تنخواہ</th>
                <th>عمر</th>
                <th>ایڈیٹ</th>
                <th>مٹاو</th>
              </tr>
              {list.filter(isSearched(pattern)).map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    {/* <td>{item.id}</td> */}
                    <td>{item.employee_name}</td>
                    <td>{item.employee_salary}</td>
                    <td>{item.employee_age}</td>
                    <td><Button onClick={() => onEdit(index)}>ایڈیٹ کریں</Button></td>
                    <td><Button onClick={() => onDismiss(item.id)}>مٹائیں</Button></td>
                  </tr>
                );
              })}</tbody>
          </table>
        );
    }
}

export default EmployeeTable;