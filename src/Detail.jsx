import { useState } from "react";
const Detail = ({ thumbnail, title, description, price }) => {
  const [handleImg, setHandleImg] = useState(false);
  return (
    <div > 
      <img
        id="product-img"
        onMouseOver={() => setHandleImg(handleImg ? false : true)}
        onMouseLeave={() => setHandleImg(handleImg ? false : true)}
        src={thumbnail}
        alt={title}
      />
      {handleImg ? (
        <div className="des">
          <h2>{title}</h2>
          <h3>{description}</h3>
          <h2 className="des-price"> Price : $ &nbsp;{price}</h2>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Detail;
