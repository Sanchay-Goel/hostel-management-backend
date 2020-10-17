const Sequelize = require('sequelize');
const sequelize = require('../../Models');

const HostelRooms = sequelize.define(
    'hostel_rooms', 
    {
        id: {
            type: Sequelize.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        hostel_detail_id: Sequelize.INTEGER,
        floor: Sequelize.STRING,
        room_name: Sequelize.STRING,
        no_of_bed: Sequelize.INTEGER,
        modify_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        is_deleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    }, 
    {
        tableName: 'hostel_rooms',
        timestamps: false
    }
);
HostelRooms.sync();

module.exports = {
    HostelRooms
}