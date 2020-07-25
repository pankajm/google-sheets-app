import React, { Component } from "react";

class TableBody extends Component {

  render() {
    const { data } = this.props;

    return (
      <tbody>
        {data.map((row) => (
          <tr>
            {row.map((item) => (
              <td>
                {item}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
