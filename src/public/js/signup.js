console.log("Signup frontend javascript file");

// $(function () {
//     $(".member-nick").click(function () {
//         $(".member-phone").toggle();
//     });
// })


function validateSignupForm() {
    const memberNick = $(".member-nick").val();
    const memberPhone = $(".member-phone").val();
    const memberPassword = $(".member-password").val();
    const confirmPassword = $(".confirm-password").val();

    if (memberNick === '' || memberPhone === '' || memberPassword === '' || confirmPassword === '') {
        alert("Please fill out all required inputs")
        return false;
    }
    if (memberPassword !== confirmPassword) {
        alert("Passwords differs, please chech again");
        return false
    }

}
