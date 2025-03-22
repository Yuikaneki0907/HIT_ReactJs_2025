import React from "react";
import data from "../data";

const Table = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Total</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, key) => (
            <tr key={key}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
