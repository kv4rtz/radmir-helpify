import { Image } from 'primereact/image'
import Container from '../global/Container'

const MinderPage = () => {
  return (
    <div>
      <Container>
        <Image
          pt={{
            image: {
              className: 'w-full',
            },
          }}
          src="minder.jpg"
          preview
        />
      </Container>
    </div>
  )
}

export default MinderPage
