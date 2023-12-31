const { Invitation } = require('../models');

const invitationData = 
[
    {
        "invitationStatus": "Yes",
        "invitationDate": "7/6/2023",
        "event_id": 1,
        "user_id": 1,
        "isHost": true
    },
    {
        "invitationStatus": "Yes",
        "invitationDate": "7/6/2023",
        "event_id": 2,
        "user_id": 1,
        "isHost": true
    },
    {
        "invitationStatus": "No",
        "invitationDate": "7/6/2023",
        "event_id": 3,
        "user_id": 1
    },
    {
        "invitationStatus": "Maybe",
        "invitationDate": "5/25/2023",
        "event_id": 1,
        "user_id": 2
    },
    {
        "invitationStatus": "Maybe",
        "invitationDate": "5/25/2023",
        "event_id": 5,
        "user_id": 2,
        "isHost": true
    },
    {
        "invitationStatus": "Yes",
        "invitationDate": "5/25/2023",
        "event_id": 4,
        "user_id": 2,
        "isHost": true
    },
    {
        "invitationStatus": "No",
        "invitationDate": "5/25/2023",
        "event_id": 1,
        "user_id": 3
    },
    {
        "invitationStatus": "No",
        "invitationDate": "1/2/2023",
        "event_id": 4,
        "user_id": 4
    },
    {
        "invitationStatus": "Maybe",
        "invitationDate": "1/2/2023",
        "event_id": 2,
        "user_id": 5
    },
    {
        "invitationStatus": "Yes",
        "invitationDate": "1/2/2023",
        "event_id": 3,
        "user_id": 5,
        "isHost": true
    }
];

const seedInvitations = () => Invitation.bulkCreate(invitationData);

module.exports = seedInvitations;