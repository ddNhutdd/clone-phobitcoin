import Config from 'src/components/config'
import css from './user-profile.template.module.scss'
import Header from '../user/header'
import { Outlet } from 'react-router-dom'
import Footer from '../user/footer'
import AlertContainer from 'src/components/alert-container'
import Sidebar from './sidebar'

function UserProfileTemplate() {
    return (
        <Config>
            <Header />
            <div
                style={{ minHeight: '100vh' }}
                className={`${css.main} row`}
            >
                <div className="col-4 pl-0 pt-0 col-lg-6 col-md-12 pr-md-0">
                    <Sidebar />
                </div>
                <div className="col-8 pr-0 pt-0 col-lg-6 col-md-12 pl-md-0">
                    <AlertContainer />
                    <Outlet />
                </div>
            </div>
            <Footer />
        </Config>
    )
}

export default UserProfileTemplate