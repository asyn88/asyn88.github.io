function validate() {
	var name = $("#name").val();
	var message = $("#message").val();
	var message = $("#message").val();
	var missing = [];
	if (name=="") {
		missing.push("name");
	}
	if (message =="") {
		missing.push("message");
	}
	if (missing.length>0) {
		$("#formerrors").html("you are missing:" + missing);
	}
}