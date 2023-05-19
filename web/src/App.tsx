import { ChatGPTProvider } from './hooks/useChatGPT'
import { Router } from './routes/router'

const App = () => {
  return (
    <ChatGPTProvider>
      <Router />
    </ChatGPTProvider>
  )
}

export default App
