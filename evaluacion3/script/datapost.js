$(document).ready(function () {
    $('#example').DataTable({
    ajax:{
        url:'https://jsonplaceholder.typicode.com/posts',
        dataSrc:''
    },
    columns:[
        {name:'id',data:'id'},
        {name:'Nombre',data:'title'},
        {name:'Usuario',data:'body'},
    ],

    language:{
        "emptyTable":"No hay datos disponibles",
        "search":"B&uacute;squeda: ",
        "info": "Mostrando _START_ al _END_ de _TOTAL_ datos",
        "infoFiltered":   "(filtrado de un total de _MAX_ datos)",
        "lengthMenu": 'Mostrar _MENU_ registros por p&aacute;gina',
        "loadingRecords": "Cargando...",
        "zeroRecords":    "No se han encontrado resultados",
        "infoEmpty":      "Mostrando 0 al 0 de 0 datos",
        "paginate": {
        "first":      "Primero",
        "last":       "&Uacute;ltimo",
        "next":       "Siguiente",
        "previous":   "Anterior"
    },
    }
    });
});
