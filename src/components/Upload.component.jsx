import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Card from "react-bootstrap/Card";
var style = {
  backgroundColor: "eee",

}
var up = {
  height: "200px",
  width: "auto",
}
const Upload = (props) => {
  return (

    <div className="col-xl-3 col-lg-3 col-md-11 col-sm-11 mt-2 p-5 m-10 ht mt-4" style={style}>
      {props.uploadImage ? (
        <Card.Img
          id="icons"
          className="card-img-top ht mt-2"
          variant="top"
          src={props.originalLink}
          style={up}
        ></Card.Img>
      ) : (
          <Card.Img
            id="icons"
            className="ht"
            variant="top"
            src="https://media.giphy.com/media/vniHEov2M4XWJOU9dC/giphy.gif"
          ></Card.Img>
        )}
      {props.originalImage ? (
        <div id="kb" className="d-flex ml-10 justify-content-center">
          <h5>{Number((parseInt(props.originalImage.size, 10) / 1024).toFixed(1))} KB</h5>
        </div>
      ) : (
          <></>
        )}
      <div className="d-flex justify-content-center">

        <input
          type="file"
          accept="image/*"
          className="mt-2 btn btn-dark w-75"
          onChange={e => props.handle(e)}
        />
      </div>

    </div>

  );
}

export default Upload;