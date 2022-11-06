
// 'use client';

import TestSection from '../../../components/section/TestSection'
import TestSectionClient from '../../../components/section/TestSectionClient'
import Spinner from '../../../components/Spinner'
import { Suspense} from "react"

/* 
   * (marketing) 처럼 괄호로 폴더를 만들면 url를 
   * /marketing/about 이아닌 /about 으로 할 수 있다.
*/
export default function About() {
  console.log("About page")
  return (
    <div className="text-black bg-blue-200">
        <h2>/(marketing)/about/page.tsx, about page</h2>
        <Suspense fallback={<Spinner/>}>
            {/* @ts-ignore */}
          <TestSection/>
        </Suspense>
        <Suspense fallback={<Spinner/>}>
            {/* @ts-ignore */}
          <TestSectionClient/>
        </Suspense>
    </div>
  )
}
