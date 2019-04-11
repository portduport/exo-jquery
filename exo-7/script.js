console.log("exercice 7");

function getData() {
    return data;  // data is defined in DATA.js file
}

// Pagination function for the table STARTS HERE

function showPagination() {
    var table = '#contact';
    $('.pagination').html('');
    var trnum = 0;
    var maxRows = parseInt($('#maxRows').val());
    var totalRows = $(table + ' tbody tr').length;
    $(table + ' tr:gt(0):visible').each(function () {
        trnum++;
        if (trnum > maxRows) {
            $(this).hide();
        } else {
            $(this).show();
        }
    });
    if (totalRows > maxRows) {
        var pagenum = Math.ceil(totalRows / maxRows);
        for (var i = 1; i <= pagenum;) {
            $('.pagination').append('<li class ="page-item" data-page="' + i + '">\<a class="page-link">' + i++ + '</a>\</li>').show();
        }
    }
    $('.pagination li:first-child').addClass('active');
    $('.pagination li').on('click', function () {
        var pageNum = $(this).attr('data-page');
        var trIndex = 0;
        $('.pagination li').removeClass('active');
        $(this).addClass('active');
        $(table + ' tr:gt(0)').each(function () {
            trIndex++;
            if (trIndex > (maxRows * pageNum) || trIndex <= ((maxRows * pageNum) - maxRows)) {
                $(this).hide();
            } else {
                $(this).show();
            }
        })
    })
}

function showDATA() {
    $('#donnesHERE').find('tr').remove();
    $.each(data, function (index, value) {
        let $trCreate = $('<tr>');
        for (let register in value) {
            if (register === 'phone') {
                let $tdCreate = $('<td>');
                $tdCreate.text(value[register]);
                $tdCreate.appendTo($trCreate);
            } else if (typeof value[register] === 'object') {
                let $tdCreate = $('<td>');
                $tdCreate.text(value[register].first);
                $tdCreate.appendTo($trCreate);
                let $tdCreateSecond = $('<td>');
                $tdCreateSecond.text(value[register].last);
                $tdCreateSecond.appendTo($trCreate);
            } else if (register === 'email') {
                let $tdCreate = $('<td>');
                $tdCreate.text(value[register]);
                $tdCreate.appendTo($trCreate);
            }
        }
        let $tdCreate = $('<td>');
        $tdCreate.html('<button type="button" class="btn btn-danger remove">Remove</button>');
        $tdCreate.appendTo($trCreate);
        $trCreate.appendTo('#donnesHERE');
    });
}


$(document).ready(function () {

    var baseID = data.length;

    showDATA();

    // Remove lines STARTS HERE
    $('.remove').on('click', (event) => {
        $(event.currentTarget).closest('tr').remove();
});


// Adding a new contact STARTS HERE
$("#addRow").on('click', function () {
    let newID = baseID + 1;
    let newContact = {
        id: newID,
        name:
            {
                first: $("#InputPrenom").val(),
                last: $("#InputNom").val()
            },
        email: $("#InputEmail").val(),
        gender: $("#GenreSelect").val(),
        phone: $("#InputPhone").val(),
        country: $("#CountrySelect").val()
    };
    data.push(newContact);
    console.log(newContact);
    console.log(data);
    $('#donnesHERE').find('tr').remove();
    showDATA();
});

// Our pagination starter

$('#maxRows').on('change', function () {
    showPagination()
});


// Our Search an filter STARTS HERE
var $rows = $('tbody tr');
var $searchResult = [];
$('#search').keyup(function () {
    $searchResult = [];
    var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
        reg = RegExp(val, 'i'),
        text;
    console.log(reg);
    console.log(reg.test(text));
    // buscar en data la busqueda y devolver solo las filas que corresponden
    // $rows.show().filter(function () {
    //     let hide = true;
    //     $(this).find('td').each(function () {
    //         text = $(this).text().replace(/\s+/g, ' ');
    //         if (reg.test(text)) {
    //             hide = false;
    //             $searchResult.push(text);
    //             console.log($searchResult);
    //         }
    //     });
    //     return hide;
    // }).hide();
    showPagination();
});

// Sort the name table STRATS HERE
var $table = $("#contact");
var $tableBody = $table.find("#donnesHERE");
var rows, sortedRows, NomAZ, NomZA, sortAscendingNom;
var $buttons = $("th a");

function cmp(a, b) {
    NomAZ = $(a).find('td:first-child').text().toLowerCase();
    NomZA = $(b).find('td:first-child').text().toLowerCase();
    if (NomAZ < NomZA) {
        return (sortAscendingNom) ? -1 : 1
    } else if (NomAZ > NomZA) {
        return (sortAscendingNom) ? 1 : -1
    } else {
        return 0
    }
}

function updateData() {
    $tableBody.remove('tr');
    $tableBody.append(sortedRows);
}

$buttons.click(function () {
    rows = $tableBody.find("tr");
    if ($(this).attr('id') === 'sortAscendingNom') {
        sortAscendingNom = true
    } else if ($(this).attr('id') === 'sortDescendingNom') {
        sortAscendingNom = false
    }
    sortedRows = rows.sort(cmp);
    updateData();
});

// Export as CSV

function exportTableToCSV($table, filename) {

    var $rows = $table.find('tr:has(td)'),

        // Temporary delimiter characters unlikely to be typed by keyboard
        // This is to avoid accidentally splitting the actual contents
        tmpColDelim = String.fromCharCode(11), // vertical tab character
        tmpRowDelim = String.fromCharCode(0), // null character

        // actual delimiter characters for CSV format
        colDelim = '","',
        rowDelim = '"\r\n"',

        // Grab text from table into CSV formatted string
        csv = '"' + $rows.map(function (i, row) {
            var $row = $(row),
                $cols = $row.find('td');

            return $cols.map(function (j, col) {
                var $col = $(col),
                    text = $col.text();

                return text.replace(/"/g, '""'); // escape double quotes

            }).get().join(tmpColDelim);

        }).get().join(tmpRowDelim)
            .split(tmpRowDelim).join(rowDelim)
            .split(tmpColDelim).join(colDelim) + '"';

    // Deliberate 'false', see comment below
    if (false && window.navigator.msSaveBlob) {

        var blob = new Blob([decodeURIComponent(csv)], {
            type: 'text/csv;charset=utf8'
        });

        // Crashes in IE 10, IE 11 and Microsoft Edge
        // See MS Edge Issue #10396033
        // Hence, the deliberate 'false'
        // This is here just for completeness
        // Remove the 'false' at your own risk
        window.navigator.msSaveBlob(blob, filename);

    } else if (window.Blob && window.URL) {
        // HTML5 Blob
        var blob = new Blob([csv], {
            type: 'text/csv;charset=utf-8'
        });
        var csvUrl = URL.createObjectURL(blob);

        $(this)
            .attr({
                'download': filename,
                'href': csvUrl
            });
    } else {
        // Data URI
        var csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);

        $(this)
            .attr({
                'download': filename,
                'href': csvData,
                'target': '_blank'
            });
    }
}

// This must be a hyperlink
$(".export").on('click', function (event) {
    // CSV
    var args = [$('#home>table'), 'export.csv'];

    exportTableToCSV.apply(this, args);

    // If CSV, don't do event.preventDefault() or return false
    // We actually need this to be a typical hyperlink
});

// END
})
;



