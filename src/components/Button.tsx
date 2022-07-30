import { ButtonContainer, ButtonVariant } from "./Button.styles"

interface ButttonProps {
  variant?: ButtonVariant;
}

export function Button({ variant } : ButttonProps) {
  return (
    <ButtonContainer variant={variant}>
      Enviar
    </ButtonContainer>
  )
}