
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialButton = ({facebook, github, linkedin}) => {
  return (
    <div>
      <button>
        <i class={facebook}></i>
      </button>
      <button>
        <i class={github}></i>
      </button>
      <button>
        <i class={linkedin}></i>
      </button>
    </div>
  )
}

export default SocialButton
