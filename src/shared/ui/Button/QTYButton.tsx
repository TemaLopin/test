import { QtyColor } from '@/shared/icons/QtyColor'
import { QTYContainer } from './style'

const QTYButton = ({ text }: { text: string }) => (
  <QTYContainer>
    <QtyColor />
    {text}
  </QTYContainer>
)

export default QTYButton
