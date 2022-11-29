import React from 'react';
import {
	FormColumn,
	FormWrapper,
	FormSection,
	FormRow,
	FormLabel,
	FormTitle,
} from './FormStyles';
import { Container } from '../../globalStyles';


const Form = () => {
	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>Liên hệ với chúng tôi tại</FormTitle>
						<FormWrapper >
						<FormLabel> Hotline: <span style={{color: "black", fontSize: "20px", marginBottom: "10px"}}> 0978 910555 - 0964881919</span></FormLabel>
						<FormLabel> Trụ sở chính: <span style={{color: "black", fontSize: "20px"}}>  Số 561, Phan Đình Phùng, Khóm 3, Phường 6, thành phố Trà  Vinh, tỉnh Trà Vinh. </span></FormLabel>	
						<FormLabel> Email: <span style={{color: "black", fontSize: "20px"}}> daugiabaotintravinh@gmail.com</span></FormLabel>	
						<FormLabel> Điện thoại: <span style={{color: "black", fontSize: "20px"}}> 02943.864668</span></FormLabel>	
						</FormWrapper>
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default Form;
