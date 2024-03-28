import {createSlice} from '@reduxjs/toolkit';

export const sidebarContent = {
    chains: 'chains',
    history: 'history',
    posts: 'posts'
}

const initialState = {
    content: {
        [sidebarContent.chains]: true,
        [sidebarContent.history]: true,
        [sidebarContent.posts]: false
    }
};

const userTemplateSlice = createSlice({
	name: 'userTemplate',
	initialState,
	reducers: {
		setShowContentSidebar(state, action) {
			const newState = {
                [sidebarContent.chains]: Boolean(action.payload[sidebarContent.chains]),
                [sidebarContent.history]: Boolean(action.payload[sidebarContent.history]),
                [sidebarContent.posts]: Boolean(action.payload[sidebarContent.posts])
            }
            state.content = newState;
		}
	},
});

export const {setShowContentSidebar} = userTemplateSlice.actions;
export default userTemplateSlice.reducer;
export const getShow = state => state.userTemplate.content;
