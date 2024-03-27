import { Outlet } from "react-router-dom"
import Header from "./header"
import Footer from "./footer"
import Config from "src/components/config"
import css from "./user.template.module.scss"
import ListChains from "src/components/list-chains"

function UserTemplate() {
    return (
        <Config>
            <Header />
            <div
                style={{ minHeight: '100vh' }}
                className={`${css.main} row`}
            >
                <div className="col-4 pl-0 pt-0">
                    <ListChains />
                </div>
                <div className="col-8 pr-0 pt-0">
                    <Outlet />
                </div>

            </div>
            <Footer />
        </Config>
    )
}

export default UserTemplate