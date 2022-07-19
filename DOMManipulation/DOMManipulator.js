/*
✓ 	Select the section with an id of container without using querySelector.
✓ 	Select the section with an id of container using querySelector.
✓ 	Select all of the list items with a class of “second”. << this can be refined
✓ 	Select a list item with a class of third, but only the list item inside of the ol tag.
✓ 	Give the section with an id of container the text “Hello!”.
✓ 	Add the class main to the div with a class of footer.
✓ 	Remove the class main on the div with a class of footer.
✓ 	Create a new li element.
✓ 	Give the li the text “four”.
✓ 	Append the li to the ul element.
✓ 	Loop over all of the lis inside the ol tag and give them a background color of “green”.
✓ 	Remove the div with a class of footer
*/

var lineItem;

function noQSelectContainer() 
{
	return document.getElementById("container");
}

function qSelectContainer() 
{
	return document.querySelector("#container");
}

function selectAllSecondClass() 
{
	return 	document.querySelectorAll(".second");
}

function selectThirdInOrderedList() 
{
	return document.querySelector("ol").querySelector(".third");
}

function changeTextOfContainerSection() 
{
	document.querySelector("section#container").innerHTML = "hello";
}

function addMainToFooter() 
{
	document.querySelector(".footer").setAttribute('class', "main footer");
}

function removeMainFromFooter() 
{
	document.querySelector("div.footer").setAttribute('class', "footer");
}

function newListItemElement() 
{
	lineItem = document.createElement("li");
}

function listItemTextAdd() 
{
	var text = document.createTextNode("four")
	lineItem.appendChild(text);
}

function appendListItemToUnorderedList() 
{
	document.querySelector("ul").appendChild(lineItem);
}

function changeOrderedListItemBGColor() 
{
	//forEach list item in ordered list
	/*
	for (let i = 0; i<document.querySelector("ol").querySelectorAll("li").entries(); i++) {
		document.querySelector("ol").querySelectorAll("li").item(i).style.backgroundColor('green');
	}
	*/
	document.body.style.backgroundColor = 'green';

	var listItemList = document.querySelector("ol").querySelectorAll("li");

	for (let i = 0; i<listItemList.entries; i++) {
		listItemList.element(i).style.backgroundColor('green');
	}

	/*
	document.querySelector("ol").querySelectorAll("li").forEach
	(
		function (listItem){
			listItem.style.backgroundColor('green');
		}
	);
	*/
}

function divDelete() {
	document.querySelector("div.footer").remove();
}