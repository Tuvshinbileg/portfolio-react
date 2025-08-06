export default function Header() {
	return (
		<header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
			<div>
				<h1 className="text-4xl font-bold text-white">Tuvshinbileg</h1>
				<h2 className="mt-3 text-lg font-medium tracking-tight text-slate-400 sm:text-xl">Software Engineer</h2>
				<p className="mt-4 max-w-xs leading-normal">I build accessible, pixel-perfect digital experiences for the web.</p>
				<nav>
					<ul className="flex space-x-4 flex-col py-10  mt-5 w-max gap-5">

						<li className="flex">
							<span className="mt-3 text-white nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
							</span>
							<a href="#about" className="text-white font-bold uppercase group flex items-center">About</a></li>
						<li className="flex">
							<span className="mt-3 text-white nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
							</span>
							<a href="#experience" className="text-white font-bold uppercase group flex items-center">Experience</a></li>
						<li className="flex">
							<span className="mt-3 text-white nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
							</span>
							<a href="#projects" className="text-white font-bold uppercase group flex items-center">Projects</a></li>
					</ul>
				</nav>
			</div>
			<ul className="flex">
				<li>
					<a>
						<span></span>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
					</a>
				</li>
			</ul>
		</header>
	);
}