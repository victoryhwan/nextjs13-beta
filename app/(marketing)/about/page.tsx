
// 'use client';

import TestSection from '../../../components/section/TestSection'
import TestSectionClient from '../../../components/section/TestSectionClient'
import Spinner from '../../../components/Spinner'
import { useEffect, Suspense} from "react"
/* 
   * (marketing) 처럼 괄호로 폴더를 만들면 url를 
   * /marketing/about 이아닌 /about 으로 할 수 있다.
*/
export default function About() {
  console.log("About page")
  return (
    <div className="text-black">
        <Suspense fallback={<div>TestSection <Spinner/></div>}>
            {/* @ts-ignore */}
          <TestSection/>
        </Suspense>
        <Suspense fallback={<div>TestSectionClient <Spinner/></div>}>
            {/* @ts-ignore */}
          <TestSectionClient/>
        </Suspense>
    </div>
  )
}
