
'use Client'
import { useEffect, Suspense} from "react"
import { use } from 'react';
import useSWR from 'swr'
import TestSection from '../../../components/section/TestSection'

async function getData() {
    const res = await fetch('http://localhost:3000/api/user/1', { cache: 'no-store' });
    return res.json();
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

/* 
   * (marketing) 처럼 괄호로 폴더를 만들면 url를 
   * /marketing/blog 이아닌 /blog 으로 할 수 있다.
*/
export default function Blog() {
    console.log("Blog page")
    // const data = await getData();
    // console.log(`data`,data)

    // const { data, error } = useSWR('/api/user/1', fetcher)
    // if (error) return <div>error...</div>
    // if (!data) return <Spinner />

    // useEffect (() => {
    //     console.log("useEffect Blog")
    //   }, [])
    
    // useEffect (() => {
    // console.log("useEffect Blog ff")
    // })

    return (
      <div className="text-black">
          {/* /blog */}
          <Suspense fallback={<div>TestSection loading....</div>}>
            {/* @ts-ignore */}
            <TestSection/>
          </Suspense>
      </div>
    )
  }

//   function Section () {
//     const { data, error } = useSWR('/api/user/1', fetcher)
//     if (error) return <div>error...</div>
//     if (!data) return <div>loading...</div>

//       return (
//           <>
//             <h2>데이터를 가져옴.</h2>
//             <p>데이터 : {data.name}</p>
//           </>
//       )
//   }
  