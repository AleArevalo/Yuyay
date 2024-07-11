import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-8">
        <div className="container mx-auto px-6 w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                    <h3 className="text-indigo-600 text-xl font-bold">Yuyay</h3>
                    <p className="mt-4">
                        Yuyay significa &quot;recordar&quot; en quechua (familia lingüística originaria de sur America) y fue creada para participar de la Hackathon de Vercel AI con el gran @midudev.
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="text-indigo-600 text-xl font-bold">Tecnologías</h3>
                    <ul className="mt-4">
                        <li className="mb-2">
                            <a href="https://sdk.vercel.ai/docs/introduction" className="hover:text-indigo-600" target="_blank" rel="noopener noreferrer">
                                Vercel AI SDK
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="https://openai.com/" className="hover:text-indigo-600" target="_blank" rel="noopener noreferrer">
                                OpenAI
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="https://nextjs.org/" className="hover:text-indigo-600" target="_blank" rel="noopener noreferrer">
                                Next.js
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="https://vercel.com/" className="hover:text-indigo-600" target="_blank" rel="noopener noreferrer">
                                Vercel
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 text-center">
                Made in Chile with ❤️ - by <a href="http://alearevalo.dev" className="text-indigo-600 hover:text-gray-400" target="_blank" rel="noopener noreferrer">@alearevalo</a>
            </div>
        </div>
    </footer>
  )
}