
function saveUser(userData) {
  // input:URL(string),obj(headers,...)
  // output: obj (promise)
  const res = fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    // input:callback(результат промиса успешный, возвращает все что хотим)
    // output:promise
    .then(response => response.json())
    .then(body => {
      console.log(body);
    });
    
console.log(res);
  // test data
}
const user = {
  email: '11@email.com',
  firstName: 'S',
  lastName: 'F',
  city: 'KH',
  age: 30,
};
console.log(JSON.stringify(user));
saveUser(user);