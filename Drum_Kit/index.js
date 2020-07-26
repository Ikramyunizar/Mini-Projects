let jumlahdrum = document.querySelectorAll(".drum").length;

for (i = 0; i<jumlahdrum; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    currentButton = this.innerHTML;

    makeSound(currentButton);
    
});




}
document.addEventListener("keydown", function (event){
    makeSound(event.key);
});



function makeSound(key){
    switch(key){
        case "w":
            audi = new Audio("sounds/tom-1.mp3");
            audi.play();
        break;
        case "a":
            audi = new Audio("sounds/tom-2.mp3");
            audi.play();
        break;
        case "s":
            audi = new Audio("sounds/tom-3.mp3")
            audi.play();
        break;
        case "d":
            audi = new Audio("sounds/tom-4.mp3");
            audi.play();
        break;
        case "j":
            audi = new Audio("sounds/crash.mp3");
            audi.play();
        break;
        case "k":
            audi = new Audio("sounds/kick-bass.mp3");
            audi.play();
        break;
        case "l":
            audi = new Audio("sounds/snare.mp3");
            audi.play();
        break;
    }
   
}

