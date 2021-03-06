const controller = require('../controller/networkController')

module.exports = function(app) {

	app.route('/networks')
		.get(controller.listAllNetworks);

	app.route('/networks/:id')
		.get(controller.readNetworkStation);

	app.route('/networks/:id/stations/:idStation')
		.patch(controller.updateAvailableSlots);
		
	app.route('/networks/:id/stations/:idStation/report/status')		
		.patch(controller.updateStatusLocationCount);

	app.route('/networks/:id/stations/:idStation/report/safe')
		.patch(controller.updateSafeLocationCount);

	app.route('/networks/:id/stations/:idStation/review')
		.put(controller.updateReview);

};