import Swal from 'sweetalert2'

const Alertiqualpasword = () => {
  return (
    <div>Alertiqualpasword</div>
  )
}

export default Alertiqualpasword

{/* FORMATO DE SWEETALERT
const { value: password } = await Swal.fire({
  title: 'Enter your password',
  input: 'password',
  inputLabel: 'Password',
  inputPlaceholder: 'Enter your password',
  inputAttributes: {
    maxlength: 10,
    autocapitalize: 'off',
    autocorrect: 'off'
  }
})

if (password) {
  Swal.fire(`Entered password: ${password}`)
}
*/}