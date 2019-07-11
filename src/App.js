import React, { Component } from "react";
import Cards from "./Components/Cards";
import Tabs from "./Components/Tabs";
import Form from "./Components/Form";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";

import axios from "axios";
import "./App.css";
const key = "fde7f9eef82f4e4cbaa371ced20c2537";
let option = "apple";

let country = "ca";
let url = `https://newsapi.org/v2/top-headlines?country=${country}&q=${option}&apiKey=${key}`;
let apiData;
let titles = ["Not Found", "Not Found", "Not Found"];
let descriptions = [
  "Description not found ",
  "Description not found ",
  "Description not found "
];
let images = [
  "https://i.ytimg.com/vi/kLi6Eujg62A/maxresdefault.jpg",
  "https://i.ytimg.com/vi/kLi6Eujg62A/maxresdefault.jpg",
  "https://i.ytimg.com/vi/kLi6Eujg62A/maxresdefault.jpg"
];

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

  forFunction() {
    for (let index of apiData.articles.keys()) {
      titles[index] = apiData.articles[index].title;
      descriptions[index] = apiData.articles[index].description;
      images[index] = apiData.articles[index].urlToImage;
    }
  }

  componentDidMount() {
    axios.get(url).then(res => {
      apiData = res.data;

      this.forFunction();

      this.setState({
        title: titles[0],
        description: descriptions[0],
        image: images[0],
        title2: titles[1],
        description2: descriptions[1],
        image2: images[1],
        title3: titles[2],
        description3: descriptions[2],
        image3: images[2]
      });
    });
  }

  changeOption = newCountry => {
    url = `https://newsapi.org/v2/top-headlines?country=${newCountry}&q=${option}&apiKey=${key}`;
    titles = ["Not Found", "Not Found", "Not Found"];
    descriptions = [
      "Description not found ",
      "Description not found ",
      "Description not found "
    ];
    images = [
      "https://i.ytimg.com/vi/kLi6Eujg62A/maxresdefault.jpg",
      "https://i.ytimg.com/vi/kLi6Eujg62A/maxresdefault.jpg",
      "https://i.ytimg.com/vi/kLi6Eujg62A/maxresdefault.jpg"
    ];

    axios.get(url).then(res => {
      apiData = res.data;
      this.forFunction();
      this.changeSetState();
    });
  };

  changeSetState() {
    this.setState({
      title: titles[0],
      description: descriptions[0],
      image: images[0],
      title2: titles[1],
      description2: descriptions[1],
      image2: images[1],
      title3: titles[2],
      description3: descriptions[2],
      image3: images[2]
    });
  }

  changeOptionEvent = async event => {
    event.preventDefault();
    const { searchWord } = event.target.elements;
    option = searchWord.value;
    url = `https://newsapi.org/v2/top-headlines?country=${country}&q=${
      searchWord.value
    }&apiKey=${key}`;
    // alert(searchWord.value);
    this.changeOption(searchWord.value);
  };

  render() {
    return (
      <div className="App">
        <Box p={10}>
          <h1>REACT NEWS APP</h1>
          <Form changeOptionEvent={this.changeOptionEvent} />
          <Tabs
            changeBoruto={this.changeOption.bind(this, "mx")}
            changeVancouver={this.changeOption.bind(this, "ca")}
            changeYourSearch={this.changeOption.bind(this, "ch")}
            changeReact={this.changeOption.bind(this, "us")}
            changeApple={this.changeOption.bind(this, "br")}
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
          <Chip label="Source: https://newsapi.org" />
        </Box>
      </div>
    );
  }
}

export default App;
