import { DefaultLayoutProps } from "../../interface/theme.interface";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const DefaultTheme = ({children}:DefaultLayoutProps)=> {
	return(
		<div className="container m-auto md:pl-0 md:pl-0 pl-5 pr-5">
			{children}
			<ToastContainer />
		</div>
	);
}

export default DefaultTheme;