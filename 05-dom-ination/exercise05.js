/**
 * Given the HTML below, please make the following changes with javascript – don't change any HTML!:
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post")
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *    
 */

(function () {


    let title = document.querySelector("h1");
    function changecolor() {
        if (title.style.color === "red") {
            title.style.color = "black"
        }
        else {
            title.style.color = "red"
        }
    }
    //your code here
    title.addEventListener("click", changecolor)
    console.log(title)

    let paragraphElements = document.querySelectorAll("p");
    console.log(paragraphElements);
    
    (function () {
        for (let i=0;i<paragraphElements.length;i++){

            paragraphElements[i].innerHTML = paragraphElements[i].innerHTML.replace('Bacon', 'LASER VISION');
        }
    })();
    

    // let word = document.getElementByClass("large-10 columns");
    // word.innerHTML = word.innerHTML.replace('bacon', 'LASER VISION');








})()