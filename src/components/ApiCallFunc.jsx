
export default async function getData(subUrl){
    let Base= process.env.BASE_URL
    const res = await fetch(`${Base}/api/${subUrl}`)

    if(!res.ok){
        throw new Error('Something went wrong')
    }

    return res.json()
}