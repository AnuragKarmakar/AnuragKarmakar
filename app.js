
var myEmail = 'anurag.karmakar222@gmail.com'
var projectCount = 28;





document.getElementById("nav-mail").innerHTML = myEmail

function myScroll() {
    document.addEventListener('click', function (e) {


        e = e || window.event
        var target = e.target

        if (document.getElementById("navList").contains(target)) {

            text = target.textContent || target.innerText;
            text = text.toLowerCase();
            //console.log(text)

            let targ = document.getElementById(text + "-section")
            if (targ != null) {
                if (text == 'home') {
                    window.scrollTo(0, 0)
                }
                else {
                    targ.scrollIntoView()
                }
            }
        }
    }, false);

}




//Populate a List from array

var navList = ["Home", "About", "Skills", "Projects", "Contact"]
var list = document.getElementById("navList")
var list2 = document.getElementById("navList2")

let childs = list.children


for (i = 0; i < navList.length; i++) {
    let li = document.createElement('li')
    li.innerText = navList[i]
    list.appendChild(li);
}

for (i = 0; i < navList.length; i++) {
    childs[i].onclick = myScroll();
}


let projectCountDisplay = document.getElementById('projectCount')
let x = 0;

setInterval(() => {
    if (x <= projectCount) {
        projectCountDisplay.textContent = parseInt(x++)
    }
}, 50)

var skillbar = document.getElementsByClassName('skillbar')


const know = document.getElementsByClassName('knowWindow')
const inflatebtn = document.getElementById('know')

inflatebtn.onclick = () => {



    know[0].classList.toggle('show')


    if (inflatebtn.innerHTML.match('Know More')) {
        inflatebtn.innerHTML = 'Close'
        window.scrollTo(0, document.body.scrollHeight);
    }
    else {
        inflatebtn.innerHTML = 'Know More'

    }

}

const mailTag = document.getElementById('mailTag')






function linkOpener(link) {
    window.open (link,'_blank');
}






