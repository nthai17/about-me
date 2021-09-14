import React, { useEffect, useState} from "react";
import {Link, Route, useLocation} from "react-router-dom";
import $ from 'jquery'
import './App.css';
function App() {
  var [isOpen, setIsOpen] = useState(true);
  function handleClickMenu() {
    var btnOpen = document.querySelector('.btn-open')
    var navList = document.querySelector('.nav-list')
    setIsOpen(!isOpen);
    if (isOpen){
      btnOpen.style.cssText = "transform: rotate(-180deg)";
      setTimeout(function(){
        btnOpen.className = btnOpen.className.replace('fa-bars', 'fa-times')
      },150);
      navList.style.cssText = "right: 0; opacity: 1";
    } else {
      btnOpen.style.cssText = "transform: rotate(0deg);";
      setTimeout(function(){
        btnOpen.className = btnOpen.className.replace('fa-times', 'fa-bars')
      },150);
      navList.style.cssText = "right: -300px; opacity: 0";
    }
  }
  function closeMenu(){
    handleClickMenu()
  }
  function scrollToTop(){
    // window.scrollTo(0,0)
    $('html, body').animate({
      scrollTop: 0
    }, 800)
  }
  
  const {pathname} = useLocation();
  useEffect(()=>{
    const listItem = Array.from(document.querySelectorAll('.nav-link'));
    for (var item of listItem) {
      item.classList.remove('active')
      if(item.pathname === pathname){
        item.classList.add('active')
      }
    }
  },[pathname]);
  useEffect(()=>{
    if (pathname !== '/'){
      window.onscroll = ()=> {
        var scrollTopBtn = document.querySelector('.scroll-top-btn');
        if ((document.body.scrollTop > 350) || document.documentElement.scrollTop > 350) {
          scrollTopBtn.style.display = 'flex';
        } else {
          scrollTopBtn.style.display = 'none';
        }
      }
    }
  })
  return (
    <div className="App">
      <header className="App-header">
        <div className="info">
          <h2>Nguyễn Duy Thái</h2>
          <p>Front-end Developer (Fresher)</p>
        </div>
        <div className="nav">
          <div className="menu-btn" onClick={()=>handleClickMenu()}>
            <i className="btn-open fas fa-bars"></i>
          </div>
          <ul className="nav-list" onClick={()=>closeMenu()}>
            <li className="nav-item">
              <Link className="nav-link" to="/">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="container">
        <Route exact path="/" component={About}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/products" component={Products}/>
      </div>
      <div className="footer">
        <div className="scroll-top-btn" onClick={()=>{scrollToTop()}}><i className="fas fa-chevron-up"></i></div>
        <div className="phone">
          <h3>Phone</h3>
          <p>0974-521-617</p>
        </div>
        <div className="email">
          <h3>Email</h3>
          <p>duythai120696@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;


function About() {
  return (
    <div className="about-content row">
      <div className="description l-4 sm-12">
        <h1>Hello</h1>
        <p>Here's who I am & what I want to do.</p>
        <ul className="switch-box">
          <li className="nav-item btn btn-resume">
            <Link to="/resume">Resume</Link>
          </li>
          <li className="nav-item btn btn-products">
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <p className="about-me">I love creating web interfaces and making them work. With my hard work, initiative, and always ready to learn everything to meet the job, I have equipped myself with the necessary knowledge to have some interesting products.
<br/>I look forward to working in a professional environment and becoming an excellent Front-end developer, contributing to the growth of the company. Along with the skills from the businesses I have worked with, I am confident that I will contribute to the company not only expertise but also many other aspects.</p>
      </div>
      <div className="info-box l-4 sm-12">
        <div className="tab-avatar">
          <div className="avatar">
            <img alt="avatar" src="./img/myavatar.jpg"/>
          </div>
          <h3>Nguyễn Duy Thái</h3>
          <div className="spearate"></div>
          <p className="dream">Front-end Developer (Fresher)</p>
          <ul className="link-to-me">
          <li><a target="_blank" rel="noreferrer" href="https://github.com/nthai17"><i className="fab fa-github"></i></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://facebook.com/thaind96"><i className="fab fa-facebook"></i></a></li>
        </ul>
        </div>
      </div>
    </div>
  )
}
const edus =[
  {
    time: '03/2021 - Present',
    schools: [
      {
        name: 'MindX',
        course: 'Web-fullstack',
        completed: 'Completed Basic Javascript Course.',
        knowledge: 'Completed the Code for Everyone course: Basic Javascript, HTML, CSS.'
      },
      {
        name: 'Fullstack.edu.vn',
        course: 'HTML, CSS, Javascript',
        completed: '',
        knowledge: 'Completed the HTML, CSS, Responsive Web Design, Basic Javascript course.'
      }
    ]
  },

  {
    time: '09/2014 - 06/2019',
    schools: [
      {
        name: 'Hanoi University of Mining and Geology',
        course: 'Mining engineering',
        completed: 'Degree Level: Excellence.',
        knowledge: 'I am a mining engineer. I have been involved in research on new technologies and won awards at the student level.'
      }
    ]
  },
];

const skills = [
  {
    name: 'HTML, CSS:',
    knowledge:'Good use of HTML and CSS to create custom web interfaces.'
  },
  {
    name: 'Responsive Web Design:',
    knowledge:'Know how to build responsive websites (plain code or use the grid system in Bootstrap)'
  },
  {
    name: 'Javasctipt:',
    knowledge:'Have basic knowledge, can be applied to build functions, handle user events on the website. Knowledge of jquery, Reactjs at basic level.'
  },
  {
    name: 'Git - Github:',
    knowledge:'Understand roles and basic usage (create repo, clone, pull, push.)'
  },
  {
    name: 'Teamwork:',
    knowledge:'Ability to connect, train, support team members, manage teams from 10 people.'
  },
  {
    name: 'English:',
    knowledge:'Basic reading comprehension. Search for professional documents.'
  }
];
const products = [
  {
    name: 'Shopppee',
    title: 'Sample interface from shopee.',
    desc: `The first product after I completed the HTML and CSS course on fullstack.edu.vn.
    It took quite some time with self-study, but my skills improved a lot and created motivation for the next products.
    Click on the image to view.`,
    link: 'https://nthai17.github.io/shopppee',
    imgSrc: './img/product-shopee.png'
  },
  {
    name: 'Maxstay',
    title: 'Travel booking website.',
    desc: `The product was created while I was learning Javascript at MindX. Use html, css and already have javascript to handle user events. I already know how to use Carousel 2 to create slideshow.
    Click on the image to view.`,
    link: 'https://nthai17.github.io/maxstay',
    imgSrc: './img/product-maxstay.png'
  },
  {
    name: 'The band',
    title: 'Band website and ticket booking.',
    desc: `The interface is created during the learning process on W3school.com.
    Using html, css, JS and tested everything I learned on W3school.
    Click on the image to view.`,
    link: 'https://nthai17.github.io/theband',
    imgSrc: './img/product-theband.png'
  },
  {
    name: 'Music-player',
    title: 'Music player',
    desc: `The product was created while I was practicing my logic with JS, when I was about to finish the basic JS course on F8.edu.vn.
    Click on the image to view.`,
    link: 'https://nthai17.github.io/mucsic-player',
    imgSrc: './img/product-music-player.png'
  },
  {
    name: 'Todo-list-react',
    title: 'Todo list app',
    desc: `The product is the result when I taught myself React. It's a bit sketchy, but I have a basic understanding of Components, state, props. I need more hands-on experience with React.
    Click on the image to view.`,
    link: 'https://todo-list-nthai17.vercel.app/',
    imgSrc: './img/product-todo-list.png'
  },
]
function RenderEducation(){
  return edus.map((edu, index)=>{
    return (<div key={index} className="education-content">
    <h2>{edu.time}</h2>
    {edu.schools.map((school, index) => {
      return (
        <div key={index}><div className="education-course row">
          <div className="school-course l-5">
            <h3>{school.name}</h3>
            <h4>{school.course}</h4>
            <h5>{school.completed}</h5>
          </div>
          <div className="knowledge l-7">
            <p>{school.knowledge}</p>
          </div>
        </div></div>
      )
    })}
  </div>)
  })
}

function RenderSkills(){
  return skills.map((skill, index)=>{
    return (
          <div key={index} className="skill-content row">
            <div className="skill-name l-5">
              <h3>{skill.name}</h3>
            </div>
            <div className="knowledge l-7">
              <p>{skill.knowledge}</p>
            </div>
          </div>)
  })
}
function RenderProducts(){
    return products.map((product, index)=>{
      return (
        <div key={index} className="product l-7 sm-12">
          <div className="product-text l-7 sm-12">
            <div className="product-name">
              <h2>{product.name}</h2>
              <h4>{product.title}</h4>
            </div>
            <p className="product-desc">{product.desc}</p>
          </div>
          <div className="l-5 product-view sm-12">
            <a href={product.link} target="_blank"rel="noreferrer" className="preview">
              <img src={product.imgSrc} alt={product.name}></img>
            </a>
          </div>
        </div>
      )
    })
}

function Resume() {
  return (
    <div className="resume-content">
      <h1>Resume</h1>
      <div className="education row">
        <div className="l-6 sm-12">
          <div className="tittle row">
            <h2>Ecucation</h2>
            <a className="btn-dowload-cv" download="CV Nguyen Duy Thai Frontend.pdf" href="./pdf/CV_Nguyen_Duy_Thai_Front-end-dev.pdf">Download CV</a>
          </div>
          <RenderEducation/>
        </div>
      </div>
      <div className="my-skill row">
        <div className="l-6 sm-12">
          <div className="tittle row">
            <h2>Skills</h2>
          </div>
          <RenderSkills/>
        </div>
      </div>
    </div>
  )
}

function Products() {
  return (
    <div className="products-content row">
      <h1>Products</h1>
      <p className="l-7 sm-12">With my hard work, initiative, and always ready to learn everything to meet the job, I have equipped myself with the necessary knowledge to have some interesting products. I aspire to work in a professional environment and become an excellent Front-end developer.</p>
      <RenderProducts/>
    </div>
  )
}
