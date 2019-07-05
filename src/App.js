import React, { Component } from "react";
import Cards from "./Components/Cards";
import Tabs from "./Components/Tabs";
import Form from "./Components/Form";
import Box from "@material-ui/core/Box";
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

  componentDidMount() {
    axios.get(url).then(res => {
      apiData = res.data;
      for (let index of apiData.articles.keys()) {
        titles[index] = apiData.articles[index].title;
        descriptions[index] = apiData.articles[index].description;
        images[index] = apiData.articles[index].urlToImage;
      }

      // if (titles.length < 3) {
      //   titles[2] = "Not Found";
      //   descriptions[2] = "Description not found ";
      //   images[2] = "https://i.ytimg.com/vi/kLi6Eujg62A/maxresdefault.jpg";
      //   if (titles.length < 2) {
      //     titles[1] = "Not Found";
      //     descriptions[1] = "Description not found ";
      //     images[1] = "https://i.ytimg.com/vi/kLi6Eujg62A/maxresdefault.jpg";
      //     if (titles.length < 1) {
      //       titles[0] = "Not Found";
      //       descriptions[0] = "Description not found ";
      //       images[0] = "https://i.ytimg.com/vi/kLi6Eujg62A/maxresdefault.jpg";
      //     }
      //   }
      // }

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

  componentDidUpdate() {
    // axios.get(url).then(res => {
    //   apiData = res.data;
    //   for (let index of apiData.articles.keys()) {
    //     titles[index] = apiData.articles[index].title;
    //     descriptions[index] = apiData.articles[index].description;
    //     images[index] = apiData.articles[index].urlToImage;
    //   }
    //   if (apiData) {
    //     this.setState({
    //       title: titles[0],
    //       description: descriptions[0],
    //       image: images[0],
    //       title2: titles[1],
    //       description2: descriptions[1],
    //       image2: images[1],
    //       title3: titles[2],
    //       description3: descriptions[2],
    //       image3: images[2]
    //     });
    //   } else {
    //     this.setState({
    //       title: "",
    //       description: "",
    //       image: "",
    //       title2: "",
    //       description2: "",
    //       image2: "",
    //       title3: "",
    //       description3: "",
    //       image3: ""
    //     });
    //   }
    // });
  }

  // Work on this/ it should setState and retrieve url
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
      for (let index of apiData.articles.keys()) {
        titles[index] = apiData.articles[index].title;
        descriptions[index] = apiData.articles[index].description;
        images[index] = apiData.articles[index].urlToImage;
      }
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
    const searchWord = event.target.elements;
    this.setState({});
    url = `https://newsapi.org/v2/top-headlines?country=${country}&q=${
      searchWord.value
    }&apiKey=${key}`;
    alert(searchWord.value);
  };

  render() {
    return (
      <div className="App">
        <Box>
          <h1>REACT NEWS APP</h1>
          <Form changeOptionEvent={this.changeOptionEvent} />
          <Tabs
            changeBoruto={this.changeOption.bind(this, "mx")}
            changeVancouver={this.changeOption.bind(this, "ca")}
            changeYourSearch={this.changeOption.bind(this, option)}
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
        </Box>
      </div>
    );
  }
}

export default App;
