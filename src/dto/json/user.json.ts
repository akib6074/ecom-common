import { RoleName } from '../../enum/role-name.enum';
import { Gender } from '../../enum/gender.enum';

export const usersObject = [
  {
    firstName: 'akib',
    lastName: 'javed',
    email: 'info@test.com',
    phone: '01791538019',
    password: 'pass1234568',
    gender: Gender.Male,
    role: RoleName.SUPER_ADMIN_ROLE,
    dateOfBirth: new Date(),
    address: 'Dhaka, Bangladesh',
  },
];
