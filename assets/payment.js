const CREDIT = "credit_card";
const DEBIT = "debit_card";
const QR = "qr";
const VOUCHER_CARD = "voucher_card";
const LINK = "link";
const POINT = "point";
const CASH = "cash";
const taxesValue = "document.getElementById('taxes') ? document.getElementById('taxes').value : ''";

function getAvailablePaymentMethods() {
	console.log("before getPaymentMethods");
	getPaymentMethods(callbackResult);
};

function callbackResult(result, error) {

	var menu_payment_method = document.getElementById("menu_payment_method");

	var textMap = new Map([
		[CREDIT	, "Credit card"],
		[DEBIT	, "Debit card" ],
		[VOUCHER_CARD , "Voucher"],
		[QR		, "QR"],
		[LINK	, "Link"],
		[POINT	, "Point"],
        [CASH, "Cash"]
	]);

	var iconsMap = new Map([
		[CREDIT	, "far fa-credit-card"],
		[DEBIT	, "far fa-credit-card" ],
		[VOUCHER_CARD, "far fa-credit-card" ],
		[QR		, "fas fa-qrcode"],
		[LINK	, "fas fa-link"],
		[POINT	, "far fa-credit-card"],
        [CASH, "fas fa-money-bill"]
	]);

	for (var item in result) {

		var methodId = result[item];
		console.log("option: " + methodId);

		var button = document.createElement("a");
		button.href = "#";
		button.id = methodId;
		button.setAttribute("class", "btn btn-primary btn-lg d-block mt-2");
        button.setAttribute("onclick", `openPaymentMethod(document.getElementById('amount').value, document.getElementById('description').value, '${methodId}', ${taxesValue})`);
		button.innerHTML = "<i class='" + iconsMap.get(methodId) + "'></i> " + textMap.get(methodId);

		menu_payment_method.appendChild(button)
    }

    document.getElementById("spinner_payment_method").style.display = "none";
}

function openPaymentMethod(amount, description, method, taxes) {
	console.log("before launchPaymentMethod: " + method + " amount: " + amount + " description: "+ description+ " taxes: "+ taxes);
    window.localStorage.setItem('magicML', amount);
    var config = new PaymentConfigBuilder();
    config.setAmount(parseFloat(amount));
    config.setPaymentMethod(method)
    config.setDescription(description)
    config.setTaxes([{"payer_condition":taxes}])

    launchPaymentCallback(config, paymentResultCallback)
}

function closeResult() {
    document.getElementById("callback-result").innerHTML = "";
}

function paymentCheckExternalReferenceStatus(externalReference) {
    window.localStorage.setItem('magicML', externalReference);
    launchPaymentCheckExternalReferenceStatus(externalReference, paymentResultCallback);
}

function openPaymentFlowSimpleCallback(amount, description, printOnTerminal, taxes) {
    window.localStorage.setItem('magicML', amount);
    var config = new PaymentConfigBuilder();
    config.setAmount(parseFloat(amount));
    config.setDescription(description);
    config.setPrintOnTerminal(printOnTerminal);
    config.setTaxes([{"payer_condition":taxes}]);

    launchPaymentCallback(config, paymentResultCallback)
}

function paymentResultCallback(result, error) {
    if (error) {
        document.getElementById("callback-result").innerHTML = "<h2 class=\"bg-danger text-white p-3 m-0 d-block\">Callback Error Result <i class=\"far fa-window-close\" onclick='closeResult()'></i></h2><div class='p-2'>" + JSON.stringify(error) + "</div>";
    } else {
        document.getElementById("callback-result").innerHTML = "<h2 class=\"bg-success text-white p-3 m-0 d-block\">Callback Success Result <i class=\"far fa-window-close\" onclick='closeResult()'></i></h2><div class='p-2'>" + JSON.stringify(result) + "</div>";
    }
}
