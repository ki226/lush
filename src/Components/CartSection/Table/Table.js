import React, { Component } from "react";
import TableRow from "./TableRow";
import "./Table.scss";

class Table extends Component {
  render() {
    const {
      items,
      deliveryCharge,
      counterHandler,
      checkboxHandler,
      checkChildrenHandler,
    } = this.props;
    return (
      <table className="Table">
        <thead>
          <tr className="table-header">
            <th style={{ width: "60px" }}>
              <span className="checkbox">
                <input
                  className="check"
                  type="checkbox"
                  onChange={checkChildrenHandler}
                  checked={
                    items.length > 0
                      ? items
                          .map((item) => item.selected)
                          .reduce((acc, curr) => acc * curr)
                      : false
                  }
                />
                <label className="check-img" htmlFor="">
                  선택
                </label>
              </span>
            </th>
            <th style={{ width: "440px" }}>제품 정보</th>
            <th style={{ width: "190px" }}>수량</th>
            <th>금액</th>
            <th style={{ width: "70px" }}>복지혜택</th>
            <th style={{ width: "180px" }}>합계금액</th>
            <th style={{ width: "120px" }}>배송비</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <TableRow
              key={item.product_number}
              item={item}
              deliveryCharge={deliveryCharge}
              counterHandler={counterHandler}
              checkboxHandler={checkboxHandler}
              index={index}
              rowspan={items.length}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
