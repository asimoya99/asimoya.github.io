const myHeading = document.querySelector('h1');
myHeading.textContent = "URCF Mexico Missions' Trip";

document.querySelector('body').onclick = function(){
    alert("Ouch! Stop poking me");
}
let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ensenada.jpg'){
        myImage.setAttribute('src', 'images/back-image.jpg');
    } else{
        myImage.setAttribute('src','images/ensenada.jpg');
    }

}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = "Welcome to the Missions Trip," + myName;
    }
  }
if(!localStorage.getItem('name')){
    setUserName();
} else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to URCF Missions Trip to Mexico, ' + storedName; 
}

myButton.onclick = function(){
    setUserName();
}

