document.querySelector("#colors").addEventListener('click', function(e)
{
    document.body.style.backgroundColor = e.target.dataset.hex;
})

/* 

 -- Why doesn't this work?

function prepareColors()
{
    const allButtons = document.querySelectorAll(".button");

    for (let i = 0; i<allButtons.entries; i++) 
    {
        allButtons.item(i).addEventListener("click", function (e)
        {
            document.body.style.backgroundColor = e.target.dataset.hex;
        }
        )
    }
}

*/