
const mainUrl = process.env.NEXT_PUBLIC_API_URL

async function getData() {
    let reqUrl = `${mainUrl}/api/user/1`
    // console.log(`TestSection reqUrl:${reqUrl}`)
    const res = await fetch(reqUrl, { cache: 'no-store' });
    return res.json();
}

const TestSection = async ()=>{
    const data = await getData();

    return (
        <div>   
            <p>데이터 : {data.name}</p>
        </div>
    )
}

export default TestSection