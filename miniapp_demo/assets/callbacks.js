function callback_payment_success(data) {
    callback_payment_result("<h2 class=\"bg-success text-white p-3 m-0 d-block\">Payment success by function <span id='countdown'></span></h2>", data);
}

function callback_payment_error(data) {
    callback_payment_result("<h2 class=\"bg-danger text-white p-3 m-0 d-block\">Payment error by function <span id='countdown'></span></h2>", data)
}

window.addEventListener("PointPayment.Success", (event) => {
    callback_payment_result("<h2 class=\"bg-success text-white p-3 m-0 d-block\">Payment success by event <span id='countdown'></span></h2>", event.detail);
});

window.addEventListener("PointPayment.Error", (event) => {
    callback_payment_result("<h2 class=\"bg-danger text-white p-3 m-0 d-block\">Payment error by event <span id='countdown'></span></h2>", event.detail);
});

function callback_payment_result(title, data) {

    let keys = Object.keys(data);
    let outputHtml = title + "<table class=\"table table-striped\"><thead><tr><th scope=\"col\">#</th><th scope=\"col\">Param</th><th scope=\"col\">Value</th></tr></thead><tbody id=\"data\">";
    let i = 0;
    let countdown = 10;

    for (let key of keys) {
        outputHtml += "<tr><td>" + (1 + i) + "</td>" + "<td>" + key + "</td><td>" + data[key] + "</td></tr>";
        i++;
    }

    outputHtml += "</tbody></table>";

    document.getElementById("callback-result").innerHTML = outputHtml;

    setInterval(() => {
        countdown -= 1;
        if (countdown <= 0) {
            return clearInterval(this);
        }
        document.getElementById("countdown").innerHTML = "(" + countdown + ")";
    }, 1000);

    setTimeout(() => {
        document.getElementById("callback-result").innerHTML = "";
    }, countdown * 1000);
}