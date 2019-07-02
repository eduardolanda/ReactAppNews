import React, { Component } from "react";
import Cards from "./Components/Cards";
import Tabs from "./Components/Tabs";
import Form from "./Components/Form";
import Box from "@material-ui/core/Box";
import axios from "axios";
import "./App.css";

let url =
  "https://newsapi.org/v2/everything?q=boruto&from=2019-06-01&sortBy=publishedAt&apiKey=fde7f9eef82f4e4cbaa371ced20c2537";

let apiData;
class App extends Component {
  state = {
    title: "Not Found",
    image: "https://i.ytimg.com/vi/kLi6Eujg62A/maxresdefault.jpg",
    description: "Description not found ",
    title2: "Not Found",
    image2: "https://i.ytimg.com/vi/kLi6Eujg62A/maxresdefault.jpg",
    description2: "Description not found ",
    title3: "Not Found",
    image3: "https://i.ytimg.com/vi/kLi6Eujg62A/maxresdefault.jpg",
    description3: "Description not found "
  };

  componentDidMount() {
    axios.get(url).then(res => {
      apiData = res.data;
      this.setState({
        title: apiData.articles[1].title,
        description: apiData.articles[1].description,
        image: apiData.articles[1].urlToImage,
        title2: apiData.articles[2].title,
        description2: apiData.articles[2].description,
        image2: apiData.articles[2].urlToImage,
        title3: apiData.articles[3].title,
        description3: apiData.articles[3].description,
        image3: apiData.articles[3].urlToImage
      });
    });
  }

  componentDidUpdate() {
    axios.get(url).then(res => {
      apiData = res.data;
      this.setState({
        title: apiData.articles[1].title,
        description: apiData.articles[1].description,
        image: apiData.articles[1].urlToImage,
        title2: apiData.articles[2].title,
        description2: apiData.articles[2].description,
        image2: apiData.articles[2].urlToImage,
        title3: apiData.articles[3].title,
        description3: apiData.articles[3].description,
        image3: apiData.articles[3].urlToImage
      });
    });
  }

  // Work on this/ it should setState and retrieve url
  changeboruto = newSrc => {
    this.setState({});
    url =
      "https://newsapi.org/v2/everything?q=boruto&from=2019-06-01&sortBy=publishedAt&apiKey=fde7f9eef82f4e4cbaa371ced20c2537";
  };
  changevancouver = newSrc => {
    this.setState({});
    url =
      "https://newsapi.org/v2/everything?q=vancouver&from=2019-06-01&sortBy=publishedAt&apiKey=fde7f9eef82f4e4cbaa371ced20c2537";
  };
  changereact = newSrc => {
    this.setState({});
    url =
      "https://newsapi.org/v2/everything?q=react&from=2019-06-01&sortBy=publishedAt&apiKey=fde7f9eef82f4e4cbaa371ced20c2537";
  };
  changeapple = newSrc => {
    this.setState({});
    url =
      "https://newsapi.org/v2/everything?q=apple&from=2019-06-01&sortBy=publishedAt&apiKey=fde7f9eef82f4e4cbaa371ced20c2537";
  };

  render() {
    return (
      <div className="App">
        <Box>
          <h1>REACT NEWS APP</h1>
          <Form />
          <Tabs
            changeBoruto={this.changeboruto}
            changeVancouver={this.changevancouver}
            changeReact={this.changereact}
            changeApple={this.changeapple}
          />
          <Cards
            title={this.state.title}
            imageUrl={this.state.image}
            description={this.state.description}
          />
          <Cards
            title={this.state.title2}
            imageUrl={this.state.image2}
            description={this.state.description2}
          />
          <Cards
            title={this.state.title3}
            imageUrl={this.state.image3}
            description={this.state.description3}
          />
        </Box>
      </div>
    );
  }
}

export default App;
