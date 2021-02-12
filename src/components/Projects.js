import React from 'react';

export default function Projects() {
	return (
		<>
			<section id='projects'>
				<h3>Projects</h3>
				<div className='projectContent'>
					<div>
						<a href='https://ghibli-studio-movie-app.herokuapp.com/'>
							{' '}
							<img
								src={require('../imgs/ghibliProject.png')}
								alt='ghibli project'
							/>
						</a>
						<a href='https://github.com/EdwardEJ/Studio-Ghibli-Films'>
							<img
								className='outside-link'
								src={require('../imgs/github-original.svg')}
								alt='Github icon'
							/>
						</a>
					</div>

					<div>
						<a href='https://chatterblog.club/'>
							{' '}
							<img
								src={require('../imgs/blogSpotProject.png')}
								alt='blogspot project'
							/>
						</a>
						<a href='https://github.com/EdwardEJ/blogspot'>
							<img
								className='outside-link'
								src={require('../imgs/github-original.svg')}
								alt='Github icon'
							/>
						</a>
					</div>

					<div>
						<a href='https://nasa-solo-project.netlify.app/'>
							<img src={require('../imgs/NASAPotD.png')} alt='NASA project' />
						</a>
						<a href='https://github.com/EdwardEJ/nasa-photo-of-the-day'>
							<img
								className='outside-link'
								src={require('../imgs/github-original.svg')}
								alt='Github icon'
							/>
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
