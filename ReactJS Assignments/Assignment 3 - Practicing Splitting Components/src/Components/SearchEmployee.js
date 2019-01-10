import React, { Component } from "react";

class SearchEmployee extends Component {
    render() {
        const {onSearch, searchTerm} = this.props
        return (
            <form>
                <input type="text" placeholder="ملازم کو تلاش کریں" onChange={onSearch} value={searchTerm} />
            </form>
        );
    }
}
export default SearchEmployee;