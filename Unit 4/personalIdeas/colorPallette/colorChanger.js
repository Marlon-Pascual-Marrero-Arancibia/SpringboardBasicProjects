document.querySelector("#White").addEventListener('click', function(e)
{
    document.body.style.backgroundColor = e.target.dataset.hex;
})

document.querySelector("#Brown").addEventListener('click', function(e)
{
    document.body.style.backgroundColor = e.target.dataset.hex;
})

document.querySelector("#Seafoam").addEventListener('click', function(e)
{
    document.body.style.backgroundColor = e.target.dataset.hex;
})

document.querySelector("#Black").addEventListener('click', function(e)
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