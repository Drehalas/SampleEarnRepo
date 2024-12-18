import { ExternalLink } from '@/components/external-link'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-2xl bg-sky-50 sm:p-8 p-4 text-sm sm:text-base">
        <h1 className="text-2xl sm:text-4xl tracking-tight font-semibold bg-gradient-to-r max-w-fit from-indigo-500 inline-block via-purple-500 text-transparent to-red-500 bg-clip-text">
          Next.js Gemini Chatbot
        </h1>
        <p className="leading-normal text-sky-900">
          This is an open source AI chatbot app template built with{' '}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>, the{' '}
          <ExternalLink href="https://sdk.vercel.ai">
            Vercel AI SDK
          </ExternalLink>
          , and{' '}
          <ExternalLink href="https://ai.google.dev">
            Google Gemini
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-sky-900">
          It uses{' '}
          <ExternalLink href="https://vercel.com/blog/ai-sdk-3-generative-ui">
            React Server Components
          </ExternalLink>{' '}
          with function calling to mix both text with generative UI responses
          from Gemini. The UI state is synced through the AI SDK so the model is
          always aware of your stateful interactions as they happen in the
          browser.
        </p>
      </div>
    </div>
  )
}
