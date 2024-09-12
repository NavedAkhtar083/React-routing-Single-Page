const Homepage =() =>{
    // const title="Welcome to the homepage";
    // const subtitle="Welcome to the subtitle";
    const data= {
        title:"Welcome to the homepage",
        subtitle:"Welcome to the subtitle",

    }
    const  array=[2,3,54,7,9]

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.subtitle}</p>
            <p>{array}</p>
        </div>

    );

}
export default Homepage;