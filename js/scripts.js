

function iframe_swap(hide, show){
	hider = $(hide);
	shower = $(show);
	hider.css('display', 'none');
	shower.css('display', 'block');
	console.log('test');

}

function onSubmit(form) {
  
  const password = form.token || form.querySelector('#password').value;

  if (password == 'Fuck12'){
  	$('#body_tag').css('display', 'block');
  	$('#loginForm').css('display', 'none');
  	console.log(password);
  } else {
  	window.location.reload();
  }
}