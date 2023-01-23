import './Stars.scss'

const Stars = () => {
    function createRandomNUmber(){
        const starNumb = Math.round(Math.random() * 100)
        console.log(starNumb )
    }
    createRandomNUmber()
    return(
        <div className="stars">
        </div>
    )
}

export default Stars