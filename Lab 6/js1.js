document.getElementById("Colorchange").onclick = () => { 

    let input = document.getElementById("input_ingredientes");
    let colors = [
        "blue",
        "red",
        "green",
        "yellow",
        "cyan",
        "purple",
        "black",
        "white"
    ];

    let color = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[color];
}