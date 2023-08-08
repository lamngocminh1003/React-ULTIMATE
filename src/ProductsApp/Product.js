import "./Product.scss";
import shoes1 from "../assets/images/shoes-main.jpg";
import shoes2 from "../assets/images/shoes-left.jpg";
import shoes3 from "../assets/images/shoes-right.jpg";
import shoes4 from "../assets/images/shoes.jpg";
import { useState } from "react";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

import Lightbox from "react-image-lightbox";
const Product = () => {
  const [currentLargeImg, setCurrentLargeImg] = useState(shoes1);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [shoes1, shoes2, shoes3, shoes4];
  const handleClickPreviewImg = () => {
    let index = images.findIndex((item) => item === currentLargeImg);
    setPhotoIndex(index);
    setIsOpen(true);
  };
  return (
    <>
      <div className="product-container">
        <div className="content-left">
          <div className="img-up">
            <img src={currentLargeImg} onClick={() => setIsOpen(true)} />
          </div>
          <div className="img-down">
            <div className="img-small">
              {" "}
              <img
                src={shoes1}
                onClick={() => {
                  setCurrentLargeImg(shoes1);
                }}
                className={currentLargeImg === shoes1 ? "active" : ""}
              />
            </div>
            <div className="img-small">
              {" "}
              <img
                src={shoes2}
                onClick={() => {
                  setCurrentLargeImg(shoes2);
                }}
                className={currentLargeImg === shoes2 ? "active" : ""}
              />
            </div>
            <div className="img-small">
              {" "}
              <img
                src={shoes3}
                onClick={() => {
                  setCurrentLargeImg(shoes3);
                }}
                className={currentLargeImg === shoes3 ? "active" : ""}
              />
            </div>
            <div className="img-small">
              {" "}
              <img
                src={shoes4}
                onClick={() => {
                  setCurrentLargeImg(shoes4);
                }}
                className={currentLargeImg === shoes4 ? "active" : ""}
              />
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="title">Giày Thể Thao Nam Hunter X</div>
          <div className="price">1.174.000 ₫</div>
          <div className="size">
            <label className="quality">Size: </label>
            <input type="number" min={28} />
          </div>
          <div className="action">
            <label className="quality">Số lượng: </label>
            <div>
              <input type="number" min={1} />
            </div>
            <div>
              <button className="btn btn-buy">Chọn mua</button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          animationDisabled={true}
        />
      )}
    </>
  );
};
export default Product;
