var d = new Date()

weekdays = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var weekday = weekdays[d.getDay()]

function showbannerad() {
    if (d.getDay() === 5) {
        document.getElementById("bannerad").style.visibility = "visible";
    }
else{
    document.getElementById('banner').style.display = 'none';
	}
//if (d.getDay() === 5) {
//    document.getElementById("bannerad").hidden = false;
//}
