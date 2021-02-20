let age = 25;
var date = new Date();
let findYear=(d)=>{
    var output = d.getFullYear();
    console.log(output - age);
    console.log("Todays date is (dd/mm/yyyy): " + d.getDate() + " " + (d.getMonth() +1) + " " + d.getFullYear());
    if(output-age < 2000){
        console.log("Gettin' old!");
    } else {
        console.log("And the younglings too!");
    };
};
findYear(date);

