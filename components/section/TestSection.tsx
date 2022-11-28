
const mainUrl = process.env.MAIN_URL

async function getData() {
    const res = await fetch(`${mainUrl}/api/user/1`, { cache: 'no-store' });
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