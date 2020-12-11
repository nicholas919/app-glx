const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addModeratorRole = functions.https.onCall((data, context) => {
	return admin.auth().getUserByEmail(data.email).then(user => {
		return admin.auth().setCustomUserClaims(user.uid, {
			moderator: true
		})
	}).then(() => {
		return {
			message: `Success! ${data.email} has been made an moderator`
		}
	}).catch(err => {
		return err;
	})
})

exports.addAdminRole = functions.https.onCall((data, context) => {
	return admin.auth().getUserByEmail(data.email).then(user => {
		return admin.auth().setCustomUserClaims(user.uid, {
			adminKantor: true
		})
	}).then(() => {
		return {
			message: `Success! ${data.email} has been made an admin kantor`
		}
	}).catch(err => {
		return err;
	})
})

exports.addMemberRole = functions.https.onCall((data, context) => {
	return admin.auth().getUserByEmail(data.email).then(user => {
		return admin.auth().setCustomUserClaims(user.uid, {
			member: true
		})
	}).then(() => {
		return {
			message: `Success! ${data.email} has been made a member`
		}
	}).catch(err => {
		return err;
	})
})

exports.removeRole = functions.https.onCall((data, context) => {
	return admin.auth().getUserByEmail(data.email).then(user => {
		return admin.auth().setCustomUserClaims(user.uid, {
			member: false,
			adminKantor: false
		})
	}).then(() => {
		return {
			message: `Success! ${data.email} has been remove its role`
		}
	}).catch(err => {
		return err;
	})
})	