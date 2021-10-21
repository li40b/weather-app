// Form.js

const Form = (props) => {
    return (
        <form>
            <input type="text" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)}/>
            {/*onChange イベントの発生をJSで処理するための仕組み。cityにe.target.valueが保存される。*/}
            <button type="submit" onClick={props.getWeather}>Get Weather</button>
        </form>
    );
};

export default Form;