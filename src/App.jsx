import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { header } from 'express/lib/request'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Welcome To EliteStore.com</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure excepturi autem vitae voluptas fuga harum quidem odit accusamus nulla, magnam non molestias laborum nesciunt maiores error facere! Ut rem, laborum minima ipsa culpa quisquam cum voluptatum. Earum officia laborum nisi, quia voluptates sequi corporis excepturi consequatur, ratione delectus iure eaque porro quam dignissimos. Consequatur rerum natus doloremque alias reprehenderit nobis, vitae accusamus voluptatibus a iure, aliquid fugit labore placeat corporis incidunt amet necessitatibus quam recusandae deleniti nam, inventore sit blanditiis! Corporis ducimus dignissimos, mollitia tenetur recusandae blanditiis laboriosam at itaque! Quos dolorum maxime ab. Quas nobis, dignissimos iure praesentium modi illum dolore maxime. Reprehenderit similique itaque laudantium deserunt natus rem, fuga consectetur, alias cum repellat quas, neque dolore quidem delectus. Unde, inventore esse.</p>
    </div>
  )
}

export default App
