import '../globals.css'
import Header from '../../components/common/Header'
import { Suspense } from "react";

export default function PlaygroundLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
        {/* <Suspense fallback={<div>Loading...</div>}>
          <Header/>
        </Suspense> */}
        <section className='bg-white'><div className='text-black'>/playground/layout.tsx</div>{children}</section>
    </>
  )
}
