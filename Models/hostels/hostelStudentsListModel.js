const Sequelize = require('sequelize');
const sequelize = require('..');

const HostelStudentsList = sequelize.define(
    'hs_student_allotment_list', 
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        adm_no: {
            type: Sequelize.STRING
        },
        hostel_name: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.ENUM('Available', 'Unavailable'),
            defaultValue: "Available"
        },
        modify_date: {
            type: Sequelize.DataTypes.DATE,
            defaultValue: Sequelize.NOW,
        },
        is_deleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    }, 
    {
        tableName: 'hs_student_allotment_list',
        timestamps: false
    }
);
HostelStudentsList.sync();

module.exports = {
    HostelStudentsList
}