// Command: Back
// Description: Allows you to navigate backwards. Can go back multiple screens
// Args: - Screens: The number of screens to go back, default = 1
function commandBack(screens) {
    MobileWebKit.executeNative(
        {
            "method": 'back',
            "args": {
                'screen': screens
            },
            "callback": callbackResult
        }
    )
}

// Command: Close
// Description: It allows closing the flow of the landing webview from javascript
function commandClose() {
    MobileWebKit.executeNative(
        {
            "method": 'close',
            "args": {},
            "callback": callbackResult
        }
    )
}


// Command: History
// Description: Get browsing history
function commandHistory() {
    MobileWebKit.executeNative(
        {
            "method": 'history',
            "args": {},
            "callback": callbackResult
        }
    )
}

// Command: Clear history
// Description: Clear browsing history
function commandClearHistory() {
    MobileWebKit.executeNative(
        {
            "method": 'clear_history',
            "args": {},
            "callback": callbackResult
        }
    )
}

// Command: info device
// Description: Get device info
function commandInfoDevice() {
    MobileWebKit.executeNative(
        {
            "method": 'info_device',
            "args": {},
            "callback": callbackResult
        }
    )
}

// Command: get logs
// Description: get saved log fields
function commandGetLog() {
    MobileWebKit.executeNative({
        "method": 'get_log_events',
        "args": {},
        "callback": callbackResult
    })
}

function callbackResult(result, error) {
    if (result) {
        callbackSuccess(result);
    } else {
        callbackError(error);
    }
}


function callbackSuccess(result) {
    document.getElementById("callback-result").innerHTML = "<h2 class=\"bg-success text-white p-3 m-0 d-block\">Callback Success <i class=\"far fa-window-close\" onclick='closeResult()'></i></h2><div class='p-2'>" + JSON.stringify(result) + "</div>";
}

function callbackError(result) {
    document.getElementById("callback-result").innerHTML = "<h2 class=\"bg-danger text-white p-3 m-0 d-block\">Callback Error<i class=\"far fa-window-close\" onclick='closeResult()'></i></h2><div class='p-2'>" + JSON.stringify(result) + "</div>";
}

function closeResult() {
    document.getElementById("callback-result").innerHTML = "";
}
