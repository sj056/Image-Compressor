import React from "react";
import Upload from "./components/Upload.component";
import Compressor from "./components/Compressor.component";
import Header from "./components/Header.component";
import imageCompression from "browser-image-compression";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      compressedLink:
      "https://www.flaticon.com/svg/static/icons/svg/3588/3588226.svg",
      originalImage: "",
      outputImage: "",
      originalLink: "",
      clicked: false,
      uploadImage: false,
      quality: 0,
      count: 0
    };

  }
  handleChange = value => {
    this.setState({
      quality: value,
    });
  };
  changeValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  showSettings(event) {
    event.preventDefault();
  }
  click = e => {
    e.preventDefault();

    const options = {
      maxSizeMB: this.state.quality / 1024,
      maxWidthOrHeight: this.state.originalImage.height,
      useWebWorker: true
    };

    if (options.maxSizeMB >= this.state.originalImage.size / 1024) {
      alert("Bring a bigger image");
      return 0;
    }

    let output;
    imageCompression(this.state.originalImage, options).then(x => {
      output = x;
      const downloadLink = URL.createObjectURL(output);
      this.setState({
        compressedLink: downloadLink,
        outputImage: output,
      });
    });

    this.setState({ clicked: true });
    return 1;
  };
  handle = e => {

    const imageFile = e.target.files[0];
    this.setState({
      originalLink: URL.createObjectURL(imageFile),
      originalImage: imageFile,
      outputFileName: imageFile.name,
      uploadImage: true,

    });


  };
  render() {
    let whole = {
      overflow: "hidden",
      overflowY: "hidden",
    }
    return (
      <div className="App" style={whole}>
        <Header />
        <div className="row mx-5  justify-content-center align-items-center y-5 s-5" >
          <Upload uploadImage={this.state.uploadImage}
            originalLink={this.state.originalLink}
            originalImage={this.state.originalImage}
            handle={this.handle} />

          <Compressor outputFileName={this.state.outputFileName}
            quality={this.state.quality}
            handleInputChange={this.handleChange}
            click={this.click}
            compressedLink={this.state.compressedLink}
            outputImage={this.state.outputImage}
            clicked={this.state.clicked}
            outputFileName={this.state.outputFileName}
          />
        </div>
      </div>
    );
  }
}

export default App;
