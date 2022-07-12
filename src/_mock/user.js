import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

// const users = [...Array(24)].map((_, index) => ({
//   id: faker.datatype.uuid(),
//   avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
//   name: faker.name.findName(),
//   company: faker.company.companyName(),
//   isVerified: faker.datatype.boolean(),
//   status: sample(['active', 'banned']),
//   role: sample([
//     'Leader',
//     'Hr Manager',
//     'UI Designer',
//     'UX Designer',
//     'UI/UX Designer',
//     'Project Manager',
//     'Backend Developer',
//     'Full Stack Designer',
//     'Front End Developer',
//     'Full Stack Developer',
//   ]),
// }));

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.company.companyName(),
  date: faker.date.between('2015-01-01', '2015-01-05'),
  quantity: faker.datatype.number({ min: 1, max: 100}),
  amount: faker.finance.amount(),
  role: sample(['buy', 'sell']),
}));

export default users;
