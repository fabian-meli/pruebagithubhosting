function logLifecycleEvent(event) {
    if (event.type) {
        var eventName = event.type
    } else {
        var eventName = event
    }

    console.log("New LifecycleEvent: "+eventName)
}

function makeRequest(url, callback, method = "GET") {

    var http_request = false;

    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/xml');
        }
    } else if (window.ActiveXObject) { // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }

    if (!http_request) {
        return false;
    }
    http_request.onreadystatechange = function (){
       if(http_request.readyState === 4){
           callback(http_request.responseText, http_request.status);
       }
    };
    http_request.open(method, url, true);
    http_request.send();
}

logLifecycleEvent("Start Logging Lifecycle")

window.addEventListener("DOMContentLoaded", () => logLifecycleEvent("DOMContentLoaded"), false);

window.addEventListener("GlobalState.shown", (event) => logLifecycleEvent(event), false);
window.addEventListener("GlobalState.hidden", (event) => logLifecycleEvent(event), false);
window.addEventListener("GlobalState.error", (event) => logLifecycleEvent(event), false);
window.addEventListener("PageState.ready", (event) => logLifecycleEvent(event), false);
window.addEventListener("PointPayment.Success", (event) => logLifecycleEvent(event), false);
window.addEventListener("PointPayment.Error", (event) => logLifecycleEvent(event), false);
