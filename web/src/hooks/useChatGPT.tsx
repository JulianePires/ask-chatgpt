import { AxiosError, AxiosResponse } from 'axios'
import {
  ChangeEventHandler,
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react'
import { ErrorReponse, SuccessResponse } from 'src/data/Types'
import { api } from 'src/infrastructure/api'

interface ChatGPTContextProps {
  prompt: string
  answer: string
  error: string
  handleChangePrompt: ChangeEventHandler<HTMLInputElement>
  onAskingChatGpt: () => void
}

interface ChatGPTProviderProps {
  children: ReactNode
}

const ChatGPTContext = createContext({} as ChatGPTContextProps)

export const ChatGPTProvider = ({ children }: ChatGPTProviderProps) => {
  const [prompt, setPrompt] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [hasError, setHasError] = useState<boolean>(false)

  const handleChangePrompt: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setPrompt(target.value)
  }

  const onAskingChatGpt = () => {
      api.post('api/prompt', prompt)
      .then((res: AxiosResponse<SuccessResponse>) => {
        setHasError(false)
        console.log(res.data.data)
      }).catch((err:AxiosError<ErrorReponse>) => {
        setHasError(true)
        setError(err.message)
        console.log(hasError, error)
      })
  }

  return (
    <ChatGPTContext.Provider
      value={{ prompt, answer, error, handleChangePrompt, onAskingChatGpt }}
    >
      {children}
    </ChatGPTContext.Provider>
  )
}

const useChatGPT = () => {
  return useContext(ChatGPTContext)
}

export default useChatGPT
