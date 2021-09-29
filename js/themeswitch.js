/* WITHOUT COOKIES
function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "https://img.icons8.com/ios-filled/50/000000/bat.png") 
    {
        document.getElementById("imgClickAndChange").src ="https://img.icons8.com/fluency/48/000000/iron-man.png";
        document.body.className = document.body.className.replace("light","dark");
    }
    else 
    {
        document.getElementById("imgClickAndChange").src = "https://img.icons8.com/ios-filled/50/000000/bat.png";
        document.body.className = document.body.className.replace("dark","light");
    }
}
*/
var Theme = localStorage.getItem('theme')
console.log('theme:', Theme)
if(Theme == null){
    Theme = 'light';
    console.log('was null')
}
setTheme()
function setTheme() {
    if (Theme=='dark'){
        console.log('theme set:', Theme)
        document.getElementById("imgClickAndChange").src ="https://img.icons8.com/fluency/48/000000/iron-man.png";
        document.body.className = document.body.className.replace("light","dark");
        localStorage.setItem('theme', 'dark')
    }
    else{
        console.log('theme set:', Theme)
        document.getElementById("imgClickAndChange").src = "https://img.icons8.com/ios-filled/50/000000/bat.png";
        document.body.className = document.body.className.replace("dark","light");
        localStorage.setItem('theme', 'light')
    }
}

function changeImage() {
    if (Theme=='light'){
        Theme = 'dark'
        console.log('theme set:', Theme)
        document.getElementById("imgClickAndChange").src ="https://img.icons8.com/fluency/48/000000/iron-man.png";
        document.body.className = document.body.className.replace("light","dark");
        localStorage.setItem('theme', 'dark')
    }
    else{
        Theme = 'light'
        console.log('theme set:', Theme)
        document.getElementById("imgClickAndChange").src = "https://img.icons8.com/ios-filled/50/000000/bat.png";
        document.body.className = document.body.className.replace("dark","light");
        localStorage.setItem('theme', 'light')
    }
}