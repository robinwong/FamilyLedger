$(document).ready(function() {

    var $_GET = getQueryParams(document.location.search);

    $("#googleformid").append($_GET["gf"]);
    $("form").attr("action", getFormResponseUrl($_GET["gf"]));

    $("#googlespreadsheetid").append($_GET["gs"]);

    $("#FormUrl").attr("href", getFormResponseUrl($_GET['gf']));
    $("#SpreadSheetUrl").attr("href", getSpreadSheetUrl($_GET['gs']));

    $("input[name='entry.275449649']").val($_GET["entry.275449649"]);

    $("div[role='button']").append($("<input id='submitbutton'></input>").attr("type", "button"));
    $("#submitbutton").click(function() {
        alert($("input[type='date']").val())
    });

    //$("dvi[role='listbox']")

    // https://stackoverflow.com/questions/6040515/how-do-i-get-month-and-date-of-javascript-in-2-digit-format
    //var current = new Date(); // can also use moment.js
    //alert(current.toISOString());
    //$("input[type='date']").val(current.toISOString().substr(0, 10));
    //$("input[type='time']").val(current.toISOString().substr(11,8));
    var current = moment();
    $("input[type='date']").val(current.format("YYYY-MM-DD"));
    $("input[type='time']").val(current.format("HH:mm"));
});

function getQueryParams(qs) { // https://stackoverflow.com/questions/439463/how-to-get-get-and-post-variables-with-jquery
    qs = qs.split("+").join(" ");
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

function getFormResponseUrl(formID) {
    return "https://docs.google.com/forms/d/e/" + formID + "/formResponse"
}

function getSpreadSheetUrl(SpreadSheetID) {
    return "https://docs.google.com/spreadsheets/d/" + SpreadSheetID + "/edit"
}

function getCurrentDate() {
    var currentdate = new Date(); 
    var datetime = "Now: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

    return(datetime);
}