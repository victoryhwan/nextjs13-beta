"use client";
import { use } from 'react';
import { useEffect, Suspense, useState} from "react"
import Spinner from '../Spinner'

const mainUrl = process.env.MAIN_URL

async function getData() {
    const res = await fetch(`${mainUrl}/api/user/1`, 
    { 
        // cache: 'no-store' //getServerSideProps
        cache: 'force-cache' //getStaticProps
        // next: { revalidate:10} //getStaticProps
    }
    );
    return res.json();
}
interface User{
    id : number;
    name : string;
}

const TestSectionClient = ()=>{
    const [data, setData] = useState<User | null>(null);

    useEffect(() => {
        async function fetchData() {
          const response = await getData();
          setData(response)
        }
        fetchData();
      }, []);
    
    if (!data) return <Spinner/>
    return (
        <div>   
            <p>데이터 : {data?.name}</p>
        </div>
    )
}

export default TestSectionClient