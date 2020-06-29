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
                onChange={() => checkboxHandler(item.goods_no)}
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
                  <img src={item.goods_thumbnail} />
                </a>
              </div>
              <div className="text">
                <a className="goods-name" href="">
                  {item.goods_name}
                </a>
                <p className="goods-category">{item.goods_category}</p>
              </div>
            </div>
          </td>
          <td>
            <div className="button-box">
              <button
                className="countDown"
                onClick={() => counterHandler(item.goods_no, "-")}
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
                onClick={() => counterHandler(item.goods_no, "+")}
              >
                증가
              </button>
            </div>
          </td>
          <td>
            <p className="price individual-price">
              {" "}
              {`￦${item.goods_price.toLocaleString()}`}
            </p>
          </td>
          <td></td>
          <td>
            <p className="price total-price">
              {" "}
              {`￦${(item.count * item.goods_price).toLocaleString()}`}
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
