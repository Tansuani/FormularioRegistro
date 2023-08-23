import Swal from 'sweetalert2'

const Alert = () => {
  return (
    <div>Alert</div>
  )
}

export default Alert

{/* FORMATO DE SWEETALERT
const { value: email } = await Swal.fire({
  title: 'Input email address',
  input: 'email',
  inputLabel: 'Your email address',
  inputPlaceholder: 'Enter your email address'
})

if (email) {
  Swal.fire(`Entered email: ${email}`)
}
*/}