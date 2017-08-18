const mongoose = require('mongoose');
const Network = mongoose.model('Networks');
const NetworkStation = mongoose.model('NetworksStations');

class NetworkController {

	static listAllNetworks(req, res) {
		Network
		.find({})
		.then((data) => {
			res.json(data);
		}).catch((err) => {
			res.send(err);
		});
	}

	static readNetworkStation(req, res) {
		NetworkStation
		.find({
			id: req.params.id
		}).then((data) => {
			res.json(data);
		}).catch((err) => {
			res.send(err);
		});
	} 

	static updateAvailableSlots(req, res) {
        NetworkStation
        .findOneAndUpdate({
            id: req.params.id,
            'stations.id': req.params.idStation
        }, {
            $set: {
                'stations.$.empty_slots': req.body.empty_slots,
                'stations.$.free_bikes': req.body.free_bikes
            }
        }, {
            new: true
        }).then((data) => {
            res.json(data);
        }).catch((err) => {
            res.send(err);
        });
	}

	static updateStatus(req, res) {
        NetworkStation
        .findOneAndUpdate({
            id: req.params.id,
            'stations.id': req.params.idStation
        }, {
            $set:{
                'stations.$.report.count': req.body.count
            }
        }, {
            new: true
        }).then((data) => {
            res.json(data);
        }).catch((err) => {
            res.send(err);
        });
    }
	
}

module.exports = NetworkController;