// const user = {
//   role: 'Student',
//   name: "Jonh Doe",
//   phone: "08066249684",
//   email: "umar@site.com",
//   exam_number: "123456789HJ",
//   authenticated: true
// }

export default function (state = {}, action) {
  switch (action.type) {
    case "AUTH_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}