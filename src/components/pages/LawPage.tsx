import LawList from '../LawList/LawList'
import { constLaws, frakLaws, laws } from '../LawList/data'
import Container from '../global/Container'

const LawPage = () => {
  return (
    <div>
      <Container>
        <div className="p-3 rounded-lg bg-bg-gray grid grid-cols-2">
          <div>
            <h3>Конституционные законы штата</h3>
            <LawList law={constLaws} />
          </div>
          <div>
            <h3 className="mt-4">Законы</h3>
            <LawList law={laws} />
          </div>
          <div>
            <h3 className="mt-4">Законы о госструктурах</h3>
            <LawList law={frakLaws} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default LawPage
