import { Images } from 'src/constants/Images'
import useChatGPT from 'src/hooks/useChatGPT'

const Home = () => {
  const { prompt, handleChangePrompt, answer, onAskingChatGpt } = useChatGPT()
  return (
    <div className='bg-background w-screen h-screen flex-col items- p-10'>
      <section>
        <img
          src={Images.LOGOASKCHATGPT}
          alt='Robô perguntando se pode ajudar e texto escrito Ask Chat Gpt'
        />
      </section>

      <section>
        <h1>O que você quer saber?</h1>
        <input defaultValue={prompt} onChange={handleChangePrompt} />
        <button onClick={onAskingChatGpt}>Enviar</button>
      </section>

      <section>
        <textarea name='' value={answer} />
      </section>
    </div>
  )
}

export default Home
