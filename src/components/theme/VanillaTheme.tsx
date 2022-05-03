import { DefaultLayoutProps } from "../../interface/theme.interface";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const VanillaTheme = ({children}:DefaultLayoutProps)=> {
	return(
		<div className="m-auto w-full h-full">
			{children}
			<ToastContainer />
		</div>
	);
}

export default VanillaTheme;