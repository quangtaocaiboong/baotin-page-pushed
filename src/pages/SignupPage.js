import React, {useEffect} from 'react';
import Form from '../components/Form/Form';

function SignUp() {
	useEffect(() => {
		document.title = "THÔNG TIN LIÊN HỆ | BPAC"
	 }, []);
	return (
		<>
			<Form />
		</>
	);
}

export default SignUp;
