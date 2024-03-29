import { useEffect } from "react";
import { useDispatch } from "react-redux"
import Articles from "src/components/articles";
import { sidebarDefault } from "src/constants";
import { setShowContentSidebar, sidebarContent } from "src/redux/slices/user-template";

function QuestionAnswer() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setShowContentSidebar({
            [sidebarContent.chains]: true
        }))

        return () => {
            dispatch(setShowContentSidebar(sidebarDefault))
        }
    }, [])
    return (
        <Articles />
    )
}

export default QuestionAnswer