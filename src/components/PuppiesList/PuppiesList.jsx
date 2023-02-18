export default function PuppiesList(props){
    return(
        <ul>Component Method
            {props.puppies.map((puppy, idx) =>
                <li key={idx}>{(puppy.name)}</li>)}
        </ul>
    )
}