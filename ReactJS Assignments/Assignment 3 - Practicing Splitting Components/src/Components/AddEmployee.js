import React, { Component } from "react";

class EmployeeAdd extends Component {
    render() {
        const {
            onChangeName, EmployeeNameValue, 
            onChangeSalary, EmployeeSalaryValue, 
            onChangeAge, EmployeeAgeValue, 
            currentIndex, listLength,
            addItem, updateItem, cancelItem
        } = this.props;
        return (
            <form>
                <input type="text" placeholder="ملازم کا نام" onChange={onChangeName} value={EmployeeNameValue} />
                <input type="number" placeholder="ملازم کی تنخواہ" onChange={onChangeSalary} value={EmployeeSalaryValue} />
                <input type="number" placeholder="ملازم کی عمر" onChange={onChangeAge} value={EmployeeAgeValue} />
                {currentIndex === listLength
                    ?
                    <input type="submit" onClick={addItem} value="شامل کریں" />
                    :
                    <div>
                        <input type="submit" onClick={updateItem} value="اپڈیٹ" />
                        <input type="submit" onClick={cancelItem} value="منسوخ" />
                    </div>
                }
            </form>
        );
    }
}
export default EmployeeAdd;