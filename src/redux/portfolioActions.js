import {portfolioActions} from "./portfolioSlice";


export const fetchData = () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const endPoint = process.env.REACT_APP_BASE_URL;
            const res = await fetch(
                endPoint + "/api/portfolio"
            );
            return await res.json();
        };
        try {
            const portfolioData = await fetchHandler();
            console.log(portfolioData);
            dispatch(portfolioActions.replaceData(portfolioData));
            dispatch(portfolioActions.hideLoading());
        } catch (err) {
            console.log(err);
        }
    };
};