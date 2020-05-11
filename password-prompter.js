// ------------------ CONFIGURATION -------------
var PASSWORD = 'foobar'; // put here your password to protect the page
var PROMPT_TEXT = 'Password :'; // Message to show on prompt
var WRONG_PASSWORD_ERROR_MESSAGE = 'Incorrect password. Reload the page to retry.'; // Message displayed on page when password is wrong
// -----------------------------------------

/*
 * This will delete everything inside HTML Body tag, with a message
 * and return the erased HTML content
 */
function eraseBody () {
	var bodyHTML = document.querySelector('body').innerHTML;
	
	document.querySelector('body').style = 'background: black; color: white;';
	document.querySelector('body').innerHTML = WRONG_PASSWORD_ERROR_MESSAGE;
	
	return bodyHTML;
}

/*
 * This will unset black body and replace its content with given HTML content
 */
function fillBody (htmlContent) {
	document.querySelector('body').style = '';
	document.querySelector('body').innerHTML = htmlContent;
}
	
/*
 * This will first erase body and display error message by default, 
 * then prompt the password to the user.
 * If password is correct, set the correct content on body.
 */
function initPrompter () {
	var initialBodyHTML = eraseBody();
	
	if (prompt(PROMPT_TEXT) === PASSWORD) {
		fillBody(initialBodyHTML);
	}
}
	
(function () {
	initPrompter();
})();
