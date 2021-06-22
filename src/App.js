import React from 'react';
import axios from "axios";
import Movie from "./Movies";
import "./App.css";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {
        const {
            data: {
                data: {movies}
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies, isLoading: false});
    };

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default App;


/*import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component {
    state = {
        count: 0
    };
    add = () => {
        this.setState(current => ({count: current.count + 1}));
    };
    minus = () => {
        this.setState(current => ({count: current.count - 1}));
    };

    componentDidMount() {
        console.log("component rendered");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("I just updated");
    }

    render() {
        console.log("I'm rendering");
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App;*/

/*import React from 'react';
import PropTypes from "prop-types";

function Food(
{
    name, picture, rating
}
)
{
    return <div>
        <h2>I like {name}</h2>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt={name}/>
    </div>;
}

Food.propTypes =
{
    name: PropTypes.string.isRequired,
        picture
:
    PropTypes.string.isRequired,
        rating
:
    PropTypes.number.isRequired
}
;

// function Food(props)
{
//     return <h1>I like {props.fav}</h1>;
// }


    const foodILike = [
        {
            id: 1,
            name: "chicken",
            image: "http://www.ckhero.co.kr/new/theme/basic/img/main_quick_menu7.png",
            rating: 4.0
        },
        {
            id: 2,
            name: "sushi",
            image: "https://home.sapporo.kokosil.net/wp-content/uploads/2015/11/b472afdf4bedd81dc770349f8c6fef7e.jpg",
            rating: 3.8
        },
        {
            id: 3,
            name: "popcorn",
            image: "http://www.vodkaandbiscuits.com/wp-content/uploads/2016/03/The-Best-5-Ingredient-Popcorn-Ever_-6.jpg",
            rating: 4.2
        }
    ];

    function renderFood(dish) {
        // console.log(dish);
        return <Food key={dish.id} name={dish.name} picture={dish.image}/>
    }


    function App() {
        return (
            <div>
                {foodILike.map(dish => (
                    <Food
                        key={dish.id}
                        name={dish.name}
                        picture={dish.image}
                        rating={dish.rating}
                    />
                ))}
            </div>
        );
    }

export default
    App;
*/
