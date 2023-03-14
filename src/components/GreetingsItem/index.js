import {ButtonsListContainer} from './styledComponents'
import './index.css'

const GreetingsItem = props => {
  const {LanguageItemDetails, isActive, onClickChangeLanguage} = props
  const {buttonText, id} = LanguageItemDetails
  const onClickButton = () => {
    onClickChangeLanguage(id)
  }
  const classEl = isActive === true ? 'activeEl' : 'notActive'

  return (
    <ButtonsListContainer>
      <button type="button" className={classEl} onClick={onClickButton}>
        {buttonText}
      </button>
    </ButtonsListContainer>
  )
}

export default GreetingsItem
