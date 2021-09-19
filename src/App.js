import React, { useEffect, useState} from "react";
import {Link, Route, useLocation} from "react-router-dom";
import $ from 'jquery'
import './App.css';
function App() {
  // khai báo state isOpen để đóng mở nav trên mobile
  var [isOpen, setIsOpen] = useState(true);

  // xử lý sự kiện khi click vào nút menu trên moblie
  function handleClickMenu() {
    var btnOpen = document.querySelector('.btn-open');
    var navList = document.querySelector('.nav-list');
    setIsOpen(!isOpen);
    if (isOpen){
      btnOpen.style.cssText = "transform: rotate(-180deg)";
      setTimeout(function(){
        btnOpen.className = btnOpen.className.replace('fa-bars', 'fa-times')
      },150);
      navList.style.cssText = "right: 0";
    } else {
      btnOpen.style.cssText = "transform: rotate(0deg);";
      setTimeout(function(){
        btnOpen.className = btnOpen.className.replace('fa-times', 'fa-bars')
      },150);
      navList.style.cssText = "right: -300px";
    };
  };

  // jquery tạo smooth khi click nút scrolltop
  function scrollToTop(){
    // window.scrollTo(0,0)
    $('html, body').animate({
      scrollTop: 0
    }, 800)
  }
  
  // khi mount và update / switch route thì thêm/xóa hiệu ứng cho nav-item
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

  // xử lý sự kiện khi scroll (cả khi click scrolltop btn và khi người dùng scroll)
  // ẩn hiện nút scroll-btn
  window.onscroll = ()=>{
    var scrollTopBtn = document.querySelector('.scroll-top-btn');
    if (((document.body.scrollTop > 350) || document.documentElement.scrollTop > 350)
      && (pathname !== '/') && ($(window).width() < 740)) {
      scrollTopBtn.style.display = 'flex';
    } else {
      scrollTopBtn.style.display = 'none';
      }
  };

  // xử lý đóng navbar trên mobile khi click mọi nơi
  window.onclick = (e)=>{
    if (($(window).width() < 740) && (!e.target.closest('.menu-btn')) && (isOpen === false)){
      handleClickMenu()
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="info">
          <h2>Nguyễn Duy Thái</h2>
          <p>Front-end Developer</p>
        </div>
        <div className="nav">
          <div className="menu-btn" onClick={()=>handleClickMenu()}>
            <i className="btn-open fas fa-bars"></i>
          </div>
          <ul className="nav-list" >
            <li className="nav-item">
              <Link className="nav-link" to="/">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/certificates">Ceftificates</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="container">
        <Route exact path="/" component={About}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/products" component={Products}/>
        <Route path="/certificates" component={Certificates}/>
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

// About component
function About() {
  return (
    <div className="about-content row">
      <div className="description l-4 sm-12">
        <h1>Hello</h1>
        <p>Let's see what I can do!</p>
        <ul className="switch-box">
          <li className="nav-item btn btn-resume">
            <Link to="/resume">Resume</Link>
          </li>
          <li className="nav-item btn btn-products">
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <p className="about-me">I love creating web interfaces and making them work. During the past 8 months, I've taught myself HTML, CSS, JS, React and created several products, including the one you're visiting, using React. I want to learn and do more.
<br/>So, I look forward to working in a professional environment and becoming an excellent Front-end developer, contributing to the growth of the company. Along with the skills from the businesses I have worked with, I am confident that I will contribute to the company not only expertise but also many other aspects.</p>
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

// Dữ liệu cho education
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

// Dữ liệu cho skills
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
    name: 'Javascript:',
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

// Dữ liệu cho products
const products = [
  {
    name: 'Shopppee',
    title: 'Sample interface from shopee.',
    desc: 'The first product after I completed the HTML and CSS course on fullstack.edu.vn. It took quite some time with self-study, but my skills improved a lot and created motivation for the next products.',
    link: 'https://nthai17.github.io/shopppee',
    imgSrc: './img/product-shopee.png'
  },
  {
    name: 'Maxstay',
    title: 'Travel booking website.',
    desc: `The product was created while I was learning Javascript at MindX. Use html, css and already have javascript to handle user events. I already know how to use Carousel 2 to create slideshow.`,
    link: 'https://nthai17.github.io/maxstay',
    imgSrc: './img/product-maxstay.png'
  },
  {
    name: 'The band',
    title: 'Band website and ticket booking.',
    desc: `The interface is created during the learning process on W3school.com.
    Using html, css, JS and tested everything I learned on W3school.`,
    link: 'https://nthai17.github.io/theband',
    imgSrc: './img/product-theband.png'
  },
  {
    name: 'Music-player',
    title: 'Music player',
    desc: `The product was created while I was practicing my logic with JS, when I was about to finish the basic JS course on F8.edu.vn.`,
    link: 'https://nthai17.github.io/music-player',
    imgSrc: './img/product-music-player.png'
  },
]

// Dữ liệu cho certificate
const certificates = [
  {
    name: 'Certificate [MindX] Code for Everyone course.',
    download: 'Certificate [MindX] Code for Everyone course.pdf',
    src: './pdf/Certificate [MindX] Code for Everyone course.pdf'
  },
  {
    name: 'Certificate [MindX x TopCV] Web Coding Challenge.',
    download: 'Certificate [MindX x TopCV] Web Coding Challenge.pdf',
    src: './pdf/Certificate [MindX x TopCV] Web Coding Challenge.pdf'
  }
]

// render list education từ dữ liệu education
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

// render list skills từ dữ liệu skills
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

// render list products từ dữ liệu products
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
            <p>Click on the image to view.</p>
          </div>
          <div className="l-5 product-view sm-12">
            <a href={product.link} target="_blank" rel="noreferrer" className="preview">
              <img src={product.imgSrc} alt={product.name}></img>
            </a>
          </div>
        </div>
      )
    })
};

// render list certificates từ dữ liệu certificates
function RenderCertificates(){
  return certificates.map((certificate, index)=>{
    return (
    <a key={index} className="certificate-link" download={certificate.download} 
      href={certificate.src}>
      {certificate.name}</a>
    )
  })
};

// resume component
function Resume() {
  return (
    <div className="resume-content">
      <h1>Resume</h1>
      <div className="education row">
        <div className="l-6 sm-12">
          <div className="tittle row">
            <h2>Ecucation</h2>
            <Link className="btn-move-to-products" to="/products">View my products</Link>
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

// produc component
function Products() {
  return (
    <div className="products-content row">
      <h1>Products</h1>
      <p className="l-7 sm-12">With my hard work, initiative, and always ready to learn everything to meet the job, I have equipped myself with the necessary knowledge to have some interesting products. I aspire to work in a professional environment and become an excellent Front-end developer.
      <br/>Give me a chance and challenge me!</p>
      <a className="btn-dowload-cv" download="CV-Nguyen-Duy-Thai-Fresher-FE.pdf" href="./pdf/CV_Nguyen_Duy_Thai_Fresher-FE.pdf">Download CV</a>
      <RenderProducts/>
    </div>
  )
}

function Certificates() {
  return (
    <div className="certificate-content row">
      <h1>Certificates</h1>
      <p className="l-7 sm-12">Besides self-study, I took MindX's Javascript courses and completed the basic course.
      <br/>I also joined the Wed Coding Challenge organized by MindX in conjunction with TopCV to learn and challenge myself.
      <br/>Below are the certificates.</p>
        <RenderCertificates/>
      <h1 class="thanks"><i>Thank you!</i></h1>
    </div>
  )
}
