$(document).ready(function () {
    var mokData = [
        { category: "Material", id: '1', name: 'Brakedown of machine' },
        { category: "Material", id: '2', name: 'Brakedown of machine' },
        { category: "Tool", id: '3', name: 'Brakedown of machine' },
        { category: "Tool", id: '4', name: 'Brakedown of line' },
        { category: "Tool", id: '5', name: 'Brakedown of machine' },
        { category: "Tool", id: '6', name: 'Brakedown of line' },
        { category: "Tool", id: '7', name: 'Brakedown of machine' },
        { category: "Tool", id: '8', name: 'Brakedown of line' }
    ];
    $.each(mokData, function (i) {
        var templateString = '<article class="card"><h2>' + mokData[i].category + '</h2><p>' + mokData[i].name + '</p><p>' + mokData[i].id + '</p><button id="tes">Start</button></article>';
        $('#test12').append(templateString);
    })

    $("#test12").on("click", function () {
        alert("test");
    });
});
