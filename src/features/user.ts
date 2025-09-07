import axios from 'axios';

export async function getUser() {
  try {
    const response = await axios.get('http://localhost:3000/api/users');
  } catch (error) {
    console.error(error);
  }
}

export async function createUser() {
  try {
    const response = await axios.get('http://localhost:3000/api/users');
  } catch (error) {
    console.error(error);
  }
}
