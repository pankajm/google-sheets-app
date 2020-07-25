import React, { Component } from "react";

class TableHeader extends Component {

  render() {
    const { columns } = this.props;
    return (
      <thead className="thead-light">
        <tr>
          {columns.map((c) => (
            <th
              className="cursor-hand"
            >
              {c.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;