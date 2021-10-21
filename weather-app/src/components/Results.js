//Results.js

const Results = (props) => {
    return (
        <div>
            {props.results.cityName && //&&の左側が存在している時に右側の処理が実行されるようになる。
                <div className="results-city">{props.results.cityName}</div>
            }
            {props.results.country && 
                <div className="results-country">{props.results.country}</div>
            }
            {props.results.temperature && 
                <div className="results-temp">{props.results.temperature} <span>°C</span></div>
            }
            {props.results.conditionText && 
                <div className="results-condition">
                    <img src={props.results.icon} alt="icon"/>
                    <span>{props.results.conditionText}</span>
                </div>
            }
       </div>
    );
};

export default Results;