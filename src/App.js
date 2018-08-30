import React, { Component } from 'react';
import './App.css';

import Banner from './Banner';
import Expertise from './Expertise';
import Projects from './Projects';
import BlogPosts from './BlogPosts';
import Footer from './Footer';

import proj1 from './proj1.jpg';
import proj2 from './proj2.jpg';
import proj3 from './proj3.jpg';
import proj4 from './proj4.jpg';
import proj5 from './proj5.jpg';
import proj6 from './proj6.jpg';

const blogPosts = [
  {
    timestamp: 1524311594,
    title: 'Be macho, hunt bears and shit in the woods ',
    id: '12dasdvr32'
  },
  {
    timestamp: 1523793194,
    title: ' Where can i learn how to play a guitar ? ',
    id: 'sdfsdf2345gs'
  },
  {
    timestamp: 1523533994,
    title: 'Is there a law against marihuana ? ',
    id: '1231fdsf'
  },
  {
    timestamp: 1522669994,
    title: 'Where can i learn how to play a guitar ? ',
    id: '12q23rfvsd2'
  },
]

const projects = [
  {
    img: proj1,
    id: '2131da',
    title: 'Some Title',
    location: 'New York',
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam provident nam esse!"
  },
  {
    img: proj2,
    id: 'w534yhds',
    title: 'Some Title',
    location: 'New York',
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam provident nam esse!"
  },
  {
    img: proj3,
    id: '35tgds',
    title: 'Some Title',
    location: 'Boston',
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam provident nam esse!"
  },
  {
    img: proj4,
    id: '124fsg',
    title: 'Some Title',
    location: 'Naarden',
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam provident nam esse!"
  },
  {
    img: proj5,
    id: '123dasda',
    title: 'Some Title',
    location: 'Bunschoten',
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam provident nam esse!"
  },
  {
    img: proj6,
    id: 'e21eqw',
    title: 'Some Title',
    location: 'Bunschoten',
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam provident nam esse!"
  }
];

class App extends Component {
  constructor(props){
    super(props);
    this.showMore = this.showMore.bind(this);
  }

  state = {
    show: 3
  }

  showMore(){
    this.setState((prevState, props) => ({show: prevState.show + 1}))
  }

  render() {
    return (
      <div className="container">
        <Banner author="Robert Szymanski" position="Junior React Dev"/>
        <Expertise/>
        <Projects projects={projects} show={this.state.show} showMore={this.showMore}/>
        <BlogPosts posts={blogPosts}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
