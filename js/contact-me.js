var contactModal ='<!-- Modal -->'+
	'<div id="contactMe" class="modal fade" role="dialog">'+
	  '<div class="modal-dialog">'+

	    '<!-- Modal content-->'+
	    '<div class="modal-content">'+
	      '<div class="modal-header">'+
	        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
	        '<h4 class="modal-title">Contact Me</h4>'+
	      '</div>'+
	      '<div class="modal-body center-block">'+
	      	'<div class="center-block">'+
		      	'<a class="btn stacked btn-lg link-ext" alt="Send me an e-mail" href="mailto:xihongtina.liu@gmail.com"><i class="fa fa-envelope-o"></i> E-mail me now <br></a>'+
		      	'<a class="btn stacked btn-lg link-ext" alt="Message me on Linked-In" href="https://www.linkedin.com/in/xihongtinaliu/" target="_new"><i class="fa fa-linkedin-square"></i> Message me now</a>'+
	      	'</div>'+

	      	'<div class="center-block">'+
	        '<quote>You can always reach me at<span>xihongtina.liu [at] gmail.com</span></quote>'+
	        '<div class="spacer-small"></div>'+
	        '</div>'+
	      '</div>'+
	    '</div>'+
	  '</div>'+
	'</div>';

$(document).ready(function() {
	$('body').append(contactModal);
});