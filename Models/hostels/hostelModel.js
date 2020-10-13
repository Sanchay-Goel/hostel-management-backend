const Sequelize = require('sequelize');
const sequelize = require('../../Models');

const Hostel = sequelize.define(
    'hostel_details', 
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        block: {
            type: Sequelize.STRING
        },
        first_floor: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        second_floor: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        third_floor: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        fourth_floor: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        fiveth_floor: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    }, 
    {
        tableName: 'hostel_details',
        timestamps: false
    }
);

module.exports = {
    Hostel
}