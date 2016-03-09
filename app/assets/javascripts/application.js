// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require bootstrap-select
//= require bootstrap/alert
//= require bootstrap/dropdown
//= require_tree .

$("#orders_table").DataTable({
  // "order": [[ 0, "asc" ]],
  responsive: true,
  "pageLength": 8,
  columnDefs: [
    { responsivePriority: 1, targets: 0 },
    { responsivePriority: 2, targets: -1 }
  ]
});
