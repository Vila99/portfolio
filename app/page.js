import MainPage from "./components/MainPage"
import Content from "./components/ContentPage"

export const metadata = {
  title: 'Portfolio',
  description: 'Welcome to my portfolio',
}

export default async function Home() {
  return (
    <main className="bg-main">
      <MainPage />
      <Content />
    </main>
  )
}