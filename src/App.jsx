import { useEffect, useState } from "react"
import IconOptions from "./components/IconOptions"
import themeOptions from "./constants/themeOptions"

const App = () => {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system')
	const htmlElement = document.documentElement
	const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

	const onWindowMatch = () => {
		return (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) 
			? htmlElement.classList.add('dark')
			: htmlElement.classList.remove('dark') 
	}

	onWindowMatch()
	
	useEffect(() => {
		if (theme === 'dark') {
			htmlElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else if (theme === 'light') {
			htmlElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		} else {
			localStorage.removeItem('theme')
			onWindowMatch()
		}
	}, [theme])

	darkQuery.addEventListener('change', (e) => {
		if (!('theme' in localStorage)) {
			return e.matches ? htmlElement.classList.add('dark')
				: htmlElement.classList.remove('dark')
		} 
	})

	return (
		<main className="antialiased font-sans py-7 min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 duration-300">
			<div className="fixed z-10 top-5 right-5 bg-slate-200 rounded-md dark:bg-slate-800 flex flex-col lg:flex-row items-center justify-center gap-4 p-3">
				{
					themeOptions?.map(({icon, text}) => (
						<button key={text} onClick={() => setTheme(text)} className="outline-none border-none">
							<IconOptions classLists={`${theme === text && 'fill-sky-500'}`} options={icon} />
						</button>
					))
				}
			</div>

			<h1 className="font-bold text-2xl md:text-center md:text-3xl lg:text-4xl px-6">
				Theme Switcher Demo
			</h1>
			<section className="my-6 w-full max-w-4xl mx-auto leading-7 py-4 px-6">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laudantium dolores quidem, itaque placeat, perferendis expedita minima aut blanditiis minus velit qui eligendi eaque culpa explicabo. Id dolores eum cupiditate maiores reiciendis fugiat rem mollitia quos minima dolorum, dicta ullam ipsam quam aliquid rerum expedita veritatis temporibus officiis deleniti? Odit provident modi, obcaecati dolores fugiat numquam ab perferendis aut, sunt dolorem cumque error fugit molestiae consectetur saepe ducimus. Magni et, dolorum atque iste tenetur vitae numquam doloribus dignissimos beatae placeat commodi quod corporis id sunt? Commodi, at. Alias nemo ipsum dolorum animi iusto. Hic beatae odit mollitia dolore voluptatum dolor assumenda minus obcaecati omnis atque doloremque commodi, fuga perferendis repudiandae consequuntur repellat rerum id deserunt pariatur harum nihil temporibus perspiciatis totam sit. Assumenda voluptatibus ex repellendus ducimus aut nisi quia voluptates, et ab ratione reiciendis consectetur cupiditate sit corrupti, nemo atque quam nam. Corporis, quos nemo incidunt error ad culpa?</p>
				<br />
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laudantium dolores quidem, itaque placeat, perferendis expedita minima aut blanditiis minus velit qui eligendi eaque culpa explicabo. Id dolores eum cupiditate maiores reiciendis fugiat rem mollitia quos minima dolorum, dicta ullam ipsam quam aliquid rerum expedita veritatis temporibus officiis deleniti? Odit provident modi, obcaecati dolores fugiat numquam ab perferendis aut, sunt dolorem cumque error fugit molestiae consectetur saepe ducimus. Magni et, dolorum atque iste tenetur vitae numquam doloribus dignissimos beatae placeat commodi quod corporis id sunt? Commodi, at. Alias nemo ipsum dolorum animi iusto. Hic beatae odit mollitia dolore voluptatum dolor assumenda minus obcaecati omnis atque doloremque commodi, fuga perferendis repudiandae consequuntur repellat rerum id deserunt pariatur harum nihil temporibus perspiciatis totam sit. Assumenda voluptatibus ex repellendus ducimus aut nisi quia voluptates, et ab ratione reiciendis consectetur cupiditate sit corrupti, nemo atque quam nam. Corporis, quos nemo incidunt error ad culpa?</p>
				<br />
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laudantium dolores quidem, itaque placeat, perferendis expedita minima aut blanditiis minus velit qui eligendi eaque culpa explicabo. Id dolores eum cupiditate maiores reiciendis fugiat rem mollitia quos minima dolorum, dicta ullam ipsam quam aliquid rerum expedita veritatis temporibus officiis deleniti? Odit provident modi, obcaecati dolores fugiat numquam ab perferendis aut, sunt dolorem cumque error fugit molestiae consectetur saepe ducimus. Magni et, dolorum atque iste tenetur vitae numquam doloribus dignissimos beatae placeat commodi quod corporis id sunt? Commodi, at. Alias nemo ipsum dolorum animi iusto. Hic beatae odit mollitia dolore voluptatum dolor assumenda minus obcaecati omnis atque doloremque commodi, fuga perferendis repudiandae consequuntur repellat rerum id deserunt pariatur harum nihil temporibus perspiciatis totam sit. Assumenda voluptatibus ex repellendus ducimus aut nisi quia voluptates, et ab ratione reiciendis consectetur cupiditate sit corrupti, nemo atque quam nam. Corporis, quos nemo incidunt error ad culpa?</p>
				<br />
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laudantium dolores quidem, itaque placeat, perferendis expedita minima aut blanditiis minus velit qui eligendi eaque culpa explicabo. Id dolores eum cupiditate maiores reiciendis fugiat rem mollitia quos minima dolorum, dicta ullam ipsam quam aliquid rerum expedita veritatis temporibus officiis deleniti? Odit provident modi, obcaecati dolores fugiat numquam ab perferendis aut, sunt dolorem cumque error fugit molestiae consectetur saepe ducimus. Magni et, dolorum atque iste tenetur vitae numquam doloribus dignissimos beatae placeat commodi quod corporis id sunt? Commodi, at. Alias nemo ipsum dolorum animi iusto. Hic beatae odit mollitia dolore voluptatum dolor assumenda minus obcaecati omnis atque doloremque commodi, fuga perferendis repudiandae consequuntur repellat rerum id deserunt pariatur harum nihil temporibus perspiciatis totam sit. Assumenda voluptatibus ex repellendus ducimus aut nisi quia voluptates, et ab ratione reiciendis consectetur cupiditate sit corrupti, nemo atque quam nam. Corporis, quos nemo incidunt error ad culpa?</p>
				<br />
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laudantium dolores quidem, itaque placeat, perferendis expedita minima aut blanditiis minus velit qui eligendi eaque culpa explicabo. Id dolores eum cupiditate maiores reiciendis fugiat rem mollitia quos minima dolorum, dicta ullam ipsam quam aliquid rerum expedita veritatis temporibus officiis deleniti? Odit provident modi, obcaecati dolores fugiat numquam ab perferendis aut, sunt dolorem cumque error fugit molestiae consectetur saepe ducimus. Magni et, dolorum atque iste tenetur vitae numquam doloribus dignissimos beatae placeat commodi quod corporis id sunt? Commodi, at. Alias nemo ipsum dolorum animi iusto. Hic beatae odit mollitia dolore voluptatum dolor assumenda minus obcaecati omnis atque doloremque commodi, fuga perferendis repudiandae consequuntur repellat rerum id deserunt pariatur harum nihil temporibus perspiciatis totam sit. Assumenda voluptatibus ex repellendus ducimus aut nisi quia voluptates, et ab ratione reiciendis consectetur cupiditate sit corrupti, nemo atque quam nam. Corporis, quos nemo incidunt error ad culpa?</p>
				<br />
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laudantium dolores quidem, itaque placeat, perferendis expedita minima aut blanditiis minus velit qui eligendi eaque culpa explicabo. Id dolores eum cupiditate maiores reiciendis fugiat rem mollitia quos minima dolorum, dicta ullam ipsam quam aliquid rerum expedita veritatis temporibus officiis deleniti? Odit provident modi, obcaecati dolores fugiat numquam ab perferendis aut, sunt dolorem cumque error fugit molestiae consectetur saepe ducimus. Magni et, dolorum atque iste tenetur vitae numquam doloribus dignissimos beatae placeat commodi quod corporis id sunt? Commodi, at. Alias nemo ipsum dolorum animi iusto. Hic beatae odit mollitia dolore voluptatum dolor assumenda minus obcaecati omnis atque doloremque commodi, fuga perferendis repudiandae consequuntur repellat rerum id deserunt pariatur harum nihil temporibus perspiciatis totam sit. Assumenda voluptatibus ex repellendus ducimus aut nisi quia voluptates, et ab ratione reiciendis consectetur cupiditate sit corrupti, nemo atque quam nam. Corporis, quos nemo incidunt error ad culpa?</p>
				<br />
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laudantium dolores quidem, itaque placeat, perferendis expedita minima aut blanditiis minus velit qui eligendi eaque culpa explicabo. Id dolores eum cupiditate maiores reiciendis fugiat rem mollitia quos minima dolorum, dicta ullam ipsam quam aliquid rerum expedita veritatis temporibus officiis deleniti? Odit provident modi, obcaecati dolores fugiat numquam ab perferendis aut, sunt dolorem cumque error fugit molestiae consectetur saepe ducimus. Magni et, dolorum atque iste tenetur vitae numquam doloribus dignissimos beatae placeat commodi quod corporis id sunt? Commodi, at. Alias nemo ipsum dolorum animi iusto. Hic beatae odit mollitia dolore voluptatum dolor assumenda minus obcaecati omnis atque doloremque commodi, fuga perferendis repudiandae consequuntur repellat rerum id deserunt pariatur harum nihil temporibus perspiciatis totam sit. Assumenda voluptatibus ex repellendus ducimus aut nisi quia voluptates, et ab ratione reiciendis consectetur cupiditate sit corrupti, nemo atque quam nam. Corporis, quos nemo incidunt error ad culpa?</p>
				<br />
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laudantium dolores quidem, itaque placeat, perferendis expedita minima aut blanditiis minus velit qui eligendi eaque culpa explicabo. Id dolores eum cupiditate maiores reiciendis fugiat rem mollitia quos minima dolorum, dicta ullam ipsam quam aliquid rerum expedita veritatis temporibus officiis deleniti? Odit provident modi, obcaecati dolores fugiat numquam ab perferendis aut, sunt dolorem cumque error fugit molestiae consectetur saepe ducimus. Magni et, dolorum atque iste tenetur vitae numquam doloribus dignissimos beatae placeat commodi quod corporis id sunt? Commodi, at. Alias nemo ipsum dolorum animi iusto. Hic beatae odit mollitia dolore voluptatum dolor assumenda minus obcaecati omnis atque doloremque commodi, fuga perferendis repudiandae consequuntur repellat rerum id deserunt pariatur harum nihil temporibus perspiciatis totam sit. Assumenda voluptatibus ex repellendus ducimus aut nisi quia voluptates, et ab ratione reiciendis consectetur cupiditate sit corrupti, nemo atque quam nam. Corporis, quos nemo incidunt error ad culpa?</p>
			</section>
		</main>
	)
}

export default App