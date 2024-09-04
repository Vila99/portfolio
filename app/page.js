import MainPage from "./components/MainPage"
import Content from "./components/ContentPage"

export const metadata = {
  title: 'My App',
  description: 'Welcome to my app',
}

export default async function Home() {
  return (
    <main className="bg-main">
      <MainPage />
      <Content />
    </main>
  )
}