const login = async ({ password, email }) =>
  await new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (
        password === 'password' &&
        email.toLowerCase() === 'test@bambee.com'
      ) {
        resolve({
          token: 'abc123',
          user: {
            id: 0,
            name: 'Molly Testsalot',
            email: 'test@bambee.com',
            phone: '+15555555555',
          },
        });
      } else {
        reject({
          message: 'That does not match any user in our records.',
        });
      }
    }, 300);
  });

const signup = async (user) => await new Promise();

export default { login, signup };
