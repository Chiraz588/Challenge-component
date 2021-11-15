import Nave from './component/Navbar.js'
import Abo from './component/About.js'
import Proj from './component/Projet.js'
import Cont from './component/Contact.js'
import Foot from './component/Footer'
import Projectimg from './images/proj1.jpg'
import Projectimg2 from './images/proj2.jpg'
import Projectimg3 from './images/proj3.jpg'
import Projectimg4 from './images/proj4.jpg'
import Avatar from './images/John-Doe.jpg'
import './App.css';

function App() {
  const name='John Doe';
  const projects = [{name : "Project 1", srcimg:Projectimg} , {name : "Project 2", srcimg:Projectimg2} , {name : "Project 3", srcimg:Projectimg3}, {name :"Project 4", srcimg:Projectimg4} ];
const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantiumaliquam.'
const year='2020';

  return (
    <div className="App">
    <Nave name={name}/>
    <Abo name={name} image={Avatar} />
    <Proj     projects={projects} lorem={ lorem}/>
    <Cont/>
    <Foot year={year}/>
    </div>
  );
}

export default App;
