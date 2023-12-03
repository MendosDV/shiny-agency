import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useState } from 'react'

const InputWrapper = styled.div`
`

const TitleInput = styled.p`
  font-size: 14px;
  color: ${({ theme }) => (theme === 'light' ? colors.secondary : 'white')};
`

const Input = styled.input`
  padding: 4px 6px;
  border: ${({ theme }) => (theme === 'light' ? 'solid 1px black' : 'black')}
  border-radius: 4px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(88,67,228,0.75);
  }
`

const Form = styled.form`
`
function EmailInput({theme}) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`You are subscride to our newletters with ${email}`)
    setEmail('')
  }

  return (
    <InputWrapper>
      <TitleInput theme={theme}>Your email address</TitleInput>
      <Form type='submit' onSubmit={handleSubmit}>
        <Input placeholder='Email address' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      </Form>
    </InputWrapper>
  )
}

export default EmailInput
