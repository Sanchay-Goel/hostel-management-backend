const Sequelize = require('sequelize');
const sequelize = require('..');

const HostelDetails = sequelize.define(
    'hs_hostel_details', 
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        hostel_name: {
            type: Sequelize.STRING
        },
        block_name: {
            type: Sequelize.STRING
        },
        room_in_floor0: Sequelize.INTEGER,
        room_in_floor1: Sequelize.INTEGER,
        room_in_floor2: Sequelize.INTEGER,
        room_in_floor3: Sequelize.INTEGER,
        room_in_floor4: Sequelize.INTEGER,
        room_in_floor5: Sequelize.INTEGER,
        room_in_floor6: Sequelize.INTEGER,
        room_in_floor7: Sequelize.INTEGER,
        room_in_floor8: Sequelize.INTEGER,
        room_in_floor9: Sequelize.INTEGER,
        room_in_floor10: Sequelize.INTEGER,
        room_in_floor11: Sequelize.INTEGER,
        room_in_floor12: Sequelize.INTEGER,
        room_in_floor13: Sequelize.INTEGER,
        room_in_floor14: Sequelize.INTEGER,
        status: {
            type: Sequelize.ENUM('Active', 'Inactive'),
            defaultValue: 'Active'
        },
        modify_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        is_deleted: Sequelize.BOOLEAN,
    }, 
    {
        tableName: 'hs_hostel_details',
        timestamps: false
    }
);
HostelDetails.sync();

module.exports = {
    HostelDetails
}