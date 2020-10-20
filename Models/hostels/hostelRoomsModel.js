const Sequelize = require('sequelize');
const sequelize = require('../../Models');

const HostelRooms = sequelize.define(
    'hs_room_details', 
    {
        id: {
            type: Sequelize.INTEGER,
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
        tableName: 'hs_room_details',
        timestamps: false
    }
);
HostelRooms.sync();

module.exports = {
    HostelRooms
}