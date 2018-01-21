window.addEventListener('beforeunload', function(event) {
		var id = localStorage.getItem("id");
		if (id != null ){
			console.log('id=' + localStorage.getItem("id"));
			console.log('value_beforeunload=' + document.getElementById(id).value);
			console.log('value_keyboard=' + localStorage.getItem("value_keyboard"));
			
			var value = document.getElementById(id).value;
			var value_keyborad = localStorage.getItem("value_keyboard");
			if ( value != "Go" && value != "Search" && value != null){	
				console.log('1');
				localStorage.setItem('value', value);
			}
			else if ( value_keyborad != "Go" && value_keyborad != "Search" && value_keyborad != null){
				console.log('2');
				localStorage.setItem('value', value_keyborad);
			}
			else{
			console.log('3');
			 localStorage.setItem('value','undefined');
			}
		}
		
});

	
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	 if (request.greeting == "hello"){	
			console.log('hello');
			var id = localStorage.getItem("id");
			if (id != null ){
				var value = document.getElementById(id).value;
				console.log('value = '+value);
				if ( value != "Go" && value != "Search" && value && value != null){	
					console.log('value not empty = '+value);
					localStorage.setItem('value', value);
				}			
				var value = localStorage.getItem("value");
				console.log('value = '+value);
				sendResponse({farewell: value});			
			}
			else{
				sendResponse({farewell: "nimbus Gel"});
			}
	 }
	
  });  
 
 
 
function monitorInputFieldChange() {	
	
    var fields = document.getElementsByTagName('input');
    for (var f = 0; f < fields.length; f++) {
	$(fields[f]).bind("input change click",function(){
		value = this.value;
		if ( value != "Go" && value != null) {
			console.log('value keyboard change=' + value);
			id = $(this).attr('id');
			localStorage.setItem('id', id);	
			if ( value != "Go" && value != "Search" && value != null){			
			console.log('value keyboard change=' + value);
			localStorage.setItem('value_keyboard', value);		
			}
		}		
	});
	
    }
}

monitorInputFieldChange();
