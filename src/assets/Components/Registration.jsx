import Header from "./Header"
import SocialButton from "./SocialButton"
import Form from "./Form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Registration = () => {
  return (
    <div>
      <Header title="Suscríbete con nosotros" /> 
      <SocialButton 
        facebook="fa-brands fa-facebook fa-fade"
        github="fa-brands fa-github fa-fade"
        linkedin="fa-brands fa-linkedin-in fa-fade"
        />
      <Form></Form>
    </div>
  )
}

export default Registration