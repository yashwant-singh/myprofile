import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
// import {Grid} from 'semantic-ui-react';
import Nav from './Nav.jsx';
import Summary from './Summary.jsx';
import Work from './Work.jsx';
// import Projects from './Projects';
import './App.css';
import ContentWrapper from './ContentWrapper';
import * as Img from './DP.jpg';



const initialContent={
  summary:{
    name:'Yashwant Kumar',
    image:Img,
    role:'Java Enthusiast, Backend and UI Developer at Practo, working on React and Java',
    skills:['Java', 'Spring','Javascript', 'React', 'Redux', 'React Semantic UI',' WebPack '],
    email:'yashwant.nie@gmail.com ',
    phone:'+91-8050232560',
    twitter:'',
    linkedIn:'https://www.linkedin.com/in/ykgaya/',
    github:'https://github.com/yashwant-singh',

  },
  work:[
    {
      company:'Practo Technologies',
      details:[` Working as a full stack developer User Interface as well as backend for Insta Health Management System.`],
      duration:'2013, Dec - present',
      role:'Lead Software Engineer'
    },
  ],
 
}

class App extends Component {
  state = {
     activeItem:'Summary',
    content:initialContent,
    }

    componentDidMount() {
      document.addEventListener('scroll', () => {
     
        if(window.scrollY>3&&window.scrollY<500){
          this.setState({activeItem:'Summary'})
        }
        if(window.scrollY>500&& window.screenY<1000){
          this.setState({activeItem:'Work'})
        }
        if(window.scrollY>1000){
          this.setState({activeItem:'Projects'})
        }
      });
    }

  handleItemClick = (e, { name }) => {
console.log(this.refs)
    scrollToComponent(this[name], {
      offset: -75,
      align: 'top',
      duration: 700,
  });
  }
  render() {
    return (
      <div className='wrapper'>
      <Nav activeItem={this.state.activeItem} handleItemClick={this.handleItemClick}/>
    
      <ContentWrapper ref={(el) => { this.Summary = el; }}>
      <Summary summary={this.state.content.summary} />
      </ContentWrapper>
    
      <ContentWrapper ref={(el) => { this.Work = el; }}>
      <Work work={this.state.content.work}/>
      </ContentWrapper>

      </div>
    );
  }
}

export default App;
