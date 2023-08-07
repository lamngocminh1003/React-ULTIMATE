import React, { useState } from "react";
import "./AddNewProduct.scss";
const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleHideShow = () => {
    setIsShow(!isShow);
  };
  const handleAddProduct = () => {
    let data = {
      color,
      price,
      size,
      name,
    };
    let dataPro = localStorage.getItem("dataPro");
    if (dataPro) {
      let arr = JSON.parse(dataPro);
      arr.push(data);
      localStorage.setItem("dataPro", JSON.stringify(arr));
    } else {
      localStorage.setItem("dataPro", JSON.stringify([data]));
    }
    setColor("");
    setPrice("");
    setSize("");
    setName("");
  };

  return (
    <>
      {isShow === true ? (
        <>
          <fieldset>
            <legend className="title-add-product"> Add a new product</legend>
            <div className="add-new-product">
              <div className="form-control">
                <label className="label-item">Name: </label>
                <input
                  className="input-item"
                  type="text"
                  name="name"
                  placeholder="Name's product.."
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label-item">Price: </label>
                <input
                  className="input-item"
                  type="text"
                  name="price"
                  placeholder="Price's product.."
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label-item">Size: </label>
                <input
                  className="input-item"
                  type="text"
                  name="size"
                  placeholder="Size's product.."
                  value={size}
                  onChange={(event) => setSize(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label-item">Color: </label>
                <input
                  className="input-item"
                  type="text"
                  name="color"
                  placeholder="Color's product.."
                  value={color}
                  onChange={(event) => setColor(event.target.value)}
                />
              </div>
              <div className="item-btn">
                <input
                  className="btn btn-submit"
                  type="submit"
                  value="+ Add new"
                  onClick={() => handleAddProduct()}
                />
              </div>
            </div>
          </fieldset>
          <div onClick={() => handleHideShow()} className="hide-show">
            Hide form
          </div>
        </>
      ) : (
        <>
          <div onClick={() => handleHideShow()} className="hide-show">
            Show form
          </div>
        </>
      )}
      <div>{localStorage.getItem("dataPro")}</div>
    </>
  );
};
export default AddNewProduct;
