import './Participate.css'

import PageHeader from '../../components/PageHeader'
import Purchaser from './Participate-Components/Purchaser';

function Participate() {
  return (
    <div className="Participate">
      <PageHeader text='Buy Joshdollar'/>
      <Purchaser />
    </div>
  );
}

export default Participate;
