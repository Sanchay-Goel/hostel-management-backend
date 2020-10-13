const Sequelize = require('sequelize');
const sequelize = require('../../Models');

const HostelRooms = sequelize.define(
    'hostel_rooms', 
    {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        floor: {
            type: Sequelize.INTEGER
        },
        room_number: {
            type: Sequelize.STRING
        },
        bed_number: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        empty: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        }
    }, 
    {
        tableName: 'hostel_rooms',
        timestamps: false
    }
);

module.exports = {
    HostelRooms
}