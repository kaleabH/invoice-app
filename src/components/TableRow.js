import React from "react";

function TableRow(props) {
  console.log("the props", props);
  return (
    <>
      <tr>
        <td>{props["PO#"]}</td>
        <td>{props.InvoiceDate}</td>
        <td>{props.DueDate}</td>
        <td>{props.EarlyPayDeduction}</td>
        <td>{props.InvoiceAmount}</td>
        <td>
          <ul className="action-list">
            <li>
              <a href="/" data-tip="edit">
                <i className="fa fa-edit"></i>
              </a>
            </li>
            <li>
              <a href="/" data-tip="delete">
                <i className="fa fa-trash"></i>
              </a>
            </li>
          </ul>
        </td>
      </tr>
    </>
  );
}

export default TableRow;
