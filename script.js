var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')
var txt = document.getElementById('txt1')

let flag = 1;

btn1.addEventListener('click', 
        work1 = () => {
            txt.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl eros, efficitur id elit quis, scelerisque cursus sem. Donec facilisis. "
            btn1.style.backgroundColor = "#666"
            btn2.style.backgroundColor = "#999"
            btn3.style.backgroundColor = "#999"
        }
    )
work1()

btn2.addEventListener('click', 
        function(){
            txt.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl eros, efficitur id elit quis. "
            btn2.style.backgroundColor = "#666"
            btn1.style.backgroundColor = "#999"
            btn3.style.backgroundColor = "#999"
        }
    )

    btn3.addEventListener('click', 
    function(){
        txt.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quo aliquam, voluptatum molestias consequuntur repellendus, quia impedit eos accusantium omnis est tempore consectetur amet eaque!"
        btn3.style.backgroundColor = "#666"
        btn2.style.backgroundColor = "#999"
        btn1.style.backgroundColor = "#999"
    }
)