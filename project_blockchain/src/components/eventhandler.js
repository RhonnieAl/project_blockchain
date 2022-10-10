export default function Button(props) {
    function handleClick(event) {
        //console.log("Button was clicked!");
        alert("Yay! You Clicked The Button!");
    }
    return <button onClick={handleClick}>Click Me</button>;
}
