// innerHTML

//document.getElementById("content").innerHTML = "Hello Ashish"; --> Hello Ashish

//textContent

//document.getElementById("content").textContent = "Hello Ashish"; --> Hello Ashish

//appendChild

var newElement = document.createElement("p");
newElement.textContent = "Hello Ashish";
document.getElementById("content").appendChild(newElement);

//append child calls element inside parent id
//--> Hello World -- Hello Ashish


//insertAdjacentHTML

// document.getElementById("content").insertAdjacentHTML('afterend', '<p>Hello Ashish</p>'); --> we can use beforebegin , afterbegin, beforeend, afterend


//insertAdjacentElement

// var newElement = document.createElement("p");
// newElement.textContent = "New paragraph";
// document.getElementById("content").insertAdjacentElement('beforebegin', newElement);

