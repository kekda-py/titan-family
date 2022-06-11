import React from 'react';

import TestimonialImage from '../images/testimonial.jpg';
import Team from '../utils/Team';

function Testimonials() {
	return (
		<section className="relative">

			{/* Illustration behind content */}
			<div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
				<svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
							<stop stopColor="#FFF" offset="0%" />
							<stop stopColor="#EAEAEA" offset="77.402%" />
							<stop stopColor="#DFDFDF" offset="100%" />
						</linearGradient>
					</defs>
					<g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
						<circle cx="1630" cy="128" r="128" />
						<circle cx="178" cy="481" r="40" />
					</g>
				</svg>
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20">

					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
						<h2 className="h2 mb-4">Da Team</h2>
						<p className="text-xl text-gray-600" data-aos="zoom-y-out">
							The team thats working hard to make the community better.
						</p>
					</div>


					<div className="max-w-sm team mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

						<Team
							name="Zahin"
							dsc={(<>
								The <strong>Founder</strong> of the community and <strong>Club President</strong>
							</>)}
							id="700010909833232596"
							image="https://cdn.discordapp.com/avatars/700010909833232596/a_5901ecf67cdf44f4623ff7ec83b6b912.gif"
						/>

						<Team
							name="Nimbu"
							dsc={(<>
								<strong>Server Manager</strong>
							</>)}
							id="698036203651334154"
							image="https://cdn.discordapp.com/avatars/698036203651334154/2eee7a1d6f72d348e4369108f7285ebe.webp"
						/>

						<Team
							name="Muru"
							dsc={(<>
								<strong>Server Manager</strong>
							</>)}
							id="767201190093127741"
							image="https://cdn.discordapp.com/avatars/767201190093127741/2224119d1c15fbd6fc520b7458456506.webp"
						/>

						<Team
							name="Ludo Girl"
							dsc={(<>
								<strong>Server Manager</strong> and <strong>Club President</strong>
							</>)}
							id="748129499547303948"
							image="https://cdn.discordapp.com/avatars/748129499547303948/a55a3142aa650086cd37167c7f96e14f.webp"
						/>

						<Team
							name="Yash"
							dsc={(<>
								<strong>Server Manager</strong> and <strong>The Developer</strong>
							</>)}
							id="753845980507537478"
							image="https://cdn.discordapp.com/avatars/753845980507537478/07179f7bf9dd20f23d715a587fcf298d.webp"
						/>

					</div>

					{/* Testimonials */}
					<div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
						<div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

							<div className="text-center flex flex-col items-center justify-center sm:px-20 px-5 pt-20 md:mx-4 mx-0">
								<div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
									<svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
										<path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
									</svg>
									<img className="relative rounded-full" src="https://cdn.discordapp.com/attachments/967731357570711612/985101628610838538/unknown.png" width="96" height="96" alt="Testimonial 01" />
								</div>
								<blockquote className="text-xl font-medium mb-4 mx-auto">
									“ I have this vision of creating a ground for people where there is no toxicity. Titan aims to have a toxic-free community because closing the door to toxicity is the most effective way to make space for new opportunities. “
								</blockquote>
								<cite className="block font-bold text-lg not-italic mb-1">Zahin</cite>
								<div className="text-gray-600 mb-2">
									<span>CEO & Founder</span>
								</div>
							</div>

						</div>
					</div>

				</div>
			</div>
		</section>
	);
}

export default Testimonials;