import LawList from '../LawList/LawList'
import Container from '../global/Container'

const LawPage = () => {
  return (
    <div>
      <Container>
        <div className="p-3 rounded-lg bg-bg-gray">
          <h3>Законы штата</h3>
          <LawList />
        </div>
      </Container>
    </div>
  )
}

export default LawPage
