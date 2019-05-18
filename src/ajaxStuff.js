async function goFetch(category, id='') {
    try {
        const url = 'https://trip-planner-fsa.herokuapp.com';
        const result = await fetch(`${url}/api/${category}/${id}`);
        const data = await result.json();
        return data;
    } catch (error) {
        console.error(error);
    }

}

// console.log(goFetch('hotels', 5));

export default goFetch;