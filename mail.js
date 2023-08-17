
var form = document.getElementById("contactForm");
function sendMail(event) {
    event.preventDefault();
    let body = document.getElementById('message').value
    let name = document.getElementById('contactEmail').value

    if (name.length <= 2) {
        window.alert("Please enter a valid name")
        return
    } else {

        var subject = `${name} wants to connect`


        const url = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + myEmail + '&su=' + subject + "&body=" + body
        //document.getElementById("contactForm").action = url;
        // console.log(body);
        // console.log(url)
        let conf = confirm("Are you sure? this will create a mail to be sent")
        if (conf) {
            window.open(url, '_blank');
            form.reset()
        } else {
            return
        }
    }
}


form.addEventListener('submit', sendMail);

