import React, { Component, Fragment } from "react";
import "./TableRow.scss";

class TableRow extends Component {
  render() {
    const {
      item,
      deliveryCharge,
      counterHandler,
      checkboxHandler,
      index,
      rowspan,
    } = this.props;
    return (
      <Fragment>
        <tr className="TableRow">
          <td>
            <span className="checkbox">
              <input
                className="check"
                type="checkbox"
                onChange={() => checkboxHandler(item.product_number)}
                checked={item.selected}
              />
              <label className="check-img" htmlFor="">
                선택
              </label>
            </span>
          </td>
          <td>
            <div className="info">
              <div className="thumbnail">
                <a href="">
                  <img src={item.image} />
                </a>
              </div>
              <div className="text">
                <a className="goods-name" href="">
                  {item.product_name}
                </a>
                <p className="goods-category">{item.sub_ctgry_name}</p>
              </div>
            </div>
          </td>
          <td>
            <div className="button-box">
              <button
                className="countDown"
                onClick={() => counterHandler(item.product_number, "-")}
              >
                감소
              </button>
              <input
                className="count"
                type="text"
                maxLength="5"
                value={item.count.toLocaleString()}
                readOnly={true}
              />
              <button
                className="countUp"
                onClick={() => counterHandler(item.product_number, "+")}
              >
                증가
              </button>
            </div>
          </td>
          <td>
            <p className="price individual-price">
              {" "}
              {`￦${item.price.toLocaleString()}`}
            </p>
          </td>
          <td></td>
          <td>
            <p className="price total-price">
              {" "}
              {`￦${(item.count * item.price).toLocaleString()}`}
            </p>
          </td>
          {index === 0 ? (
            <td rowSpan={rowspan * 2}>
              <p className="delivery-charge"> {`￦${deliveryCharge}`}</p>
              <p className="delivery-charge"> {"(택배)"}</p>
            </td>
          ) : null}
        </tr>
      </Fragment>
    );
  }
}

export default TableRow;
