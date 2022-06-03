

function solve_qaud(){
            a = $("#a_value").val();
            b = $("#b_value").val();
            c = $("#c_value").val();
    if (a == 0) {
        console.log("It is not quadratic");
        if (b == 0) {
            console.log("Bye-Bye, Tata-Tata");

        }
        else {
            x1 = -1 * c / b
            console.log(x1);
        }
    }
    else {
        d = b * b - 4 * a * c
        if (d < 0) {

            console.log("No real answer");
        }

        else {
            x1 = (-b + Math.sqrt(d)) / (2 * a)
            console.log("X1 : " + x1);

            x2 = (-b - Math.sqrt(d)) / (2 * a)
            console.log("X2 : " + x2);
        }
    }
}

function setup (){
    console.log("It works!!");
    $("#cal_quad_eq").click(solve_qaud)
}

$(document).ready(setup)
