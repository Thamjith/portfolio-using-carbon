import './Myself.scss';

import { Column, Grid } from '@carbon/react';

const Myself = () => {
	return (
		<Grid id='myself' className='myself__container'>
			<Column sm={100} md={4} lg={8} className='myself__title_wrapper'>
				<h1 className='myself__title'>
					<span>
						Hi,
						<br />
						My name is Thamjith Thaha. <br />
					</span>
					<span className='red-text'>
						I'm a software engineer with <br />
						{calculateExperience(startDate)} of experience.
					</span>
				</h1>
			</Column>
			<Column sm={100} md={4} lg={8} className='myself__profile_image_wrapper'>
				<img
					src='/profilePictures/Myself.JPG'
					loading='lazy'
					className='myself__profile_image'
				/>
			</Column>
		</Grid>
	);
};

export default Myself;

function calculateExperience(startDate: string) {
	const start = new Date(startDate);
	const now = new Date();

	let years = now.getFullYear() - start.getFullYear();
	let months = now.getMonth() - start.getMonth();

	// Adjust if the current month is before the start month
	if (months < 0) {
		years--;
		months += 12;
	}

	return `${years} year${years !== 1 ? 's' : ''} and ${months} month${
		months !== 1 ? 's' : ''
	}`;
}

// Usage
const startDate = '2020-02-01';
