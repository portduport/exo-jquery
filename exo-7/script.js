console.log("exercice 7");

function getData() {
    return data;  // data is defined in DATA.js file
}
function showPagination(){
    var table = '#contact';
    $('.pagination').html('');
    var trnum = 0;
    var maxRows = parseInt($('#maxRows').val());
    var totalRows = $(table + ' tbody tr:visible').length;
    $(table + ' tr:gt(0):visible').each(function () {
        trnum++;
        if (trnum > maxRows) {
            $(this).hide();
        } else {
            $(this).show();
        }
    })
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

$(document).ready(function () {
//   data.forEach(function (data) {
//     $('#donnesHERE').append('tr').append('td').text('mierda');
// });
    $.each(data, function (index, value) {
        let $trCreate = $('<tr>');
        //console.log(value);
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
        $trCreate.appendTo('#donnesHERE');
    });

    // Our pagination start here

    var table = '#contact';
    $('#maxRows').on('change', function () {
        showPagination()
    });
    // $(function () {
    //     $('table tr:eq(0)').prepend('<th>ID</th>');
    //     var id = 0;
    //     $('table tr:gt(0)').each(function () {
    //         id++;
    //         $(this).prepend('<td>' + id + '</td>');
    //     })
    // })

    // Our Search an filter
    var $rows = $('tbody tr');
    $('#search').keyup(function() {

        var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
            reg = RegExp(val, 'i'),
            text;

        $rows.show().filter(function() {
            let hide=true;
            $(this).find('td').each(function(){
                text = $(this).text().replace(/\s+/g, ' ');
                if(reg.test(text)){
                    hide=false;
                }
            });
            return hide;
        }).hide();
        showPagination();
    });

    // Sort the name table
    var $table = $("#contact");
    var $tableBody = $table.find("#donnesHERE");
    var rows, sortedRows, NomAZ, NomZA, PrenomAZ, PrenomZA, sortAscendingNom, sortAscendingPrenom;
    var $buttons = $("th a");

// one function to handle both ascending and descending sorts
    function cmp(a, b) {
        NomAZ = $(a).find('td:first-child').text();
        NomZA = $(b).find('td:first-child').text();
        if (NomAZ < NomZA) { return (sortAscendingNom) ? -1 : 1 }
        else if (NomAZ > NomZA) { return (sortAscendingNom) ? 1 : -1 }
        else { return 0 }
    }

    function cmprenom(a, b) {
        PrenomAZ = $(a).find('td:first-child').text();
        PrenomZA = $(b).find('td:first-child').text();
        if (PrenomAZ < PrenomZA) { return (sortAscendingPrenom) ? -1 : 1 }
        else if (PrenomAZ > PrenomZA) { return (sortAscendingPrenom) ? 1 : -1 }
        else { return 0 }
    }

    function updateData() {
        $tableBody.remove('tr');
        $tableBody.append(sortedRows);
    }

    $buttons.click(function() {
        rows = $tableBody.find("tr");
        if ($(this).attr('id') === 'sortAscendingNom') { sortAscendingNom = true }
        else if ($(this).attr('id') === 'sortDescendingNom') { sortAscendingNom = false }
       // if ($(this).attr('id') === 'sortDescendingPrenom') { sortAscendingPrenom = true }
        //else if ($(this).attr('id') === 'sortDescendingPrenom') { sortAscendingPrenom = false }
        sortedRows = rows.sort(cmp);
        //sortedRows = rows.sort(cmprenom);
        updateData();
    })

// END
});

// function addLineToTable(data) {
//   for (let i = 0; i < data.length; i++) {
//     $('#donnesHERE').append('tr').append('td').text('mierda');
//
//     // for (let donne in data) {
//     // }
//   }
// }
// addLineToTable(data);

