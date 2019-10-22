(function () {


  /**
   * Use the built in function setTimeout to add a random image to the page every 2.5 seconds.
   * The function setInterval would be easier but figuring out how to do this with setTimeout is
   * more rewarding. Good luck and remember to google all the things.
   * 
   * Use the addImage function to add the image. There are several images in this directory
   * for you to use
   *
   * To point you in the right direction: check out
   * the getRandomInt function on this page:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   * 
   * This link may help as well:
   * 
   * https://stackoverflow.com/questions/729921/settimeout-or-setinterval
   * 
   */


  /**
   * this function adds an image to the page
    * @param {String} name an image filename
   */

  function addImage(name) {
    var img = document.createElement('img');
    img.src = name;
    document.getElementById('image-box').appendChild(img);
  }

  //your code here
  let imageStringArray = [
    "cats.jpg",
    "hugger.jpg",
    "internet.jpg",
    "jackson.jpg",
    "washington.jpg"
  ]


  function setImage() {
    let randomNumber = Math.floor(Math.random() * Math.floor(5));
    addImage(imageStringArray[randomNumber]);

  }

  function myTimeoutFunction() {
    setImage()
    setTimeout(myTimeoutFunction, 2500);
  }

  myTimeoutFunction();
  // setTimeout(setImage,2500);


})();