var contactModal ='<!-- Modal -->'+
	'<div id="contactMe" class="modal fade" role="dialog">'+
	  '<div class="modal-dialog">'+

	    '<!-- Modal content-->'+
	    '<div class="modal-content">'+
	      '<div class="modal-header">'+
	        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
	        '<h4 class="modal-title">Contact Me</h4>'+
	      '</div>'+
	      '<div class="modal-body center-block text-center">'+
	      	'<div class="center-block">'+
	      	'<i class="fa fa-envelope-o" style="font-size: 4rem; line-height: 1;"></i><br><br>'+
	        '<quote>You can reach me at<br><span class="mail">xihongtina.liu@gmail.com</span></quote>'+
	        '<div class="spacer-small"></div>'+
	        '</div>'+
	      '</div>'+
	    '</div>'+
	  '</div>'+
	'</div>';

$(document).ready(function() {
	$('body').append(contactModal);
});