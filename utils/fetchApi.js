import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async(url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'e686b7173amsh766f3e238aa2b39p1910a8jsna8c5a2cec52a',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data;
}