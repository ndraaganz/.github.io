<script>
function sendMail(str) {
    var link = "mailto:slim.hmidi1@gmail.com" + "&subject=" + escape("This is my subject") + "&body=" + escape(str);
    location.href = link;
}
function submit_comment() {
var name = document.forms["contact_form"]["Name"].value;
var Email = document.forms["contact_form"]["Email"].value;
var Phone = document.forms["contact_form"]["Phone"].value;
var Location = document.forms["contact_form"]["Location"].value;
var Comment = document.forms["contact_form"]["Location"].value;
if((name !="Indra") && (Email !="udinlatif68@gmail.com") && (Phone !="") && (Location !="") && (Comment !="")) {
   sendMail("HELLO");
}
}
</script>