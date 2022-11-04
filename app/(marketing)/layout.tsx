import '../globals.css'
import Header from '../../components/common/Header'
import { Suspense, useEffect } from "react";

async function getData() {
  const res = await fetch('http://localhost:3000/api/hello');
  return res.json();
}


export default async function MarketingLayout({ children }: {
  children: React.ReactNode
}) {

  // const user = await getData();

  // console.log(user)
  return (
    <>
        <Suspense fallback={<div>Loading...</div>}>
          <Header/>
        </Suspense>
        <section className='bg-white h-[500px]'>{children}</section>
    </>
  )
}
