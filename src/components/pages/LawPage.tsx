import LawList from '../LawList/LawList'
import { codexes, constLaws, frakLaws, laws } from '../LawList/data'
import Container from '../global/Container'

const LawPage = () => {
  return (
    <div>
      <Container>
        <div className="p-3 rounded-lg bg-bg-gray grid gap-4 grid-cols-2 max-md:grid-cols-1">
          <div>
            <h3>Конституционные законы штата</h3>
            <LawList law={constLaws} />
          </div>
          <div>
            <h3>Законы</h3>
            <LawList law={laws} />
          </div>
          <div>
            <h3>Законы о госструктурах</h3>
            <LawList law={frakLaws} />
          </div>
          <div>
            <h3>Кодексы</h3>
            <LawList law={codexes} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default LawPage
