const Sequelize = require('sequelize');
const sequelize = require('../../Models');

const HostelInmates = sequelize.define(
    'hostel_inmates', 
    {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        adm_no: {
            type: Sequelize.STRING
        }
    }, 
    {
        tableName: 'hostel_inmates',
        timestamps: false
    }
);

module.exports = {
    HostelInmates
}