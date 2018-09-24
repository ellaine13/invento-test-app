const main = (function () {

	return {
		init: function () {
			console.log('main.js loaded');
		}
	};

})();


$(document).ready(function () {
	main.init();
});