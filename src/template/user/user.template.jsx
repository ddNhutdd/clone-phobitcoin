import { Outlet } from "react-router-dom"
import Header from "./header"
import Footer from "./footer"
import Config from "src/components/config"
import css from "./user.template.module.scss"
import ListChains from "src/components/list-chains"
import History from "src/components/history"
import Posts from "src/components/posts"
import { useSelector } from "react-redux"
import { getShow } from "src/redux/slices/user-template"
import AlertContainer from "src/components/alert-container"

function UserTemplate() {
    const sidebarContent = useSelector(getShow);
    const { chains, history, posts } = sidebarContent;

    const renderChains = () => chains && <ListChains />
    const renderHistory = () => history && <History />
    const renderPost = () => posts && <Posts />

    return (
        <Config>
            <Header />
            <div
                style={{ minHeight: '100vh' }}
                className={`${css.main} row`}
            >
                <div className="col-4 pl-0 pt-0 col-lg-6 col-md-12 pr-md-0">
                    {renderChains()}
                    {renderPost()}
                    {renderHistory()}
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

export default UserTemplate