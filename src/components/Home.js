import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Logo from '../images/logo.png'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
export default () => (
  <Tabs>
    <div className="wrapper">
    <div className='tabs'>
        <TabList>
        <img src={Logo} className="logo" alt="logo"/>
        <Tab>
            <BiUser size="70"/>
            <p>Student</p>
       </Tab>
        <Tab>
            <BiBook size="70"/>
            <p>LessoN Plan</p>
        </Tab>
        <Tab>
            <FiSettings size="70"/>
            <p>Settings</p>
        </Tab>
        </TabList>
    </div>
  <div className="tab__panel">
    <TabPanel>
      <h2>Students Content</h2>
    </TabPanel>
    <TabPanel>
      <div className="videos">
            <h2>Videos</h2>
      </div>
      <div className="url">
            <form>
                <input type="url" placeholder="Insert URL Here"/>
            </form>
      </div>
      <div className="upload">
            <h3>Upload</h3>
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Settings content</h2>
    </TabPanel>
    </div>
    </div>
  </Tabs>
);