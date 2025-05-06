var bluetoothIsOn = false;
var bluetoothIsDiscovering = false;
var bluetoothDeviceIdPairing = "";

function bluetoothIgnitionAction(action, callback = undefined) {
    MobileWebKit.executeNative(
        {
            "method": 'bluetooth_enable',
            "args": {"action": action},
            "callback": (callback === undefined) ? callbackResult : callback
        }
    )
}

function bluetoothPairRequest(id, callback = undefined) {

    bluetoothDeviceIdPairing = id;

    MobileWebKit.executeNative(
        {
            "method": 'bluetooth_pair_request',
            "args": {
                "id": id
            },
            "callback": callback
        }
    )
}

function bluetoothUnpair(id, callback = undefined) {

    bluetoothDeviceIdPairing = id;

    MobileWebKit.executeNative(
        {
            "method": 'bluetooth_unpair',
            "args": {
                "id": id
            },
            "callback": callback
        }
    )
}

function bluetoothStatus(callback = undefined) {
    MobileWebKit.executeNative(
        {
            "method": 'bluetooth_status',
            "args": {},
            "callback": callback
        }
    )
}

function bluetoothDevices(state, callback = undefined) {
    MobileWebKit.executeNative(
        {
            "method": 'bluetooth_devices',
            "args": {"state": state},
            "callback": callback
        }
    )
}


function showIgnitionLoading() {
    document.getElementById("btnTurn_on").checked = false;
    document.getElementById("btnTurn_off").checked = false;
    document.getElementById("ignitionLoader").style.display = "inline-block";
}

function setIgnitionStatus(status) {
    document.getElementById("btnTurn_" + status).checked = true;
    document.getElementById("ignitionLoader").style.display = "none";
}

setTimeout(() => {
    bluetoothStatus(function (isOn, error) {
        bluetoothIsOn = isOn;
        onBluetoothChangeSwitch();
        setIgnitionStatus((isOn) ? "on" : "off");
    });
    bluetoothDevices("paired", callbackResultPairedDevices);
}, 2000);

function handleChangeIgnition(src) {

    showIgnitionLoading();

    bluetoothIgnitionAction(src.value, function (result, error) {
        if (result === "success") {
            if (src.value === "on") {
                document.getElementById("btnTurn_on").checked = true;
                document.getElementById("btnTurn_off").checked = false;
            } else {
                document.getElementById("btnTurn_on").checked = false;
                document.getElementById("btnTurn_off").checked = true;
            }
        } else {
            if (src.value === "on") {
                document.getElementById("btnTurn_on").checked = true;
                document.getElementById("btnTurn_off").checked = false;
            } else {
                document.getElementById("btnTurn_on").checked = false;
                document.getElementById("btnTurn_off").checked = true;
            }
        }
        document.getElementById("ignitionLoader").style.display = "none";
    });
}

function callbackResultDetection(result, error) {

    let status = result["status"];
    let devices = result["devices"];

    console.log("status: " + status + ", devices:" + JSON.stringify(devices));

    if (status === "FINISHED") {
        bt_renderDevices(devices);
        bt_showStartDiscovering();
    }
}

function onClickStartDiscovery() {

    bluetoothIsDiscovering = !bluetoothIsDiscovering;

    if (bluetoothIsDiscovering) {
        // Discovering...
        bt_showDiscovering();

        document.getElementById("containerListDevicesFounded").innerHTML = "";

        bluetoothDevices("all", callbackResultDetection);
        return;
    }
    // Start discovery
    bt_showStartDiscovering();
    document.getElementById("containerListDevicesFounded").innerHTML = "";
}

function onBluetoothChangeSwitch() {
    if (bluetoothIsOn) {
        document.getElementById("buttonDetection").removeAttribute("disabled");
    } else {
        document.getElementById("buttonDetection").setAttribute("disabled", "disabled");
    }
}

function bt_showDiscovering() {
    document.getElementById("labelButtonDetection").innerText = "Discovering...";
    document.getElementById("detectionLoader").style.display = "inline";
}

function bt_showStartDiscovering() {
    document.getElementById("labelButtonDetection").innerText = "Start discovery";
    document.getElementById("detectionLoader").style.display = "none";
}

function bt_callbackPair(result, error) {
    console.log("PAIR RESULT: " + JSON.stringify(result) + " ERROR: " + JSON.stringify(error));
    if (result === "success") {
        document.getElementById("device-" + bluetoothDeviceIdPairing).remove();
        setTimeout(function () {
            bluetoothDevices("paired", callbackResultPairedDevices);
        }, 2000);
    }
}

function bt_callbackUnPair(result, error) {
    console.log("UNPAIR RESULT: " + JSON.stringify(result) + " ERROR: " + JSON.stringify(error));
    if (result === "success") {
        document.getElementById("device-" + bluetoothDeviceIdPairing).remove();
        setTimeout(function () {
            bluetoothDevices("paired", callbackResultPairedDevices);
        }, 2000);
    }
}

function bt_renderDevices(devices) {
    let outputHtml = "";
    for (var i = 0; i < devices.length; i++) {
        var device = devices[i];
        outputHtml += "<li class=\"list-group-item d-flex\" id='device-" + device["id"] + "'><div class=\"ms-2 me-auto\"><div class=\"fw-bold\">" + device["name"] + "</div>" + device["address"] + "<span class=\"badge bg-secondary d-block\">" + device["id"] + "</span></div><button class=\"btn btn-primary btn-sm\" onclick=\"bluetoothPairRequest('" + device["id"] + "', bt_callbackPair)\"><i class=\"far fa-handshake\"></i> Pair</button></li>";
    }
    document.getElementById("containerListDevicesFounded").innerHTML = outputHtml;
}

function callbackResultPairedDevices(devices, error) {
    console.log("callbackResultPairedDevices: " + JSON.stringify(devices));
    if (devices.length === 0) {
        document.getElementById("messageNotDevicesPaired").style.display = "block";
        return;
    }
    let outputHtml = "";
    document.getElementById("messageNotDevicesPaired").style.display = "none";
    for (var i = 0; i < devices.length; i++) {
        var device = devices[i];
        outputHtml += "<li class=\"list-group-item d-flex\" id='device-" + device["id"] + "'><div class=\"ms-2 me-auto\"><div class=\"fw-bold\">" + device["name"] + "</div>" + device["address"] + "</div><button class=\"btn btn-primary btn-sm\" onclick=\"bluetoothUnpair('" + device["id"] + "', bt_callbackUnPair)\"><i class=\"fas fa-unlink\"></i> Unpair</button></li>";
    }
    document.getElementById("containerListDevicesPaired").innerHTML = outputHtml;
}

function getPrinterDevices(callback = undefined) {
    MobileWebKit.executeNative({
        "method": 'bluetooth_printer_devices',
        "args": {},
        "callback": callback
    })
}

function printData(data, printerDeviceId) {
    MobileWebKit.executeNative({
        "method": 'bluetooth_print',
        "args": {
            "id": printerDeviceId,
            "data": data
        },
        "callback": function (result, error) {
            console.log("Print Result: " + result + ", Error:" + error);
        }
    })
}

function onClickPrintData() {
    getPrinterDevices((devices) => {
        console.log(devices)
        var device = devices[0];
        var data = document.getElementById("inputPrintData").value;
        console.log("(" + device["id"] + ") Print Data: " + data);
        printData(data, device["id"]);
    })
}
