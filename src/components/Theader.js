import React from "react";

export default class THeader extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th className="nameProduct">Название</th>
          <th className="costProduct">Цена</th>
          <th className="countProduct">Количество</th>
        </tr>
      </thead>
    );
  }
}
