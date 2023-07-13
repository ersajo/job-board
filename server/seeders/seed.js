'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      email: 'example@example.com',
      firstName: 'John',
      lastName: 'Doe',
      password: bcrypt.hashSync('password', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
      email: 'sanchezjoserick@gmail.com',
      firstName: 'Erick',
      lastName: 'Sanchez',
      password: bcrypt.hashSync('password12345', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('companies', [{
      id: 'd0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      email: 'company1@example.com',
      name: 'Tesla',
      password: bcrypt.hashSync('teslaPassword', 10),
      description: 'Tesla is a company',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 'd0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
      email: 'company2@example.com',
      name: 'VolksWagen',
      password: bcrypt.hashSync('VolksWagenPassword', 10),
      description: 'VolksWagen is a company',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('opportunities', [{
      id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      companyId: 'd0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      title: 'Tesla job offer 1',
      description: 'Description for the first job offer',
      location: 'Remote',
      salary: 100000,
      skills: ['TypeScript', 'Angular', 'Node.js'],
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
      companyId: 'd0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      title: 'Tesla job offer 2',
      description: 'Another description for the second job offer',
      location: 'Redwood City, CA',
      salary: 50000,
      skills: ['JavaScript', 'React', 'Node.js'],
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13',
      companyId: 'd0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
      title: 'VW job offer 1',
      description: 'Description for the first job offer',
      location: 'San Francisco, CA',
      salary: 30000,
      skills: ['Python', 'Django', 'React'],
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14',
      companyId: 'd0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
      title: 'Volkswagen job offer 2',
      description: 'Another description for the second job offer',
      location: 'Remote',
      salary: 80000,
      skills: ['Python', 'Flask', 'Angular'],
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {}
};
