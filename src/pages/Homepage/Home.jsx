import Chart from '../../components/Chart/Chart'
import Featured from '../../components/Featured/Featured'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import TableComponent from '../../components/Table/Table'
import Widgets from '../../components/widgets/Widgets'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widgets type="user"/>
          <Widgets type="order"/>
          <Widgets type="earning"/>
          <Widgets type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart title="User Spending (Last 6 months)"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <TableComponent/>
        </div>
      </div>
    </div>
  )
}

export default Home
