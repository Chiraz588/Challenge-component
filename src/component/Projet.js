import Card from './Card.js'
function Proj(props) {

return (


<section id="projects">
<h2 class="text-important">Projects</h2>
<div class="projects-container">
    
{props.projects.map(el=>
<Card   lorem={props.lorem}  el={el}/>
)
}
</div>
</section>
);
}
export default Proj;