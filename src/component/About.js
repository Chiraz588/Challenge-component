
 function Abo (props){
    return(
        <section id="about-me">
           <h1>
        Hello, my name is
        <span class="rotate text-important">{props.name}</span>,<br />
        and i make horrible websites.
      </h1>
      <img src={props.image} alt="jhon-doe"class="avatar"  alt="jhon-doe" />    

        </section>
    )
}
export default Abo;